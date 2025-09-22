
// Example: one department (replace with full definitions of all departments you already had)
const hematology = {
  id: "hematology",
  name: "Hematology",
  tests: [
    { id: "hem_1", name: "Complete Blood Count (CBC)", parameter: "Hb, WBC, Platelets", unit: "", normalMin: 0, normalMax: 0, description: "General blood screening" },
    { id: "hem_2", name: "Hemoglobin (Hb)", parameter: "Hb", unit: "g/dL", normalMin: 13, normalMax: 17, description: "Hemoglobin levels" }
    // ... rest of your 38 hematology tests
  ]
};

// TODO: Add all your other departments here exactly as in your file

// ✅ Collect all departments in one array
const departmentsArray = [
  hematology,
  biochemistry,
  microbiology,
  serology,
  immunology,
  pathology,
  endocrinology,
  molecularBiology,
  histopathology,
  urinalysis,
  stoolParasitology,
  infectiousDiseases,
  virology,
  bloodBank,
  toxicology,
  genetics,
  miscellaneous
];

// ✅ Make it available globally
window.departmentsArray = departmentsArray;
