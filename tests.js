/* departments + tests database (structured) */
const departments = [
  {
    "id":"hematology",
    "name":"Hematology",
    "tests":[
      {"id":"hematology_hb","name":"Hemoglobin","parameter":"Hemoglobin","unit":"g/dL","normalMin":12,"normalMax":17.5,"description":"Hemoglobin concentration"},
      {"id":"hematology_rbc","name":"RBC Count","parameter":"RBC","unit":"million/µL","normalMin":4.0,"normalMax":6.0,"description":"Red blood cell count"},
      {"id":"hematology_wbc","name":"WBC Count","parameter":"WBC","unit":"cells/µL","normalMin":4000,"normalMax":11000,"description":"White blood cell count"},
      {"id":"hematology_platelets","name":"Platelets","parameter":"Platelet Count","unit":"cells/µL","normalMin":150000,"normalMax":450000,"description":"Platelet count"}
    ]
  },
  {
    "id":"clinical_chemistry",
    "name":"Clinical Chemistry",
    "tests":[
      {"id":"chem_glucose","name":"Glucose (Fasting)","parameter":"Glucose","unit":"mg/dL","normalMin":70,"normalMax":99,"description":"Fasting blood glucose"},
      {"id":"chem_urea","name":"Urea","parameter":"Urea","unit":"mg/dL","normalMin":7,"normalMax":20,"description":"Blood urea"},
      {"id":"chem_creatinine","name":"Creatinine","parameter":"Creatinine","unit":"mg/dL","normalMin":0.6,"normalMax":1.3,"description":"Serum creatinine"},
      {"id":"chem_alt","name":"ALT (SGPT)","parameter":"ALT","unit":"U/L","normalMin":0,"normalMax":45,"description":"Alanine transaminase"}
    ]
  },
  {
    "id":"microbiology",
    "name":"Microbiology",
    "tests":[
      {"id":"micro_culture","name":"Culture & Sensitivity","parameter":"Culture","unit":"","normalMin":0,"normalMax":0,"description":"Microbial culture & sensitivity"},
      {"id":"micro_gram","name":"Gram Stain","parameter":"Gram Stain","unit":"","normalMin":0,"normalMax":0,"description":"Gram stain result"}
    ]
  },
  {
    "id":"immunology",
    "name":"Immunology / Serology",
    "tests":[
      {"id":"sero_hiv","name":"HIV (Screen)","parameter":"HIV","unit":"","normalMin":0,"normalMax":0,"description":"HIV screening test"},
      {"id":"sero_hbsag","name":"HBsAg","parameter":"HBsAg","unit":"","normalMin":0,"normalMax":0,"description":"Hepatitis B surface antigen"}
    ]
  },
  {
    "id":"urinalysis",
    "name":"Urinalysis",
    "tests":[
      {"id":"urine_ph","name":"Urine pH","parameter":"pH","unit":"","normalMin":4.6,"normalMax":8.0,"description":"Urine acidity"},
      {"id":"urine_glucose","name":"Urine Glucose","parameter":"Glucose","unit":"","normalMin":0,"normalMax":0,"description":"Urine glucose presence"}
    ]
  },
  {
    "id":"histopathology",
    "name":"Histopathology",
    "tests":[
      {"id":"histo_biopsy","name":"Biopsy - Histology","parameter":"Biopsy","unit":"","normalMin":0,"normalMax":0,"description":"Histopathological exam"}
    ]
  },
  {
    "id":"molecular",
    "name":"Molecular Diagnostics (PCR)",
    "tests":[
      {"id":"pcr_sarscov2","name":"SARS-CoV-2 PCR","parameter":"PCR","unit":"copies/mL","normalMin":0,"normalMax":0,"description":"PCR for COVID-19"}
    ]
  },
  {
    "id":"endocrinology",
    "name":"Endocrinology / Hormones",
    "tests":[
      {"id":"endo_tsh","name":"TSH","parameter":"TSH","unit":"µIU/mL","normalMin":0.4,"normalMax":4.0,"description":"Thyroid stimulating hormone"},
      {"id":"endo_t4","name":"Free T4","parameter":"Free T4","unit":"ng/dL","normalMin":0.8,"normalMax":1.8,"description":"Free thyroxine"}
    ]
  },
  {
    "id":"blood_bank",
    "name":"Blood Bank / Transfusion",
    "tests":[
      {"id":"bb_group","name":"Blood Group & RH","parameter":"Blood Group","unit":"","normalMin":0,"normalMax":0,"description":"ABO and Rh grouping"},
      {"id":"bb_crossmatch","name":"Crossmatch","parameter":"Crossmatch","unit":"","normalMin":0,"normalMax":0,"description":"Compatibility testing"}
    ]
  },
  {
    "id":"cardiac",
    "name":"Cardiac Markers / Lipids",
    "tests":[
      {"id":"card_troponin","name":"Troponin I/T","parameter":"Troponin","unit":"ng/mL","normalMin":0,"normalMax":0.04,"description":"Cardiac troponin"},
      {"id":"card_ckmb","name":"CK-MB","parameter":"CK-MB","unit":"U/L","normalMin":0,"normalMax":5,"description":"Creatine kinase MB"}
    ]
  }
];
