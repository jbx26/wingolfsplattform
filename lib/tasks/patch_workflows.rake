namespace :patch do

  #
  task :workflows => [
    'workflows:part1',
    'workflows:part2',
    'workflows:part3'
  ]
  
  namespace :workflows do
    
    task :requirements do
      require 'importers/models/log'
    end
        
    task :print_info => [:requirements] do
      log.head "Workflow Patcher"
      log.info "Dieser Patch führt Korrekturen an den bereits importierten Workflows durch."
      log.info ""
    end
    
    task :part1 => [
      'environment',
      'requirements',
      'print_info',
      'add_bv_assignment_to_philistration'
    ]
    
    task :part2 => [
      'add_deceased_workflow'
    ]
    
    task :part3 => [
      'destroy_account_in_former_members_workflows'
    ]
    
    task :add_bv_assignment_to_philistration => [:environment, :requirements, :print_info] do
      log.section "BV-Zuordnung zum Philistrations-Workflow hinzufügen."
      log.info "Nach Philistration soll automatisch eine BV-Zuordnung durchgeführt werden."
      log.info ""
      
      workflows = Workflow.where(name: "Philistration")
      counter = 0
      for workflow in workflows
        last_step = workflow.steps.order(:sequence_index).last

        if last_step.brick_name != "AutoAssignBvBrick"
          new_step = workflow.steps.build
          new_step.sequence_index = last_step.sequence_index + 1
          new_step.brick_name = "AutoAssignBvBrick"
          new_step.save
          
          counter += 1
        end
        print ".".green
      end
      
      print "\n"
      log.info ""
      log.success "#{counter} Workflows modified."
    end
    
    task :add_deceased_workflow => [:environment, :requirements, :print_info] do
      log.section "Workflow hinzufügen: Todesfall."
      
      if Workflow.where(name: "Todesfall").present?
        log.success "Workflow mit dem Namen 'Todesfall' bereits vorhanden. Es werden keine Änderungen vorgenommen."
      else
        Workflow.find_or_create_mark_as_deceased_workflow
        
        log.success "Fertg."
      end
    end
    
    task :destroy_account_in_former_members_workflows => [:environment, :requirements, :print_info] do
      log.section "Workflows für Ehemalige ergänzen."
      log.info "* Entferne Gruppenmitgliedschaften, sofern nötig."
      log.info "* Sperre Zugang, sofern kein Wingolfit mehr."
      
      counter = 0
      workflow_names = ['Streichung', 'Schlichter Austritt', 'Ehrenhafter Austritt', 'Dimissio i.p.', 'Exclusio']
      Workflow.where(name: workflow_names).each do |workflow|
        last_step = workflow.steps.order(:sequence_index).last
        
        unless last_step.brick_name == "DestroyAccountAndEndMembershipsIfNeededBrick"
          new_step = workflow.steps.build
          new_step.sequence_index = last_step.sequence_index + 1
          new_step.brick_name = "DestroyAccountAndEndMembershipsIfNeededBrick"
          new_step.save
          
          counter += 1
        end
        print ".".green
      end
      print "\n"
      log.success "#{counter} Workflows korrigiert."
    end
    
    # Eingabe von Tim Zimmermann:
    # In Tübingen können Konkneipanten auch zu Inaktiven (loci und non-loci) werden.
    # Der Vorgang heißt ebenso Inaktivierung.
    # SF 2014-09-08
    #
    task :inaktivierung_tuebinger_konkneipanten => [:environment, :requirements, :print_info] do
      log.section "Inaktivierung Tübinger Konkneipanten"
      
      corporation = Corporation.find_by_token("T")
      workflow_loci = corporation.descendant_workflows.where(name: 'Inaktivierung loci').first
      workflow_non_loci = corporation.descendant_workflows.where(name: 'Inaktivierung non loci').first
      konkneipanten_group = corporation.status_group('Konkneipanten')
      
      new_step = workflow_loci.steps.create brick_name: "RemoveFromGroupBrick"
      new_step.parameters.create key: 'group_id', value: konkneipanten_group.id
      
      new_step = workflow_non_loci.steps.create brick_name: "RemoveFromGroupBrick"
      new_step.parameters.create key: 'group_id', value: konkneipanten_group.id
      
      workflow_loci.parent_groups << konkneipanten_group
      workflow_non_loci.parent_groups << konkneipanten_group

      log.success "Workflows zur Inaktivierung nun auch für Tübinger Konkneipanten vergfügbar."
    end
  end
  
  def log
    $log ||= Log.new
  end
  
end

