var universities = [
"accadis Hochschule Bad Homburg",
"Adam-Ries-Fachhochschule Erfurt",
"AKAD-Fachhochschulen (Stuttgart)",
"Akademie der Bildenden Künste München",
"Akademie der Bildenden Künste Nürnberg",
"Akademie für Darstellende Kunst Baden-Württemberg (Ludwigsburg)",
"Akademie für digitale Medienproduktion (Elstal)",
"Alanus Hochschule für Kunst und Gesellschaft (Alfter)",
"Albert-Ludwigs-Universität Freiburg",
"Alice-Salomon-Fachhochschule Berlin",
"AMD Akademie Mode & Design (Hamburg)",
"Apollon Hochschule für Gesundheitswirtschaft",
"Augustana-Hochschule Neuendettelsau",
"Baltic College",
"Bauhaus-Universität Weimar",
"bbw Hochschule (Berlin)",
"Bergische Universität Wuppertal",
"Berliner Technische Kunsthochschule",
"Beuth-Hochschule für Technik Berlin",
"Brandenburgische Technische Universität (Cottbus)",
"Bucerius Law School (Hamburg)",
"Burg Giebichenstein Hochschule für Kunst und Design Halle",
"Business and Information Technology School (Iserlohn)",
"Carl von Ossietzky Universität Oldenburg",
"Charité–Universitätsmedizin Berlin",
"Christian-Albrechts-Universität zu Kiel",
"design akademie berlin, Hochschule für Kommunikation und Design (FH)",
"Deutsche Film- und Fernsehakademie Berlin",
"Deutsche Hochschule der Polizei (Münster)",
"Deutsche Hochschule für Verwaltungswissenschaften Speyer",
"Deutsche Sporthochschule Köln",
"Dresden International University",
"Duale Hochschule Baden-Württemberg",
"Eberhard Karls Universität Tübingen",
"EBS Universität für Wirtschaft und Recht (Wiesbaden, Oestrich-Winkel)",
"EBZ Business School (Bochum)",
"Ernst-Moritz-Arndt-Universität Greifswald",
"ESCP Europe Campus Berlin",
"Euro Business College Hamburg",
"Europa-Universität Viadrina (Frankfurt (Oder))",
"European School of Management and Technology (Berlin)",
"Europäische Fachhochschule (Brühl)",
"Europäische Fernhochschule Hamburg",
"Evangelische Fachhochschule Berlin",
"Evangelische Fachhochschule Darmstadt",
"Evangelische Fachhochschule Freiburg",
"Evangelische Fachhochschule Nürnberg",
"Evangelische Fachhochschule Reutlingen-Ludwigsburg",
"Evangelische Fachhochschule Rheinland-Westfalen-Lippe (Bochum)",
"Evangelische Hochschule für Kirchenmusik Dresden",
"Evangelische Hochschule für Kirchenmusik Halle",
"Evangelische Hochschule für Kirchenmusik Tübingen",
"Evangelische Hochschule für Soziale Arbeit & Diakonie",
"Evangelische Hochschule für Soziale Arbeit Dresden",
"Evangelische Hochschule Tabor",
"Fachhochschule Aachen",
"Fachhochschule Bielefeld",
"Fachhochschule Bingen",
"Fachhochschule Brandenburg",
"Fachhochschule Braunschweig/Wolfenbüttel",
"Fachhochschule der Deutschen Bundesbank (Hachenburg)",
"Fachhochschule der Diakonie (Bielefeld)",
"Fachhochschule der Wirtschaft (Paderborn)",
"Fachhochschule des Bundes für öffentliche Verwaltung (Brühl)",
"Fachhochschule des Mittelstands Bielefeld",
"Fachhochschule Dortmund",
"Fachhochschule Düsseldorf",
"Fachhochschule Eberswalde",
"Fachhochschule Erfurt",
"Fachhochschule Flensburg",
"Fachhochschule Frankfurt",
"Fachhochschule für angewandtes Management (Erding)",
"Fachhochschule für die Wirtschaft (Hannover)",
"Fachhochschule für Finanzen Nordrhein-Westfalen (Nordkirchen)",
"Fachhochschule für Rechtspflege Nordrhein-Westfalen (Bad Münstereifel)",
"Fachhochschule für Rechtspflege Schwetzingen",
"Fachhochschule für Verwaltung und Dienstleistung (Altenholz)",
"Fachhochschule für Verwaltung und Rechtspflege Berlin",
"Fachhochschule für Wirtschaft und Technik Vechta/Diepholz/Oldenburg",
"Fachhochschule für öffentliche Verwaltung Nordrhein-Westfalen (Gelsenkirchen)",
"Fachhochschule für öffentliche Verwaltung und Rechtspflege in Bayern (München)",
"Fachhochschule Gelsenkirchen",
"Fachhochschule Hannover",
"Fachhochschule im Deutschen Roten Kreuz (Göttingen)",
"Fachhochschule Jena",
"Fachhochschule Kaiserslautern",
"Fachhochschule Kiel",
"Fachhochschule Koblenz",
"Fachhochschule Köln",
"Fachhochschule Ludwigshafen",
"Fachhochschule Lübeck",
"Fachhochschule Mainz",
"Fachhochschule Münster",
"Fachhochschule Nordhausen",
"Fachhochschule Ottersberg",
"Fachhochschule Potsdam",
"Fachhochschule Schmalkalden",
"Fachhochschule Schwäbisch Hall",
"Fachhochschule Stralsund",
"Fachhochschule Südwestfalen (Iserlohn)",
"Fachhochschule Trier",
"Fachhochschule Wedel",
"Fachhochschule Westküste (Heide)",
"Fachhochschule Wilhelmshaven/Oldenburg/Elsfleth",
"Fachhochschule Worms",
"Fachhochschule Würzburg-Schweinfurt",
"Fernuniversität in Hagen",
"FH KUNST Arnstadt",
"Filmakademie Baden-Württemberg (Ludwigsburg)",
"Folkwang Universität (Essen)",
"Frankfurt School of Finance & Management (Frankfurt am Main)",
"Freie Hochschule für Grafik-Design & Bildende Kunst Freiburg",
"Freie Hochschule Stuttgart",
"Freie Theologische Hochschule Gießen",
"Freie Universität Berlin",
"Friedrich-Alexander-Universität Erlangen-Nürnberg",
"Friedrich-Schiller-Universität Jena",
"Georg-August-Universität Göttingen",
"Georg-Simon-Ohm-Hochschule Nürnberg",
"German Graduate School of Management and Law (Heilbronn)",
"Gottfried Wilhelm Leibniz Universität Hannover",
"Gustav-Siewerth-Akademie (Weilheim-Bierbronnen)",
"H:G Hochschule für Gesundheit und Sport (Berlin)",
"HafenCity Universität (Hamburg)",
"Hamburg School of Business Administration",
"Handelshochschule Leipzig",
"HAWK Fachhochschule Hildesheim/Holzminden/Göttingen",
"Heinrich-Heine-Universität Düsseldorf",
"Helmut-Schmidt-Universität (Hamburg)",
"Hertie School of Governance (Berlin)",
"HFH Hamburger Fern-Hochschule",
"Hochschule 21 (Buxtehude)",
"Hochschule Aalen",
"Hochschule Albstadt-Sigmaringen",
"Hochschule Amberg-Weiden",
"Hochschule Anhalt (Bernburg, Dessau und Köthen)",
"Hochschule Ansbach",
"Hochschule Aschaffenburg",
"Hochschule Augsburg",
"Hochschule Biberach",
"Hochschule Bochum",
"Hochschule Bonn-Rhein-Sieg",
"Hochschule Bremen",
"Hochschule Bremerhaven",
"Hochschule Coburg",
"Hochschule Darmstadt",
"Hochschule Deggendorf",
"Hochschule der Bildenden Künste Saar (Saarbrücken)",
"Hochschule der Bundesagentur für Arbeit (Mannheim, Schwerin)",
"Hochschule der Medien Stuttgart",
"Hochschule der Polizei Hamburg",
"Hochschule der Sparkassen-Finanzgruppe (Bonn)",
"Hochschule Emden/Leer",
"Hochschule Esslingen",
"Hochschule Fresenius (Idstein)",
"Hochschule Fulda",
"Hochschule Furtwangen",
"Hochschule für Angewandte Sprachen München",
"Hochschule für Angewandte Wissenschaften Hamburg",
"Hochschule für Bildende Künste Braunschweig",
"Hochschule für Bildende Künste Dresden",
"Hochschule für bildende Künste Hamburg",
"Hochschule für evangelische Kirchenmusik Bayreuth",
"Hochschule für Fernsehen und Film München",
"Hochschule für Film und Fernsehen Potsdam",
"Hochschule für Finanzen Hamburg",
"Hochschule für Forstwirtschaft Rottenburg",
"Hochschule für Gestaltung Offenbach am Main",
"Hochschule für Gestaltung Schwäbisch Gmünd",
"Hochschule für Gesundheit (Bochum)",
"Hochschule für Grafik und Buchkunst Leipzig",
"Hochschule für Jüdische Studien (Heidelberg)",
"Hochschule für Katholische Kirchenmusik und Musikpädagogik Regensburg",
"Hochschule für Kirchenmusik der Evangelischen Kirche von Westfalen (Herford)",
"Hochschule für Kirchenmusik Heidelberg",
"Hochschule für Kunsttherapie Nürtingen",
"Hochschule für Künste Bremen",
"Hochschule für Musik Carl Maria von Weber Dresden",
"Hochschule für Musik Detmold",
"Hochschule für Musik Franz Liszt Weimar",
"Hochschule für Musik Freiburg",
"Hochschule für Musik Karlsruhe",
"Hochschule für Musik Nürnberg",
"Hochschule für Musik Saar (Saarbrücken)",
"Hochschule für Musik Trossingen",
"Hochschule für Musik und Darstellende Kunst Frankfurt am Main",
"Hochschule für Musik und Darstellende Kunst Mannheim",
"Hochschule für Musik und Darstellende Kunst Stuttgart",
"Hochschule für Musik und Tanz Köln",
"Hochschule für Musik und Theater Hamburg",
"Hochschule für Musik und Theater Hannover",
"Hochschule für Musik und Theater München",
"Hochschule für Musik und Theater Rostock",
"Hochschule für Musik und Theater „Felix Mendelssohn Bartholdy“ Leipzig",
"Hochschule für Musik Würzburg",
"Hochschule für Musik „Hanns Eisler“ Berlin",
"Hochschule für Oekonomie & Management (Essen)",
"Hochschule für Philosophie München",
"Hochschule für Politik München",
"Hochschule für Polizei (Villingen-Schwenningen)",
"Hochschule für Schauspielkunst „Ernst Busch“ Berlin",
"Hochschule für Technik Stuttgart",
"Hochschule für Technik und Wirtschaft Berlin",
"Hochschule für Technik und Wirtschaft des Saarlandes",
"Hochschule für Technik und Wirtschaft Dresden",
"Hochschule für Technik, Wirtschaft und Kultur Leipzig",
"Hochschule für Telekommunikation Leipzig",
"Hochschule für Wirtschaft und Recht Berlin",
"Hochschule für Wirtschaft und Umwelt Nürtingen-Geislingen",
"Hochschule für Öffentliche Verwaltung Bremen",
"Hochschule für öffentliche Verwaltung Kehl",
"Hochschule für öffentliche Verwaltung und Finanzen Ludwigsburg",
"Hochschule Hamm-Lippstadt",
"Hochschule Harz (Wernigerode und Halberstadt)",
"Hochschule Heilbronn",
"Hochschule Hof",
"Hochschule Ingolstadt",
"Hochschule Karlsruhe – Technik und Wirtschaft",
"Hochschule Kempten",
"Hochschule Konstanz Technik, Wirtschaft und Gestaltung",
"Hochschule Landshut",
"Hochschule Lausitz",
"Hochschule Magdeburg-Stendal",
"Hochschule Mannheim",
"Hochschule Merseburg",
"Hochschule Mittweida",
"Hochschule München",
"Hochschule Neu-Ulm",
"Hochschule Neubrandenburg",
"Hochschule Neuss (Neuss)",
"Hochschule Niederrhein (Krefeld/Mönchengladbach)",
"Hochschule Offenburg",
"Hochschule Osnabrück",
"Hochschule Ostwestfalen-Lippe Lemgo",
"Hochschule Pforzheim",
"Hochschule Ravensburg-Weingarten",
"Hochschule Regensburg",
"Hochschule Reutlingen",
"Hochschule Rhein-Waal (Kleve, Kamp-Lintfort)",
"Hochschule RheinMain (Wiesbaden, Rüsselsheim und Geisenheim)",
"Hochschule Rosenheim",
"Hochschule Ruhr West",
"Hochschule Ulm",
"Hochschule Weihenstephan-Triesdorf",
"Hochschule Wismar",
"Hochschule Zittau/Görlitz",
"Humboldt-Universität zu Berlin",
"IB-Hochschule Berlin",
"International Business School (Berlin)",
"International School of Management Dortmund",
"Internationale Fachhochschule Bad Honnef-Bonn",
"Internationale Hochschule Calw",
"Internationale Hochschule Liebenzell",
"Internationales Hochschulinstitut Zittau",
"ISS International Business School of Service Management (Hamburg)",
"Jacobs University Bremen",
"Johann Wolfgang Goethe-Universität Frankfurt am Main",
"Johannes Gutenberg-Universität Mainz",
"Julius-Maximilians-Universität Würzburg",
"Justus-Liebig-Universität Gießen",
"Karlshochschule International University",
"Karlsruher Institut für Technologie",
"Katholische Fachhochschule Freiburg",
"Katholische Hochschule für Kirchenmusik Rottenburg",
"Katholische Hochschule für Sozialwesen Berlin",
"Katholische Hochschule Nordrhein-Westfalen (Aachen, Köln, Münster, Paderborn)",
"Katholische Stiftungsfachhochschule München",
"Katholische Universität Eichstätt-Ingolstadt",
"Kirchliche Hochschule Wuppertal/Bethel",
"Kunstakademie Düsseldorf",
"Kunstakademie Münster",
"Kunsthochschule Berlin-Weißensee",
"Kunsthochschule für Medien Köln",
"Kunsthochschule Kassel",
"Kühne Logistics University (Hamburg)",
"Leopold-Mozart-Zentrum Augsburg",
"Leuphana Universität Lüneburg",
"Ludwig-Maximilians-Universität München",
"Lutherische Theologische Hochschule Oberursel",
"Macromedia Hochschule für Medien und Kommunikation (Hamburg)",
"Martin-Luther-Universität Halle-Wittenberg",
"Mathias Hochschule Rheine",
"Mediadesign Hochschule Berlin",
"Medizinische Hochschule Hannover",
"Merz Akademie (Stuttgart)",
"MSH Medical School Hamburg – Fachhochschule für Gesundheit und Medizin",
"Munich Business School",
"Musikhochschule Lübeck",
"Muthesius Kunsthochschule Kiel",
"Naturwissenschaftlich-Technische Akademie Isny",
"Nordakademie (Elmshorn)",
"Norddeutsche Fachhochschule für Rechtspflege (Hildesheim)",
"Otto-Friedrich-Universität Bamberg",
"Otto-von-Guericke-Universität Magdeburg",
"Palucca Schule Dresden",
"Philipps-Universität Marburg",
"Philosophisch-Theologische Hochschule Benediktbeuern",
"Philosophisch-Theologische Hochschule Münster",
"Philosophisch-Theologische Hochschule Sankt Georgen (Frankfurt am Main)",
"Philosophisch-Theologische Hochschule SVD St. Augustin",
"Philosophisch-Theologische Hochschule Vallendar",
"Popakademie Baden-Württemberg (Mannheim)",
"Private Fachhochschule Göttingen",
"Private Fernfachhochschule Sachsen (Chemnitz)",
"Provadis School of International Management and Technology (Frankfurt am Main)",
"Pädagogische Hochschule Freiburg",
"Pädagogische Hochschule Heidelberg",
"Pädagogische Hochschule Karlsruhe",
"Pädagogische Hochschule Ludwigsburg",
"Pädagogische Hochschule Schwäbisch Gmünd",
"Pädagogische Hochschule Weingarten",
"Rheinische Fachhochschule Köln",
"Rheinische Friedrich-Wilhelms-Universität Bonn",
"Robert-Schumann-Hochschule Düsseldorf",
"Ruhr-Universität Bochum",
"Ruprecht-Karls-Universität Heidelberg",
"RWTH Aachen",
"SRH Fachhochschule für Gesundheit Gera",
"SRH Fernfachhochschule Riedlingen",
"SRH Hochschule Berlin",
"SRH Hochschule Calw",
"SRH Hochschule für Logistik und Wirtschaft Hamm",
"SRH Hochschule Heidelberg",
"Staatliche Akademie der Bildenden Künste Karlsruhe",
"Staatliche Akademie der Bildenden Künste Stuttgart",
"Staatliche Hochschule für Bildende Künste – Städelschule (Frankfurt am Main)",
"Staatliche Hochschule für Gestaltung Karlsruhe",
"Steinbeis-Hochschule Berlin",
"Technische Fachhochschule Georg Agricola (Bochum)",
"Technische Hochschule Mittelhessen (Friedberg, Gießen, Wetzlar)",
"Technische Hochschule Wildau (FH)",
"Technische Universität Bergakademie Freiberg",
"Technische Universität Berlin",
"Technische Universität Braunschweig",
"Technische Universität Chemnitz",
"Technische Universität Clausthal",
"Technische Universität Darmstadt",
"Technische Universität Dortmund",
"Technische Universität Dresden",
"Technische Universität Hamburg-Harburg",
"Technische Universität Ilmenau",
"Technische Universität Kaiserslautern",
"Technische Universität München",
"Theologische Fakultät Fulda",
"Theologische Fakultät Paderborn",
"Theologische Fakultät Trier",
"Theologische Hochschule Friedensau",
"Theologische Hochschule Reutlingen",
"Theologisches Seminar Elstal (Fachhochschule)",
"Thüringer Fachhochschule für öffentliche Verwaltung (Gotha)",
"Tierärztliche Hochschule Hannover",
"Touro College Berlin",
"Ukrainische Freie Universität München",
"University of Management and Communication (FH) (Potsdam)",
"Universität Augsburg",
"Universität Bayreuth",
"Universität Bielefeld",
"Universität Bremen",
"Universität der Bundeswehr München",
"Universität der Künste Berlin",
"Universität des Saarlandes",
"Universität Duisburg-Essen",
"Universität Erfurt",
"Universität Flensburg",
"Universität Hamburg",
"Universität Hildesheim",
"Universität Hohenheim (Stuttgart)",
"Universität Kassel",
"Universität Koblenz-Landau",
"Universität Konstanz",
"Universität Leipzig",
"Universität Mannheim",
"Universität Osnabrück",
"Universität Paderborn",
"Universität Passau",
"Universität Potsdam",
"Universität Regensburg",
"Universität Rostock",
"Universität Siegen",
"Universität Stuttgart",
"Universität Trier",
"Universität Ulm",
"Universität Vechta",
"Universität Witten/Herdecke",
"Universität zu Köln",
"Universität zu Lübeck",
"Verwaltungsfachhochschule Hessen (Wiesbaden)",
"Westfälische Wilhelms-Universität (Münster)",
"Westsächsische Hochschule Zwickau",
"WHU – Otto Beisheim School of Management (Vallendar)",
"Wissenschaftliche Hochschule Lahr",
"Zeppelin University (Friedrichshafen)"
];
