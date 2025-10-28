export const departmentsArray = [
  {
    id: "1",
    name: "Hematology",
    tests: [
      { id: "t1", name: "Complete Blood Count (CBC)", parameter: "Blood Count", unit: "cells/µL", normalMin: "4", normalMax: "11" },
      { id: "t2", name: "Hemoglobin", parameter: "HGB", unit: "g/dL", normalMin: "12", normalMax: "16" }
    ]
  },
  {
    id: "2",
    name: "Biochemistry",
    tests: [
      { id: "t3", name: "Glucose", parameter: "FBS", unit: "mg/dL", normalMin: "70", normalMax: "100" },
      { id: "t4", name: "Cholesterol", parameter: "Total Cholesterol", unit: "mg/dL", normalMin: "100", normalMax: "200" }
    ]
  },
  {
    id: "3",
    name: "Microbiology",
    tests: [
      { id: "t5", name: "Blood Culture", parameter: "Culture", unit: "N/A", normalMin: "Negative", normalMax: "Negative" }
    ]
  }
];
