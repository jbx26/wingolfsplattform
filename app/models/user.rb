# -*- coding: utf-8 -*-
class User < ActiveRecord::Base

  attr_accessible           :first_name, :last_name, :alias, :email, :new_password

  attr_accessor             :new_password

  validates_presence_of     :first_name, :last_name, :alias
  validates_uniqueness_of   :alias, :if => Proc.new { |user| ! user.alias.blank? }
  validates_format_of       :email, :with => /^[a-z0-9_.-]+@[a-z0-9-]+\.[a-z.]+$/i, :if => Proc.new { |user| user.email }
  validates_confirmation_of :new_password, :if => Proc.new{ |user| ! user.new_password.blank? }
                            # Ein Passwort muss nicht zwangsläufig angegeben werden. Wenn kein Passwort angegeben ist, 
                            # kann sich der Benutzer aber nicht anmelden. Er hat dann sozusagen keinen Account.

  has_many                  :profile_fields, :autosave => true

  has_dag_links             link_class_name: 'DagLink', ancestor_class_names: %w(Page Group), descendant_class_names: %w(Page)
  has_dag_links             link_class_name: 'RelationshipDagLink', ancestor_class_names: %w(Relationship), descendant_class_names: %w(Relationship), prefix: 'relationships'

  is_navable

  before_save               :encrypt_password_if_necessary, :generate_alias_if_necessary, :capitalize_name, :write_alias_attribute
  after_save                Proc.new { |user| user.profile.save }


  def name
    first_name + " " + last_name
  end

  # Diese Funktion gibt eine sinnvolle Beschriftung des Benutzers zurück, z.B. für die Beschriftung von Menüpunkten, 
  # die diesen Benutzer repräsentieren. Damit ist der Aufruf der gleiche wie etwa beim Page-Modell. 
  # <tt>@title = page.title</tt>, <tt>@title = user.title</tt>.
  # Die Funktion gibt *nicht* den akademischen Titel oder die Anrede des Benutzers zurück.
  def title
    name # TODO Später hier vmlt. die Aktivitätszahl hinzufügen.
  end

  def profile
    @profile = Profile.new( self ) unless @profile
    return @profile
  end

  def alias
    @alias = Alias.new( read_attribute( :alias ), :user => self ) unless @alias.kind_of? Alias
    return @alias
  end
  def alias=( a )
    @alias = a
    write_alias_attribute
  end

  def new_password
    @new_password = Password.new( @new_password, :user => self ) unless @new_password.kind_of? Password
    return @new_password
  end

  def email
    profile.email
  end
  def email=( email )
    profile.email = email
  end

  def capitalize_name
    self.first_name.capitalize!
    self.last_name.capitalize! unless last_name.include?( " " ) # "de Silva"
    self.name
  end

  def has_account?
    # Wenn kein Passwort gespeichert ist, hat der Benutzer keinen Account.
    ! self.encrypted_password.blank?
  end

  def deactivate_account
    # Der Account wird deaktiviert, indem das verschlüsselte Passwort entfernt wird.
    self.encrypted_password = ""
  end

  def relationships
    relationships_parent_relationships + relationships_child_relationships
  end

  def self.authenticate( login_name, password )
    try_to_authenticate_by = [ :alias, :last_name, :name, :email ]
    user = nil
    try_to_authenticate_by.each do |attribute|
      if User.column_names.include? attribute.to_s
        # Wenn es eine SQL-Tabellenspalte ist, kann SQL zum (schnelleren) Suchen benutzt werden.
        user = send( "find_by_" + attribute.to_s, login_name )
      else
        # Wenn es keine Tabellenspalte ist, müssen erst alle Objekte in ein Array geladen 
        # und dann gefltert werden.
        User.find_each do |u|
          result = u.send attribute.to_s
          if result
            if result.downcase == login_name.downcase
              user = u
              break
            end
          end
        end
      end
      break if user
    end
    if user
      if Password.new( password ).valid_against_encrypted_password?( 
                                                                    user.encrypted_password,
                                                                    user.salt
                                                                    )
        return user
      else
        raise "wrong_password"
      end
    else
      raise "no_user_found"
    end
  end

  private

  def write_alias_attribute
    write_attribute :alias, @alias
  end

  def generate_alias_if_necessary
    self.alias.generate! if self.alias.blank?
  end

  def encrypt_password_if_necessary
    # Nur wenn ein neues Passwort gesetzt wird, wird es verschlüsselt gespeichert.
    # Das heißt auch, dass man auf diese Art das Passwort nicht entfernen kann.
    # Entfernen müsste man das Passwort, indem man direkt self.encrypted_password = "" setzt.
    self.encrypted_password = new_password.encrypt unless new_password.blank?
  end

end

class UserPropertyString < String

  attr_accessor :user

  def initialize( string = "", options = {} )
    string = "" unless string
    super( string )
    @user = options[ :user ]
  end

end

class Alias < UserPropertyString

  def generate
    if @user && @user.first_name && @user.last_name
      if User.find( :all, :conditions => "last_name='#{@user.last_name}' AND id!='#{@user.id}'" ).count == 0
        # Wenn der Nachname nur einmal vorkommt, wird dieser als Alias vorgeschlagen.      
        suggestion = Alias.new @user.last_name.downcase # mustermann
      elsif User.find( 
                      :all, 
                      :conditions => "last_name='#{@user.last_name}' 
                                      AND first_name LIKE '#{@user.first_name.first}%' 
                                      AND id!='#{@user.id}'" 
                      ).count == 0
        # Wenn der erste Buchstabe des Vornamens den Nutzer eindeutig identifiziert:
        suggestion = Alias.new @user.first_name.downcase.first + "." + @user.last_name.downcase # m.mustermann
      else
        suggestion = Alias.new @user.first_name.downcase + "." + @user.last_name.downcase # max.mustermann            
      end
      # Wenn dies immernoch nicht ausreicht, wird das ganze zu einem Fehler führen, 
      # da der Alias weder leer noch bereits vorhanden sein darf.
      # Der Benutzer wird dann aufgefordert, einen anderen Alias zu wählen.
      return suggestion
    end
  end

  def generate!
    replace generate
  end

  def taken?
    User.find( :all, :conditions => "alias='#{self}'" ).size > 0
  end

end

class Password < UserPropertyString

  def encrypt
    # Ein Leerpasswort soll nicht verschlüsselt werden, um nicht den Eindruck zu erwecken, es sei ein Passwort vorhanden.
    return "" if self.blank?
    # Wenn noch kein Salt besteht, muss für den Benutzer einmalig einer erstellt werden.
    unless @user.salt 
      @user.salt = Digest::SHA1.hexdigest( "--#{Time.now}--#{@user.name}--" )
    end
    encrypt_string( self, @user.salt )
  end

  def valid_against_encrypted_password?( encrypted_password, salt )
    encrypted_password == encrypt_string( self, salt )
  end

  def self.generate
    Password.new( `pwgen -N 1 -n -c -B`.to_s[0..-2], :user => @user )
  end

  def generate!
    replace self.class.generate
  end

  private

  def encrypt_string( string, salt )
    Digest::SHA1.hexdigest( "--#{salt}--#{string}--" )
  end
  
end


