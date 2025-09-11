// Test data for all departments
const testData = {
  "Hematology": [
    { name: "CBC (Complete Blood Count)", normalRange: "4.5 - 11 x10^9/L" },
    { name: "Hemoglobin", normalRange: "13 - 17 g/dL (M), 12 - 15 g/dL (F)" },
    { name: "Platelet Count", normalRange: "150 - 400 x10^9/L" },
  ],
  "Biochemistry": [
    { name: "Glucose (Fasting)", normalRange: "70 - 100 mg/dL" },
    { name: "Cholesterol", normalRange: "< 200 mg/dL" },
    { name: "Triglycerides", normalRange: "< 150 mg/dL" },
  ],
  "Immunology": [
    { name: "HIV", normalRange: "Non-Reactive" },
    { name: "Hepatitis B", normalRange: "Non-Reactive" },
    { name: "Hepatitis C", normalRange: "Non-Reactive" },
  ],
  "Microbiology": [
    { name: "Urine Culture", normalRange: "No Growth" },
    { name: "Blood Culture", normalRange: "No Growth" },
    { name: "Sputum Culture", normalRange: "No Pathogen" },
  ],
  "Clinical Pathology": [
    { name: "Urine Routine", normalRange: "Normal" },
    { name: "Stool Routine", normalRange: "Normal" },
    { name: "ESR", normalRange: "0 - 20 mm/hr" },
  ],
  "Hormones": [
    { name: "TSH", normalRange: "0.4 - 4.0 mIU/L" },
    { name: "T3", normalRange: "80 - 200 ng/dL" },
    { name: "T4", normalRange: "5 - 12 µg/dL" },
  ],
  "Serology": [
    { name: "Widal Test", normalRange: "Negative" },
    { name: "Dengue NS1", normalRange: "Negative" },
    { name: "CRP", normalRange: "< 5 mg/L" },
  ],
  "Molecular Biology": [
    { name: "PCR - TB", normalRange: "Negative" },
    { name: "PCR - COVID-19", normalRange: "Negative" },
    { name: "PCR - Hepatitis C", normalRange: "Negative" },
  ],
  "Histopathology": [
    { name: "Biopsy", normalRange: "Normal Tissue" },
    { name: "Cytology", normalRange: "Normal Cells" },
  ],
  "Electrolytes": [
    { name: "Sodium", normalRange: "135 - 145 mmol/L" },
    { name: "Potassium", normalRange: "3.5 - 5.0 mmol/L" },
    { name: "Calcium", normalRange: "8.5 - 10.5 mg/dL" },
  ]
};

// Add more departments and tests if needed
