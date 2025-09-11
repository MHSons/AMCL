/* test-data.js
   Programmatically generate 20 departments with ~30 tests each.
   Each test has: name, parameter, normalMin, normalMax, unit, normalRange (string), description
*/

const departmentNames = [
  "Hematology","Biochemistry","Microbiology","Immunology","Serology",
  "Hormones","Urinalysis","Toxicology","Histopathology","Cytology",
  "Genetics","Blood Bank","Microbiology Cultures","Virology","Parasitology",
  "Electrolytes","Cardiac Markers","Liver Function","Renal Function","Endocrinology"
];

// small map of reusable descriptions for common test types
const commonDescriptions = {
  "CBC": "Complete Blood Count (CBC) evaluates red blood cells, white blood cells, hemoglobin, hematocrit and platelets. It helps detect anemia, infection, and many other disorders.",
  "Hemoglobin": "Hemoglobin test measures the amount of hemoglobin in the blood — an indicator of oxygen-carrying capacity.",
  "Glucose (Fasting)": "Fasting blood glucose is used to screen for diabetes mellitus and to monitor diabetic control.",
  "Creatinine": "Serum creatinine estimates kidney function and is used in calculation of eGFR.",
  "ALT": "Alanine transaminase (ALT) is a liver enzyme — elevated levels indicate liver cell injury.",
  "AST": "Aspartate transaminase (AST) is a liver enzyme; used with ALT to assess liver health.",
  "TSH": "Thyroid stimulating hormone (TSH) helps evaluate thyroid function; abnormal levels suggest hypo-/hyperthyroidism.",
  "Lipids": "Lipid profile measures cholesterol and triglycerides to assess cardiovascular risk.",
  "COVID-19 PCR": "PCR test detects viral RNA of SARS-CoV-2 indicating active infection.",
  "Urine Routine": "Urine routine microscopy screens for urinary tract infections, hematuria and proteinuria."
};

// helper to format range string
function rangeStr(min, max, unit) {
  return `${min} - ${max} ${unit}`;
}

// Generate tests for each department
const testData = {};
const testDescriptions = {};

departmentNames.forEach((dept, dIndex) => {
  const arr = [];
  // create ~30 tests per department
  for (let i = 1; i <= 30; i++) {
    // test base name
    const baseName = `${dept} Test ${i}`;
    // parameter name (e.g., Param 1 RBC)
    const parameter = `Parameter ${i}`;
    // generate pseudo normal range depending on i
    const base = 5 + ((i * 7) % 50); // a number between 5 and ~55
    const min = (base * 0.6).toFixed(2);
    const max = (base * 1.4).toFixed(2);
    const unit = (i % 3 === 0) ? 'mg/dL' : (i % 3 === 1) ? 'IU/L' : 'mmol/L';

    const normalRange = rangeStr(Number(min), Number(max), unit);

    const testObj = {
      id: `${dept.substring(0,3).toUpperCase()}-${String(i).padStart(3,'0')}`,
      name: baseName,
      parameter: parameter,
      normalMin: Number(min),
      normalMax: Number(max),
      unit: unit,
      normalRange: normalRange
    };

    arr.push(testObj);

    // provide description for some recognizable tests where possible, else generic
    if (i === 1) {
      // give a human-friendly name by department
      const commonMap = {
        "Hematology": "CBC (Complete Blood Count)",
        "Biochemistry": "Glucose (Fasting)",
        "Microbiology": "Urine Culture",
        "Immunology": "HIV",
        "Serology": "Widal Test",
        "Hormones": "TSH",
        "Urinalysis": "Urine Routine",
        "Toxicology": "Toxic Screen",
        "Histopathology": "Biopsy",
        "Cytology": "Pap Smear",
        "Genetics": "Karyotype",
        "Blood Bank": "Blood Group & RH",
        "Microbiology Cultures": "Blood Culture",
        "Virology": "PCR - Viral Panel",
        "Parasitology": "Stool Ova & Parasites",
        "Electrolytes": "Sodium",
        "Cardiac Markers": "Troponin I",
        "Liver Function": "ALT",
        "Renal Function": "Creatinine",
        "Endocrinology": "T3/T4"
      };
      const niceName = commonMap[dept] || baseName;
      testObj.name = niceName;
      // attach known description if exists
      const descKey = niceName.split(' ')[0];
      testDescriptions[testObj.id] = commonDescriptions[descKey] || `The ${niceName} is performed to assess ${dept.toLowerCase()} related function. Refer to clinical context for interpretation.`;
    } else {
      testDescriptions[testObj.id] = `The ${testObj.name} measures ${testObj.parameter}. Normal range: ${testObj.normalRange}. Results should be interpreted in clinical context.`;
    }
  }

  testData[dept] = arr;
});

// expose globally (for HTML pages to use)
if (typeof window !== 'undefined') {
  window.testData = testData;
  window.testDescriptions = testDescriptions;
} else {
  // node environment (if ever needed)
  global.testData = testData;
  global.testDescriptions = testDescriptions;
}
