const departments = [
  {
    "id": "hematology",
    "name": "Hematology",
    "tests": [
      {
        "id": "hematology_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "hematology_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "hematology_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "hematology_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "hematology_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "hematology_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "hematology_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "hematology_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "hematology_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "hematology_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "hematology_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "hematology_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "hematology_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "hematology_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "hematology_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "hematology_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "hematology_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "hematology_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "hematology_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "hematology_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "hematology_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "hematology_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "hematology_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "hematology_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "hematology_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "hematology_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "hematology_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "hematology_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "hematology_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "hematology_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "biochemistry",
    "name": "Biochemistry",
    "tests": [
      {
        "id": "biochemistry_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "biochemistry_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "biochemistry_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "biochemistry_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "biochemistry_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "biochemistry_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "biochemistry_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "biochemistry_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "biochemistry_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "biochemistry_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "biochemistry_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "biochemistry_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "biochemistry_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "biochemistry_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "biochemistry_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "biochemistry_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "biochemistry_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "biochemistry_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "biochemistry_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "biochemistry_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "biochemistry_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "biochemistry_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "biochemistry_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "biochemistry_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "biochemistry_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "biochemistry_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "biochemistry_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "biochemistry_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "biochemistry_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "biochemistry_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "microbiology",
    "name": "Microbiology",
    "tests": [
      {
        "id": "microbiology_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "microbiology_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "microbiology_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "microbiology_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "microbiology_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "microbiology_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "microbiology_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "microbiology_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "microbiology_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "microbiology_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "microbiology_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "microbiology_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "microbiology_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "microbiology_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "microbiology_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "microbiology_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "microbiology_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "microbiology_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "microbiology_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "microbiology_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "microbiology_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "microbiology_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "microbiology_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "microbiology_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "microbiology_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "microbiology_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "microbiology_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "microbiology_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "microbiology_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "microbiology_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "immunology",
    "name": "Immunology",
    "tests": [
      {
        "id": "immunology_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "immunology_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "immunology_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "immunology_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "immunology_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "immunology_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "immunology_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "immunology_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "immunology_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "immunology_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "immunology_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "immunology_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "immunology_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "immunology_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "immunology_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "immunology_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "immunology_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "immunology_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "immunology_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "immunology_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "immunology_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "immunology_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "immunology_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "immunology_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "immunology_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "immunology_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "immunology_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "immunology_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "immunology_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "immunology_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "serology",
    "name": "Serology",
    "tests": [
      {
        "id": "serology_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "serology_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "serology_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "serology_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "serology_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "serology_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "serology_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "serology_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "serology_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "serology_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "serology_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "serology_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "serology_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "serology_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "serology_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "serology_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "serology_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "serology_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "serology_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "serology_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "serology_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "serology_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "serology_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "serology_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "serology_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "serology_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "serology_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "serology_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "serology_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "serology_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "hormones",
    "name": "Hormones",
    "tests": [
      {
        "id": "hormones_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "hormones_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "hormones_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "hormones_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "hormones_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "hormones_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "hormones_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "hormones_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "hormones_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "hormones_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "hormones_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "hormones_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "hormones_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "hormones_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "hormones_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "hormones_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "hormones_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "hormones_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "hormones_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "hormones_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "hormones_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "hormones_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "hormones_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "hormones_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "hormones_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "hormones_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "hormones_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "hormones_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "hormones_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "hormones_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "tumor_markers",
    "name": "Tumor Markers",
    "tests": [
      {
        "id": "tumor_markers_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "tumor_markers_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "tumor_markers_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "tumor_markers_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "tumor_markers_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "tumor_markers_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "tumor_markers_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "tumor_markers_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "tumor_markers_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "tumor_markers_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "tumor_markers_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "tumor_markers_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "tumor_markers_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "tumor_markers_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "tumor_markers_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "tumor_markers_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "tumor_markers_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "tumor_markers_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "tumor_markers_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "tumor_markers_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "tumor_markers_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "tumor_markers_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "tumor_markers_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "tumor_markers_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "tumor_markers_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "tumor_markers_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "tumor_markers_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "tumor_markers_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "tumor_markers_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "tumor_markers_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "cytology",
    "name": "Cytology",
    "tests": [
      {
        "id": "cytology_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "cytology_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "cytology_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "cytology_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "cytology_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "cytology_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "cytology_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "cytology_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "cytology_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "cytology_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "cytology_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "cytology_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "cytology_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "cytology_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "cytology_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "cytology_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "cytology_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "cytology_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "cytology_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "cytology_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "cytology_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "cytology_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "cytology_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "cytology_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "cytology_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "cytology_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "cytology_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "cytology_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "cytology_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "cytology_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "histopathology",
    "name": "Histopathology",
    "tests": [
      {
        "id": "histopathology_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "histopathology_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "histopathology_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "histopathology_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "histopathology_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "histopathology_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "histopathology_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "histopathology_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "histopathology_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "histopathology_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "histopathology_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "histopathology_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "histopathology_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "histopathology_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "histopathology_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "histopathology_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "histopathology_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "histopathology_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "histopathology_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "histopathology_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "histopathology_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "histopathology_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "histopathology_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "histopathology_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "histopathology_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "histopathology_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "histopathology_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "histopathology_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "histopathology_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "histopathology_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "molecular_biology",
    "name": "Molecular Biology",
    "tests": [
      {
        "id": "molecular_biology_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "molecular_biology_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "molecular_biology_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "molecular_biology_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "molecular_biology_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "molecular_biology_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "molecular_biology_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "molecular_biology_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "molecular_biology_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "molecular_biology_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "molecular_biology_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "molecular_biology_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "molecular_biology_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "molecular_biology_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "molecular_biology_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "molecular_biology_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "molecular_biology_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "molecular_biology_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "molecular_biology_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "molecular_biology_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "molecular_biology_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "molecular_biology_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "molecular_biology_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "molecular_biology_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "molecular_biology_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "molecular_biology_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "molecular_biology_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "molecular_biology_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "molecular_biology_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "molecular_biology_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "genetics",
    "name": "Genetics",
    "tests": [
      {
        "id": "genetics_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "genetics_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "genetics_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "genetics_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "genetics_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "genetics_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "genetics_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "genetics_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "genetics_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "genetics_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "genetics_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "genetics_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "genetics_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "genetics_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "genetics_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "genetics_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "genetics_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "genetics_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "genetics_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "genetics_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "genetics_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "genetics_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "genetics_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "genetics_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "genetics_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "genetics_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "genetics_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "genetics_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "genetics_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "genetics_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "toxicology",
    "name": "Toxicology",
    "tests": [
      {
        "id": "toxicology_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "toxicology_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "toxicology_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "toxicology_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "toxicology_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "toxicology_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "toxicology_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "toxicology_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "toxicology_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "toxicology_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "toxicology_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "toxicology_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "toxicology_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "toxicology_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "toxicology_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "toxicology_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "toxicology_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "toxicology_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "toxicology_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "toxicology_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "toxicology_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "toxicology_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "toxicology_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "toxicology_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "toxicology_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "toxicology_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "toxicology_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "toxicology_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "toxicology_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "toxicology_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "clinical_pathology",
    "name": "Clinical Pathology",
    "tests": [
      {
        "id": "clinical_pathology_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "clinical_pathology_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "clinical_pathology_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "clinical_pathology_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "clinical_pathology_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "clinical_pathology_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "clinical_pathology_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "clinical_pathology_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "clinical_pathology_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "clinical_pathology_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "clinical_pathology_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "clinical_pathology_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "clinical_pathology_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "clinical_pathology_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "clinical_pathology_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "clinical_pathology_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "clinical_pathology_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "clinical_pathology_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "clinical_pathology_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "clinical_pathology_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "clinical_pathology_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "clinical_pathology_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "clinical_pathology_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "clinical_pathology_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "clinical_pathology_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "clinical_pathology_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "clinical_pathology_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "clinical_pathology_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "clinical_pathology_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "clinical_pathology_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "virology",
    "name": "Virology",
    "tests": [
      {
        "id": "virology_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "virology_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "virology_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "virology_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "virology_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "virology_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "virology_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "virology_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "virology_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "virology_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "virology_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "virology_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "virology_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "virology_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "virology_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "virology_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "virology_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "virology_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "virology_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "virology_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "virology_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "virology_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "virology_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "virology_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "virology_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "virology_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "virology_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "virology_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "virology_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "virology_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "parasitology",
    "name": "Parasitology",
    "tests": [
      {
        "id": "parasitology_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "parasitology_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "parasitology_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "parasitology_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "parasitology_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "parasitology_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "parasitology_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "parasitology_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "parasitology_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "parasitology_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "parasitology_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "parasitology_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "parasitology_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "parasitology_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "parasitology_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "parasitology_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "parasitology_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "parasitology_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "parasitology_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "parasitology_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "parasitology_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "parasitology_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "parasitology_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "parasitology_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "parasitology_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "parasitology_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "parasitology_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "parasitology_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "parasitology_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "parasitology_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "mycology",
    "name": "Mycology",
    "tests": [
      {
        "id": "mycology_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "mycology_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "mycology_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "mycology_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "mycology_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "mycology_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "mycology_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "mycology_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "mycology_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "mycology_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "mycology_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "mycology_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "mycology_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "mycology_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "mycology_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "mycology_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "mycology_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "mycology_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "mycology_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "mycology_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "mycology_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "mycology_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "mycology_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "mycology_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "mycology_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "mycology_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "mycology_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "mycology_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "mycology_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "mycology_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "coagulation",
    "name": "Coagulation",
    "tests": [
      {
        "id": "coagulation_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "coagulation_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "coagulation_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "coagulation_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "coagulation_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "coagulation_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "coagulation_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "coagulation_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "coagulation_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "coagulation_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "coagulation_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "coagulation_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "coagulation_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "coagulation_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "coagulation_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "coagulation_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "coagulation_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "coagulation_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "coagulation_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "coagulation_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "coagulation_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "coagulation_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "coagulation_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "coagulation_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "coagulation_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "coagulation_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "coagulation_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "coagulation_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "coagulation_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "coagulation_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "blood_banking",
    "name": "Blood Banking",
    "tests": [
      {
        "id": "blood_banking_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "blood_banking_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "blood_banking_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "blood_banking_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "blood_banking_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "blood_banking_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "blood_banking_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "blood_banking_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "blood_banking_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "blood_banking_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "blood_banking_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "blood_banking_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "blood_banking_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "blood_banking_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "blood_banking_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "blood_banking_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "blood_banking_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "blood_banking_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "blood_banking_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "blood_banking_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "blood_banking_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "blood_banking_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "blood_banking_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "blood_banking_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "blood_banking_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "blood_banking_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "blood_banking_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "blood_banking_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "blood_banking_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "blood_banking_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "endocrinology",
    "name": "Endocrinology",
    "tests": [
      {
        "id": "endocrinology_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "endocrinology_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "endocrinology_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "endocrinology_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "endocrinology_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "endocrinology_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "endocrinology_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "endocrinology_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "endocrinology_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "endocrinology_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "endocrinology_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "endocrinology_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "endocrinology_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "endocrinology_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "endocrinology_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "endocrinology_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "endocrinology_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "endocrinology_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "endocrinology_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "endocrinology_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "endocrinology_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "endocrinology_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "endocrinology_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "endocrinology_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "endocrinology_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "endocrinology_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "endocrinology_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "endocrinology_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "endocrinology_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "endocrinology_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "cardiac_markers",
    "name": "Cardiac Markers",
    "tests": [
      {
        "id": "cardiac_markers_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "cardiac_markers_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "cardiac_markers_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "cardiac_markers_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "cardiac_markers_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "cardiac_markers_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "cardiac_markers_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "cardiac_markers_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "cardiac_markers_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "cardiac_markers_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "cardiac_markers_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "cardiac_markers_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "cardiac_markers_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "cardiac_markers_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "cardiac_markers_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "cardiac_markers_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "cardiac_markers_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "cardiac_markers_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "cardiac_markers_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "cardiac_markers_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "cardiac_markers_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "cardiac_markers_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "cardiac_markers_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "cardiac_markers_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "cardiac_markers_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "cardiac_markers_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "cardiac_markers_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "cardiac_markers_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "cardiac_markers_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "cardiac_markers_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "renal_function",
    "name": "Renal Function",
    "tests": [
      {
        "id": "renal_function_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "renal_function_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "renal_function_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "renal_function_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "renal_function_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "renal_function_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "renal_function_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "renal_function_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "renal_function_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "renal_function_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "renal_function_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "renal_function_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "renal_function_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "renal_function_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "renal_function_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "renal_function_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "renal_function_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "renal_function_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "renal_function_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "renal_function_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "renal_function_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "renal_function_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "renal_function_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "renal_function_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "renal_function_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "renal_function_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "renal_function_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "renal_function_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "renal_function_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "renal_function_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "liver_function",
    "name": "Liver Function",
    "tests": [
      {
        "id": "liver_function_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "liver_function_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "liver_function_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "liver_function_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "liver_function_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "liver_function_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "liver_function_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "liver_function_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "liver_function_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "liver_function_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "liver_function_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "liver_function_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "liver_function_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "liver_function_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "liver_function_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "liver_function_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "liver_function_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "liver_function_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "liver_function_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "liver_function_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "liver_function_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "liver_function_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "liver_function_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "liver_function_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "liver_function_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "liver_function_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "liver_function_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "liver_function_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "liver_function_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "liver_function_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "lipid_profile",
    "name": "Lipid Profile",
    "tests": [
      {
        "id": "lipid_profile_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "lipid_profile_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "lipid_profile_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "lipid_profile_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "lipid_profile_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "lipid_profile_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "lipid_profile_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "lipid_profile_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "lipid_profile_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "lipid_profile_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "lipid_profile_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "lipid_profile_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "lipid_profile_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "lipid_profile_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "lipid_profile_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "lipid_profile_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "lipid_profile_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "lipid_profile_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "lipid_profile_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "lipid_profile_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "lipid_profile_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "lipid_profile_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "lipid_profile_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "lipid_profile_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "lipid_profile_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "lipid_profile_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "lipid_profile_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "lipid_profile_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "lipid_profile_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "lipid_profile_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "electrolytes",
    "name": "Electrolytes",
    "tests": [
      {
        "id": "electrolytes_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "electrolytes_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "electrolytes_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "electrolytes_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "electrolytes_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "electrolytes_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "electrolytes_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "electrolytes_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "electrolytes_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "electrolytes_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "electrolytes_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "electrolytes_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "electrolytes_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "electrolytes_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "electrolytes_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "electrolytes_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "electrolytes_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "electrolytes_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "electrolytes_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "electrolytes_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "electrolytes_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "electrolytes_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "electrolytes_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "electrolytes_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "electrolytes_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "electrolytes_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "electrolytes_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "electrolytes_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "electrolytes_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "electrolytes_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "arterial_blood_gas",
    "name": "Arterial Blood Gas",
    "tests": [
      {
        "id": "arterial_blood_gas_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "arterial_blood_gas_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "arterial_blood_gas_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "arterial_blood_gas_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "arterial_blood_gas_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "arterial_blood_gas_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "arterial_blood_gas_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "arterial_blood_gas_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "arterial_blood_gas_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "arterial_blood_gas_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "arterial_blood_gas_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "arterial_blood_gas_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "arterial_blood_gas_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "arterial_blood_gas_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "arterial_blood_gas_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "arterial_blood_gas_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "arterial_blood_gas_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "arterial_blood_gas_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "arterial_blood_gas_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "arterial_blood_gas_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "arterial_blood_gas_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "arterial_blood_gas_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "arterial_blood_gas_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "arterial_blood_gas_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "arterial_blood_gas_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "arterial_blood_gas_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "arterial_blood_gas_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "arterial_blood_gas_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "arterial_blood_gas_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "arterial_blood_gas_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "drug_monitoring",
    "name": "Drug Monitoring",
    "tests": [
      {
        "id": "drug_monitoring_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "drug_monitoring_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "drug_monitoring_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "drug_monitoring_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "drug_monitoring_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "drug_monitoring_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "drug_monitoring_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "drug_monitoring_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "drug_monitoring_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "drug_monitoring_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "drug_monitoring_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "drug_monitoring_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "drug_monitoring_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "drug_monitoring_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "drug_monitoring_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "drug_monitoring_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "drug_monitoring_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "drug_monitoring_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "drug_monitoring_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "drug_monitoring_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "drug_monitoring_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "drug_monitoring_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "drug_monitoring_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "drug_monitoring_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "drug_monitoring_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "drug_monitoring_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "drug_monitoring_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "drug_monitoring_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "drug_monitoring_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "drug_monitoring_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "allergy_testing",
    "name": "Allergy Testing",
    "tests": [
      {
        "id": "allergy_testing_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "allergy_testing_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "allergy_testing_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "allergy_testing_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "allergy_testing_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "allergy_testing_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "allergy_testing_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "allergy_testing_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "allergy_testing_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "allergy_testing_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "allergy_testing_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "allergy_testing_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "allergy_testing_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "allergy_testing_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "allergy_testing_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "allergy_testing_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "allergy_testing_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "allergy_testing_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "allergy_testing_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "allergy_testing_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "allergy_testing_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "allergy_testing_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "allergy_testing_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "allergy_testing_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "allergy_testing_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "allergy_testing_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "allergy_testing_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "allergy_testing_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "allergy_testing_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "allergy_testing_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "infectious_diseases",
    "name": "Infectious Diseases",
    "tests": [
      {
        "id": "infectious_diseases_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "infectious_diseases_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "infectious_diseases_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "infectious_diseases_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "infectious_diseases_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "infectious_diseases_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "infectious_diseases_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "infectious_diseases_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "infectious_diseases_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "infectious_diseases_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "infectious_diseases_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "infectious_diseases_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "infectious_diseases_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "infectious_diseases_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "infectious_diseases_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "infectious_diseases_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "infectious_diseases_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "infectious_diseases_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "infectious_diseases_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "infectious_diseases_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "infectious_diseases_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "infectious_diseases_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "infectious_diseases_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "infectious_diseases_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "infectious_diseases_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "infectious_diseases_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "infectious_diseases_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "infectious_diseases_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "infectious_diseases_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "infectious_diseases_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "prenatal_screening",
    "name": "Prenatal Screening",
    "tests": [
      {
        "id": "prenatal_screening_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "prenatal_screening_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "prenatal_screening_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "prenatal_screening_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "prenatal_screening_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "prenatal_screening_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "prenatal_screening_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "prenatal_screening_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "prenatal_screening_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "prenatal_screening_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "prenatal_screening_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "prenatal_screening_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "prenatal_screening_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "prenatal_screening_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "prenatal_screening_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "prenatal_screening_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "prenatal_screening_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "prenatal_screening_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "prenatal_screening_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "prenatal_screening_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "prenatal_screening_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "prenatal_screening_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "prenatal_screening_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "prenatal_screening_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "prenatal_screening_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "prenatal_screening_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "prenatal_screening_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "prenatal_screening_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "prenatal_screening_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "prenatal_screening_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  },
  {
    "id": "newborn_screening",
    "name": "Newborn Screening",
    "tests": [
      {
        "id": "newborn_screening_1",
        "name": "Hemoglobin",
        "parameter": "Hemoglobin",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description for Hemoglobin"
      },
      {
        "id": "newborn_screening_2",
        "name": "WBC Count",
        "parameter": "WBC Count",
        "unit": "x10^9/L",
        "normalMin": 4,
        "normalMax": 11,
        "description": "Description for WBC Count"
      },
      {
        "id": "newborn_screening_3",
        "name": "Platelet Count",
        "parameter": "Platelets",
        "unit": "x10^9/L",
        "normalMin": 150,
        "normalMax": 400,
        "description": "Description for Platelet Count"
      },
      {
        "id": "newborn_screening_4",
        "name": "Blood Glucose",
        "parameter": "Glucose",
        "unit": "mg/dL",
        "normalMin": 70,
        "normalMax": 110,
        "description": "Description for Blood Glucose"
      },
      {
        "id": "newborn_screening_5",
        "name": "Serum Cholesterol",
        "parameter": "Cholesterol",
        "unit": "mg/dL",
        "normalMin": 150,
        "normalMax": 200,
        "description": "Description for Serum Cholesterol"
      },
      {
        "id": "newborn_screening_6",
        "name": "Serum Creatinine",
        "parameter": "Creatinine",
        "unit": "mg/dL",
        "normalMin": 0.6,
        "normalMax": 1.2,
        "description": "Description for Serum Creatinine"
      },
      {
        "id": "newborn_screening_7",
        "name": "Serum Urea",
        "parameter": "Urea",
        "unit": "mg/dL",
        "normalMin": 20,
        "normalMax": 40,
        "description": "Description for Serum Urea"
      },
      {
        "id": "newborn_screening_8",
        "name": "ALT (SGPT)",
        "parameter": "ALT",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for ALT (SGPT)"
      },
      {
        "id": "newborn_screening_9",
        "name": "AST (SGOT)",
        "parameter": "AST",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description for AST (SGOT)"
      },
      {
        "id": "newborn_screening_10",
        "name": "Serum Calcium",
        "parameter": "Calcium",
        "unit": "mg/dL",
        "normalMin": 8.5,
        "normalMax": 10.5,
        "description": "Description for Serum Calcium"
      },
      {
        "id": "newborn_screening_11",
        "name": "Total Protein",
        "parameter": "Protein",
        "unit": "g/dL",
        "normalMin": 6,
        "normalMax": 8,
        "description": "Description for Total Protein"
      },
      {
        "id": "newborn_screening_12",
        "name": "Albumin",
        "parameter": "Albumin",
        "unit": "g/dL",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Albumin"
      },
      {
        "id": "newborn_screening_13",
        "name": "Bilirubin",
        "parameter": "Bilirubin",
        "unit": "mg/dL",
        "normalMin": 0.1,
        "normalMax": 1.2,
        "description": "Description for Bilirubin"
      },
      {
        "id": "newborn_screening_14",
        "name": "Alkaline Phosphatase",
        "parameter": "ALP",
        "unit": "U/L",
        "normalMin": 40,
        "normalMax": 120,
        "description": "Description for Alkaline Phosphatase"
      },
      {
        "id": "newborn_screening_15",
        "name": "LDH",
        "parameter": "LDH",
        "unit": "U/L",
        "normalMin": 100,
        "normalMax": 190,
        "description": "Description for LDH"
      },
      {
        "id": "newborn_screening_16",
        "name": "CRP",
        "parameter": "CRP",
        "unit": "mg/L",
        "normalMin": 0,
        "normalMax": 5,
        "description": "Description for CRP"
      },
      {
        "id": "newborn_screening_17",
        "name": "ESR",
        "parameter": "ESR",
        "unit": "mm/hr",
        "normalMin": 0,
        "normalMax": 20,
        "description": "Description for ESR"
      },
      {
        "id": "newborn_screening_18",
        "name": "HbA1c",
        "parameter": "HbA1c",
        "unit": "%",
        "normalMin": 4,
        "normalMax": 6,
        "description": "Description for HbA1c"
      },
      {
        "id": "newborn_screening_19",
        "name": "TSH",
        "parameter": "TSH",
        "unit": "\u00b5IU/mL",
        "normalMin": 0.4,
        "normalMax": 4.0,
        "description": "Description for TSH"
      },
      {
        "id": "newborn_screening_20",
        "name": "T3",
        "parameter": "T3",
        "unit": "ng/dL",
        "normalMin": 80,
        "normalMax": 200,
        "description": "Description for T3"
      },
      {
        "id": "newborn_screening_21",
        "name": "T4",
        "parameter": "T4",
        "unit": "\u00b5g/dL",
        "normalMin": 5,
        "normalMax": 12,
        "description": "Description for T4"
      },
      {
        "id": "newborn_screening_22",
        "name": "Vitamin D",
        "parameter": "Vitamin D",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 100,
        "description": "Description for Vitamin D"
      },
      {
        "id": "newborn_screening_23",
        "name": "Vitamin B12",
        "parameter": "Vitamin B12",
        "unit": "pg/mL",
        "normalMin": 200,
        "normalMax": 900,
        "description": "Description for Vitamin B12"
      },
      {
        "id": "newborn_screening_24",
        "name": "Iron",
        "parameter": "Iron",
        "unit": "\u00b5g/dL",
        "normalMin": 60,
        "normalMax": 170,
        "description": "Description for Iron"
      },
      {
        "id": "newborn_screening_25",
        "name": "Ferritin",
        "parameter": "Ferritin",
        "unit": "ng/mL",
        "normalMin": 30,
        "normalMax": 400,
        "description": "Description for Ferritin"
      },
      {
        "id": "newborn_screening_26",
        "name": "Sodium",
        "parameter": "Sodium",
        "unit": "mmol/L",
        "normalMin": 135,
        "normalMax": 145,
        "description": "Description for Sodium"
      },
      {
        "id": "newborn_screening_27",
        "name": "Potassium",
        "parameter": "Potassium",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.0,
        "description": "Description for Potassium"
      },
      {
        "id": "newborn_screening_28",
        "name": "Chloride",
        "parameter": "Chloride",
        "unit": "mmol/L",
        "normalMin": 98,
        "normalMax": 107,
        "description": "Description for Chloride"
      },
      {
        "id": "newborn_screening_29",
        "name": "Bicarbonate",
        "parameter": "HCO3",
        "unit": "mmol/L",
        "normalMin": 22,
        "normalMax": 28,
        "description": "Description for Bicarbonate"
      },
      {
        "id": "newborn_screening_30",
        "name": "Phosphorus",
        "parameter": "Phosphorus",
        "unit": "mg/dL",
        "normalMin": 2.5,
        "normalMax": 4.5,
        "description": "Description for Phosphorus"
      }
    ]
  }
];

module.exports = departments;