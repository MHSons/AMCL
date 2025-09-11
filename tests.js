// Alpha Med Lab - Full Departments & Tests Database

const departments = [
  {
    "id": "hematology",
    "name": "Hematology",
    "tests": [
      {
        "id": "hematology_1",
        "name": "Test B 1",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "hematology_2",
        "name": "Test C 2",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "hematology_3",
        "name": "Test D 3",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "hematology_4",
        "name": "Test E 4",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "hematology_5",
        "name": "Test A 5",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "hematology_6",
        "name": "Test B 6",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "hematology_7",
        "name": "Test C 7",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "hematology_8",
        "name": "Test D 8",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "hematology_9",
        "name": "Test E 9",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "hematology_10",
        "name": "Test A 10",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "hematology_11",
        "name": "Test B 11",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "hematology_12",
        "name": "Test C 12",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "hematology_13",
        "name": "Test D 13",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "hematology_14",
        "name": "Test E 14",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "hematology_15",
        "name": "Test A 15",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "hematology_16",
        "name": "Test B 16",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "hematology_17",
        "name": "Test C 17",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "hematology_18",
        "name": "Test D 18",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "hematology_19",
        "name": "Test E 19",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "hematology_20",
        "name": "Test A 20",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "hematology_21",
        "name": "Test B 21",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "hematology_22",
        "name": "Test C 22",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "hematology_23",
        "name": "Test D 23",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "hematology_24",
        "name": "Test E 24",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "hematology_25",
        "name": "Test A 25",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "hematology_26",
        "name": "Test B 26",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "hematology_27",
        "name": "Test C 27",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "hematology_28",
        "name": "Test D 28",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "hematology_29",
        "name": "Test E 29",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "hematology_30",
        "name": "Test A 30",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      }
    ]
  },
  {
    "id": "biochemistry",
    "name": "Biochemistry",
    "tests": [
      {
        "id": "biochemistry_1",
        "name": "Test B 1",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "biochemistry_2",
        "name": "Test C 2",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "biochemistry_3",
        "name": "Test D 3",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "biochemistry_4",
        "name": "Test E 4",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "biochemistry_5",
        "name": "Test A 5",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "biochemistry_6",
        "name": "Test B 6",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "biochemistry_7",
        "name": "Test C 7",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "biochemistry_8",
        "name": "Test D 8",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "biochemistry_9",
        "name": "Test E 9",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "biochemistry_10",
        "name": "Test A 10",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "biochemistry_11",
        "name": "Test B 11",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "biochemistry_12",
        "name": "Test C 12",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "biochemistry_13",
        "name": "Test D 13",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "biochemistry_14",
        "name": "Test E 14",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "biochemistry_15",
        "name": "Test A 15",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "biochemistry_16",
        "name": "Test B 16",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "biochemistry_17",
        "name": "Test C 17",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "biochemistry_18",
        "name": "Test D 18",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "biochemistry_19",
        "name": "Test E 19",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "biochemistry_20",
        "name": "Test A 20",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "biochemistry_21",
        "name": "Test B 21",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "biochemistry_22",
        "name": "Test C 22",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "biochemistry_23",
        "name": "Test D 23",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "biochemistry_24",
        "name": "Test E 24",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "biochemistry_25",
        "name": "Test A 25",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "biochemistry_26",
        "name": "Test B 26",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "biochemistry_27",
        "name": "Test C 27",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "biochemistry_28",
        "name": "Test D 28",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "biochemistry_29",
        "name": "Test E 29",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "biochemistry_30",
        "name": "Test A 30",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      }
    ]
  },
  {
    "id": "microbiology",
    "name": "Microbiology",
    "tests": [
      {
        "id": "microbiology_1",
        "name": "Test B 1",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "microbiology_2",
        "name": "Test C 2",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "microbiology_3",
        "name": "Test D 3",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "microbiology_4",
        "name": "Test E 4",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "microbiology_5",
        "name": "Test A 5",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "microbiology_6",
        "name": "Test B 6",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "microbiology_7",
        "name": "Test C 7",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "microbiology_8",
        "name": "Test D 8",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "microbiology_9",
        "name": "Test E 9",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "microbiology_10",
        "name": "Test A 10",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "microbiology_11",
        "name": "Test B 11",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "microbiology_12",
        "name": "Test C 12",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "microbiology_13",
        "name": "Test D 13",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "microbiology_14",
        "name": "Test E 14",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "microbiology_15",
        "name": "Test A 15",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "microbiology_16",
        "name": "Test B 16",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "microbiology_17",
        "name": "Test C 17",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "microbiology_18",
        "name": "Test D 18",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "microbiology_19",
        "name": "Test E 19",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "microbiology_20",
        "name": "Test A 20",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "microbiology_21",
        "name": "Test B 21",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "microbiology_22",
        "name": "Test C 22",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "microbiology_23",
        "name": "Test D 23",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "microbiology_24",
        "name": "Test E 24",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "microbiology_25",
        "name": "Test A 25",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "microbiology_26",
        "name": "Test B 26",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "microbiology_27",
        "name": "Test C 27",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "microbiology_28",
        "name": "Test D 28",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "microbiology_29",
        "name": "Test E 29",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "microbiology_30",
        "name": "Test A 30",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      }
    ]
  },
  {
    "id": "immunology",
    "name": "Immunology",
    "tests": [
      {
        "id": "immunology_1",
        "name": "Test B 1",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "immunology_2",
        "name": "Test C 2",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "immunology_3",
        "name": "Test D 3",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "immunology_4",
        "name": "Test E 4",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "immunology_5",
        "name": "Test A 5",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "immunology_6",
        "name": "Test B 6",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "immunology_7",
        "name": "Test C 7",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "immunology_8",
        "name": "Test D 8",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "immunology_9",
        "name": "Test E 9",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "immunology_10",
        "name": "Test A 10",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "immunology_11",
        "name": "Test B 11",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "immunology_12",
        "name": "Test C 12",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "immunology_13",
        "name": "Test D 13",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "immunology_14",
        "name": "Test E 14",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "immunology_15",
        "name": "Test A 15",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "immunology_16",
        "name": "Test B 16",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "immunology_17",
        "name": "Test C 17",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "immunology_18",
        "name": "Test D 18",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "immunology_19",
        "name": "Test E 19",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "immunology_20",
        "name": "Test A 20",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "immunology_21",
        "name": "Test B 21",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "immunology_22",
        "name": "Test C 22",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "immunology_23",
        "name": "Test D 23",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "immunology_24",
        "name": "Test E 24",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "immunology_25",
        "name": "Test A 25",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "immunology_26",
        "name": "Test B 26",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "immunology_27",
        "name": "Test C 27",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "immunology_28",
        "name": "Test D 28",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "immunology_29",
        "name": "Test E 29",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "immunology_30",
        "name": "Test A 30",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      }
    ]
  },
  {
    "id": "serology",
    "name": "Serology",
    "tests": [
      {
        "id": "serology_1",
        "name": "Test B 1",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "serology_2",
        "name": "Test C 2",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "serology_3",
        "name": "Test D 3",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "serology_4",
        "name": "Test E 4",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "serology_5",
        "name": "Test A 5",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "serology_6",
        "name": "Test B 6",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "serology_7",
        "name": "Test C 7",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "serology_8",
        "name": "Test D 8",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "serology_9",
        "name": "Test E 9",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "serology_10",
        "name": "Test A 10",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "serology_11",
        "name": "Test B 11",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "serology_12",
        "name": "Test C 12",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "serology_13",
        "name": "Test D 13",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "serology_14",
        "name": "Test E 14",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "serology_15",
        "name": "Test A 15",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "serology_16",
        "name": "Test B 16",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "serology_17",
        "name": "Test C 17",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "serology_18",
        "name": "Test D 18",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "serology_19",
        "name": "Test E 19",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "serology_20",
        "name": "Test A 20",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "serology_21",
        "name": "Test B 21",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "serology_22",
        "name": "Test C 22",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "serology_23",
        "name": "Test D 23",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "serology_24",
        "name": "Test E 24",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "serology_25",
        "name": "Test A 25",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "serology_26",
        "name": "Test B 26",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "serology_27",
        "name": "Test C 27",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "serology_28",
        "name": "Test D 28",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "serology_29",
        "name": "Test E 29",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "serology_30",
        "name": "Test A 30",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      }
    ]
  },
  {
    "id": "hormones",
    "name": "Hormones",
    "tests": [
      {
        "id": "hormones_1",
        "name": "Test B 1",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "hormones_2",
        "name": "Test C 2",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "hormones_3",
        "name": "Test D 3",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "hormones_4",
        "name": "Test E 4",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "hormones_5",
        "name": "Test A 5",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "hormones_6",
        "name": "Test B 6",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "hormones_7",
        "name": "Test C 7",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "hormones_8",
        "name": "Test D 8",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "hormones_9",
        "name": "Test E 9",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "hormones_10",
        "name": "Test A 10",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "hormones_11",
        "name": "Test B 11",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "hormones_12",
        "name": "Test C 12",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "hormones_13",
        "name": "Test D 13",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "hormones_14",
        "name": "Test E 14",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "hormones_15",
        "name": "Test A 15",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "hormones_16",
        "name": "Test B 16",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "hormones_17",
        "name": "Test C 17",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "hormones_18",
        "name": "Test D 18",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "hormones_19",
        "name": "Test E 19",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "hormones_20",
        "name": "Test A 20",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "hormones_21",
        "name": "Test B 21",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "hormones_22",
        "name": "Test C 22",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "hormones_23",
        "name": "Test D 23",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "hormones_24",
        "name": "Test E 24",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "hormones_25",
        "name": "Test A 25",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "hormones_26",
        "name": "Test B 26",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "hormones_27",
        "name": "Test C 27",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "hormones_28",
        "name": "Test D 28",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "hormones_29",
        "name": "Test E 29",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "hormones_30",
        "name": "Test A 30",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      }
    ]
  },
  {
    "id": "tumor_markers",
    "name": "Tumor Markers",
    "tests": [
      {
        "id": "tumor_markers_1",
        "name": "Test B 1",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "tumor_markers_2",
        "name": "Test C 2",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "tumor_markers_3",
        "name": "Test D 3",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "tumor_markers_4",
        "name": "Test E 4",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "tumor_markers_5",
        "name": "Test A 5",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "tumor_markers_6",
        "name": "Test B 6",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "tumor_markers_7",
        "name": "Test C 7",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "tumor_markers_8",
        "name": "Test D 8",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "tumor_markers_9",
        "name": "Test E 9",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "tumor_markers_10",
        "name": "Test A 10",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "tumor_markers_11",
        "name": "Test B 11",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "tumor_markers_12",
        "name": "Test C 12",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "tumor_markers_13",
        "name": "Test D 13",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "tumor_markers_14",
        "name": "Test E 14",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "tumor_markers_15",
        "name": "Test A 15",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "tumor_markers_16",
        "name": "Test B 16",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "tumor_markers_17",
        "name": "Test C 17",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "tumor_markers_18",
        "name": "Test D 18",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "tumor_markers_19",
        "name": "Test E 19",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "tumor_markers_20",
        "name": "Test A 20",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "tumor_markers_21",
        "name": "Test B 21",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "tumor_markers_22",
        "name": "Test C 22",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "tumor_markers_23",
        "name": "Test D 23",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "tumor_markers_24",
        "name": "Test E 24",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "tumor_markers_25",
        "name": "Test A 25",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "tumor_markers_26",
        "name": "Test B 26",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "tumor_markers_27",
        "name": "Test C 27",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "tumor_markers_28",
        "name": "Test D 28",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "tumor_markers_29",
        "name": "Test E 29",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "tumor_markers_30",
        "name": "Test A 30",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      }
    ]
  },
  {
    "id": "cytology",
    "name": "Cytology",
    "tests": [
      {
        "id": "cytology_1",
        "name": "Test B 1",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "cytology_2",
        "name": "Test C 2",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "cytology_3",
        "name": "Test D 3",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "cytology_4",
        "name": "Test E 4",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "cytology_5",
        "name": "Test A 5",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "cytology_6",
        "name": "Test B 6",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "cytology_7",
        "name": "Test C 7",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "cytology_8",
        "name": "Test D 8",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "cytology_9",
        "name": "Test E 9",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "cytology_10",
        "name": "Test A 10",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "cytology_11",
        "name": "Test B 11",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "cytology_12",
        "name": "Test C 12",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "cytology_13",
        "name": "Test D 13",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "cytology_14",
        "name": "Test E 14",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "cytology_15",
        "name": "Test A 15",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "cytology_16",
        "name": "Test B 16",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "cytology_17",
        "name": "Test C 17",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "cytology_18",
        "name": "Test D 18",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "cytology_19",
        "name": "Test E 19",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "cytology_20",
        "name": "Test A 20",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "cytology_21",
        "name": "Test B 21",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "cytology_22",
        "name": "Test C 22",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "cytology_23",
        "name": "Test D 23",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "cytology_24",
        "name": "Test E 24",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "cytology_25",
        "name": "Test A 25",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "cytology_26",
        "name": "Test B 26",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "cytology_27",
        "name": "Test C 27",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "cytology_28",
        "name": "Test D 28",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "cytology_29",
        "name": "Test E 29",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "cytology_30",
        "name": "Test A 30",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      }
    ]
  },
  {
    "id": "histopathology",
    "name": "Histopathology",
    "tests": [
      {
        "id": "histopathology_1",
        "name": "Test B 1",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "histopathology_2",
        "name": "Test C 2",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "histopathology_3",
        "name": "Test D 3",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "histopathology_4",
        "name": "Test E 4",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "histopathology_5",
        "name": "Test A 5",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "histopathology_6",
        "name": "Test B 6",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "histopathology_7",
        "name": "Test C 7",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "histopathology_8",
        "name": "Test D 8",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "histopathology_9",
        "name": "Test E 9",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "histopathology_10",
        "name": "Test A 10",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "histopathology_11",
        "name": "Test B 11",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "histopathology_12",
        "name": "Test C 12",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "histopathology_13",
        "name": "Test D 13",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "histopathology_14",
        "name": "Test E 14",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "histopathology_15",
        "name": "Test A 15",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "histopathology_16",
        "name": "Test B 16",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "histopathology_17",
        "name": "Test C 17",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "histopathology_18",
        "name": "Test D 18",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "histopathology_19",
        "name": "Test E 19",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "histopathology_20",
        "name": "Test A 20",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "histopathology_21",
        "name": "Test B 21",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "histopathology_22",
        "name": "Test C 22",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "histopathology_23",
        "name": "Test D 23",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "histopathology_24",
        "name": "Test E 24",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "histopathology_25",
        "name": "Test A 25",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "histopathology_26",
        "name": "Test B 26",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "histopathology_27",
        "name": "Test C 27",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "histopathology_28",
        "name": "Test D 28",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "histopathology_29",
        "name": "Test E 29",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "histopathology_30",
        "name": "Test A 30",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      }
    ]
  },
  {
    "id": "virology",
    "name": "Virology",
    "tests": [
      {
        "id": "virology_1",
        "name": "Test B 1",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "virology_2",
        "name": "Test C 2",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "virology_3",
        "name": "Test D 3",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "virology_4",
        "name": "Test E 4",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "virology_5",
        "name": "Test A 5",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "virology_6",
        "name": "Test B 6",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "virology_7",
        "name": "Test C 7",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "virology_8",
        "name": "Test D 8",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "virology_9",
        "name": "Test E 9",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "virology_10",
        "name": "Test A 10",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "virology_11",
        "name": "Test B 11",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "virology_12",
        "name": "Test C 12",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "virology_13",
        "name": "Test D 13",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "virology_14",
        "name": "Test E 14",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "virology_15",
        "name": "Test A 15",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "virology_16",
        "name": "Test B 16",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "virology_17",
        "name": "Test C 17",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "virology_18",
        "name": "Test D 18",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "virology_19",
        "name": "Test E 19",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "virology_20",
        "name": "Test A 20",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "virology_21",
        "name": "Test B 21",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "virology_22",
        "name": "Test C 22",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "virology_23",
        "name": "Test D 23",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "virology_24",
        "name": "Test E 24",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "virology_25",
        "name": "Test A 25",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "virology_26",
        "name": "Test B 26",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "virology_27",
        "name": "Test C 27",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "virology_28",
        "name": "Test D 28",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "virology_29",
        "name": "Test E 29",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "virology_30",
        "name": "Test A 30",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      }
    ]
  },
  {
    "id": "coagulation",
    "name": "Coagulation",
    "tests": [
      {
        "id": "coagulation_1",
        "name": "Test B 1",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "coagulation_2",
        "name": "Test C 2",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "coagulation_3",
        "name": "Test D 3",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "coagulation_4",
        "name": "Test E 4",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "coagulation_5",
        "name": "Test A 5",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "coagulation_6",
        "name": "Test B 6",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "coagulation_7",
        "name": "Test C 7",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "coagulation_8",
        "name": "Test D 8",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "coagulation_9",
        "name": "Test E 9",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "coagulation_10",
        "name": "Test A 10",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "coagulation_11",
        "name": "Test B 11",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "coagulation_12",
        "name": "Test C 12",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "coagulation_13",
        "name": "Test D 13",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "coagulation_14",
        "name": "Test E 14",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "coagulation_15",
        "name": "Test A 15",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "coagulation_16",
        "name": "Test B 16",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "coagulation_17",
        "name": "Test C 17",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "coagulation_18",
        "name": "Test D 18",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "coagulation_19",
        "name": "Test E 19",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "coagulation_20",
        "name": "Test A 20",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "coagulation_21",
        "name": "Test B 21",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "coagulation_22",
        "name": "Test C 22",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "coagulation_23",
        "name": "Test D 23",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "coagulation_24",
        "name": "Test E 24",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "coagulation_25",
        "name": "Test A 25",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "coagulation_26",
        "name": "Test B 26",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "coagulation_27",
        "name": "Test C 27",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "coagulation_28",
        "name": "Test D 28",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "coagulation_29",
        "name": "Test E 29",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "coagulation_30",
        "name": "Test A 30",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      }
    ]
  },
  {
    "id": "toxicology",
    "name": "Toxicology",
    "tests": [
      {
        "id": "toxicology_1",
        "name": "Test B 1",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "toxicology_2",
        "name": "Test C 2",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "toxicology_3",
        "name": "Test D 3",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "toxicology_4",
        "name": "Test E 4",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "toxicology_5",
        "name": "Test A 5",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "toxicology_6",
        "name": "Test B 6",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "toxicology_7",
        "name": "Test C 7",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "toxicology_8",
        "name": "Test D 8",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "toxicology_9",
        "name": "Test E 9",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "toxicology_10",
        "name": "Test A 10",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "toxicology_11",
        "name": "Test B 11",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "toxicology_12",
        "name": "Test C 12",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "toxicology_13",
        "name": "Test D 13",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "toxicology_14",
        "name": "Test E 14",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "toxicology_15",
        "name": "Test A 15",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "toxicology_16",
        "name": "Test B 16",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "toxicology_17",
        "name": "Test C 17",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "toxicology_18",
        "name": "Test D 18",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "toxicology_19",
        "name": "Test E 19",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "toxicology_20",
        "name": "Test A 20",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "toxicology_21",
        "name": "Test B 21",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "toxicology_22",
        "name": "Test C 22",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "toxicology_23",
        "name": "Test D 23",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "toxicology_24",
        "name": "Test E 24",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "toxicology_25",
        "name": "Test A 25",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "toxicology_26",
        "name": "Test B 26",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "toxicology_27",
        "name": "Test C 27",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "toxicology_28",
        "name": "Test D 28",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "toxicology_29",
        "name": "Test E 29",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "toxicology_30",
        "name": "Test A 30",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      }
    ]
  },
  {
    "id": "parasitology",
    "name": "Parasitology",
    "tests": [
      {
        "id": "parasitology_1",
        "name": "Test B 1",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "parasitology_2",
        "name": "Test C 2",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "parasitology_3",
        "name": "Test D 3",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "parasitology_4",
        "name": "Test E 4",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "parasitology_5",
        "name": "Test A 5",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "parasitology_6",
        "name": "Test B 6",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "parasitology_7",
        "name": "Test C 7",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "parasitology_8",
        "name": "Test D 8",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "parasitology_9",
        "name": "Test E 9",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "parasitology_10",
        "name": "Test A 10",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "parasitology_11",
        "name": "Test B 11",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "parasitology_12",
        "name": "Test C 12",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "parasitology_13",
        "name": "Test D 13",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "parasitology_14",
        "name": "Test E 14",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "parasitology_15",
        "name": "Test A 15",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "parasitology_16",
        "name": "Test B 16",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "parasitology_17",
        "name": "Test C 17",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "parasitology_18",
        "name": "Test D 18",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "parasitology_19",
        "name": "Test E 19",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "parasitology_20",
        "name": "Test A 20",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "parasitology_21",
        "name": "Test B 21",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "parasitology_22",
        "name": "Test C 22",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "parasitology_23",
        "name": "Test D 23",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "parasitology_24",
        "name": "Test E 24",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "parasitology_25",
        "name": "Test A 25",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "parasitology_26",
        "name": "Test B 26",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "parasitology_27",
        "name": "Test C 27",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "parasitology_28",
        "name": "Test D 28",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "parasitology_29",
        "name": "Test E 29",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "parasitology_30",
        "name": "Test A 30",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      }
    ]
  },
  {
    "id": "molecular_biology",
    "name": "Molecular Biology",
    "tests": [
      {
        "id": "molecular_biology_1",
        "name": "Test B 1",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "molecular_biology_2",
        "name": "Test C 2",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "molecular_biology_3",
        "name": "Test D 3",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "molecular_biology_4",
        "name": "Test E 4",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "molecular_biology_5",
        "name": "Test A 5",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "molecular_biology_6",
        "name": "Test B 6",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "molecular_biology_7",
        "name": "Test C 7",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "molecular_biology_8",
        "name": "Test D 8",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "molecular_biology_9",
        "name": "Test E 9",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "molecular_biology_10",
        "name": "Test A 10",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "molecular_biology_11",
        "name": "Test B 11",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "molecular_biology_12",
        "name": "Test C 12",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "molecular_biology_13",
        "name": "Test D 13",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "molecular_biology_14",
        "name": "Test E 14",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "molecular_biology_15",
        "name": "Test A 15",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "molecular_biology_16",
        "name": "Test B 16",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "molecular_biology_17",
        "name": "Test C 17",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "molecular_biology_18",
        "name": "Test D 18",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "molecular_biology_19",
        "name": "Test E 19",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "molecular_biology_20",
        "name": "Test A 20",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "molecular_biology_21",
        "name": "Test B 21",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "molecular_biology_22",
        "name": "Test C 22",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "molecular_biology_23",
        "name": "Test D 23",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "molecular_biology_24",
        "name": "Test E 24",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "molecular_biology_25",
        "name": "Test A 25",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "molecular_biology_26",
        "name": "Test B 26",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "molecular_biology_27",
        "name": "Test C 27",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "molecular_biology_28",
        "name": "Test D 28",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "molecular_biology_29",
        "name": "Test E 29",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "molecular_biology_30",
        "name": "Test A 30",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      }
    ]
  },
  {
    "id": "genetics",
    "name": "Genetics",
    "tests": [
      {
        "id": "genetics_1",
        "name": "Test B 1",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "genetics_2",
        "name": "Test C 2",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "genetics_3",
        "name": "Test D 3",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "genetics_4",
        "name": "Test E 4",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "genetics_5",
        "name": "Test A 5",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "genetics_6",
        "name": "Test B 6",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "genetics_7",
        "name": "Test C 7",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "genetics_8",
        "name": "Test D 8",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "genetics_9",
        "name": "Test E 9",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "genetics_10",
        "name": "Test A 10",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "genetics_11",
        "name": "Test B 11",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "genetics_12",
        "name": "Test C 12",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "genetics_13",
        "name": "Test D 13",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "genetics_14",
        "name": "Test E 14",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "genetics_15",
        "name": "Test A 15",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "genetics_16",
        "name": "Test B 16",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "genetics_17",
        "name": "Test C 17",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "genetics_18",
        "name": "Test D 18",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "genetics_19",
        "name": "Test E 19",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "genetics_20",
        "name": "Test A 20",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "genetics_21",
        "name": "Test B 21",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "genetics_22",
        "name": "Test C 22",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "genetics_23",
        "name": "Test D 23",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "genetics_24",
        "name": "Test E 24",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "genetics_25",
        "name": "Test A 25",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "genetics_26",
        "name": "Test B 26",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "genetics_27",
        "name": "Test C 27",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "genetics_28",
        "name": "Test D 28",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "genetics_29",
        "name": "Test E 29",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "genetics_30",
        "name": "Test A 30",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      }
    ]
  },
  {
    "id": "urinalysis",
    "name": "Urinalysis",
    "tests": [
      {
        "id": "urinalysis_1",
        "name": "Test B 1",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "urinalysis_2",
        "name": "Test C 2",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "urinalysis_3",
        "name": "Test D 3",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "urinalysis_4",
        "name": "Test E 4",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "urinalysis_5",
        "name": "Test A 5",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "urinalysis_6",
        "name": "Test B 6",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "urinalysis_7",
        "name": "Test C 7",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "urinalysis_8",
        "name": "Test D 8",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "urinalysis_9",
        "name": "Test E 9",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "urinalysis_10",
        "name": "Test A 10",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "urinalysis_11",
        "name": "Test B 11",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "urinalysis_12",
        "name": "Test C 12",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "urinalysis_13",
        "name": "Test D 13",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "urinalysis_14",
        "name": "Test E 14",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "urinalysis_15",
        "name": "Test A 15",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "urinalysis_16",
        "name": "Test B 16",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "urinalysis_17",
        "name": "Test C 17",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "urinalysis_18",
        "name": "Test D 18",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "urinalysis_19",
        "name": "Test E 19",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "urinalysis_20",
        "name": "Test A 20",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "urinalysis_21",
        "name": "Test B 21",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "urinalysis_22",
        "name": "Test C 22",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "urinalysis_23",
        "name": "Test D 23",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "urinalysis_24",
        "name": "Test E 24",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "urinalysis_25",
        "name": "Test A 25",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "urinalysis_26",
        "name": "Test B 26",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "urinalysis_27",
        "name": "Test C 27",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "urinalysis_28",
        "name": "Test D 28",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "urinalysis_29",
        "name": "Test E 29",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "urinalysis_30",
        "name": "Test A 30",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      }
    ]
  },
  {
    "id": "stool_analysis",
    "name": "Stool Analysis",
    "tests": [
      {
        "id": "stool_analysis_1",
        "name": "Test B 1",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "stool_analysis_2",
        "name": "Test C 2",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "stool_analysis_3",
        "name": "Test D 3",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "stool_analysis_4",
        "name": "Test E 4",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "stool_analysis_5",
        "name": "Test A 5",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "stool_analysis_6",
        "name": "Test B 6",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "stool_analysis_7",
        "name": "Test C 7",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "stool_analysis_8",
        "name": "Test D 8",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "stool_analysis_9",
        "name": "Test E 9",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "stool_analysis_10",
        "name": "Test A 10",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "stool_analysis_11",
        "name": "Test B 11",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "stool_analysis_12",
        "name": "Test C 12",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "stool_analysis_13",
        "name": "Test D 13",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "stool_analysis_14",
        "name": "Test E 14",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "stool_analysis_15",
        "name": "Test A 15",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "stool_analysis_16",
        "name": "Test B 16",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "stool_analysis_17",
        "name": "Test C 17",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "stool_analysis_18",
        "name": "Test D 18",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "stool_analysis_19",
        "name": "Test E 19",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "stool_analysis_20",
        "name": "Test A 20",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "stool_analysis_21",
        "name": "Test B 21",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "stool_analysis_22",
        "name": "Test C 22",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "stool_analysis_23",
        "name": "Test D 23",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "stool_analysis_24",
        "name": "Test E 24",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "stool_analysis_25",
        "name": "Test A 25",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "stool_analysis_26",
        "name": "Test B 26",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "stool_analysis_27",
        "name": "Test C 27",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "stool_analysis_28",
        "name": "Test D 28",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "stool_analysis_29",
        "name": "Test E 29",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "stool_analysis_30",
        "name": "Test A 30",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      }
    ]
  },
  {
    "id": "cardiac_markers",
    "name": "Cardiac Markers",
    "tests": [
      {
        "id": "cardiac_markers_1",
        "name": "Test B 1",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "cardiac_markers_2",
        "name": "Test C 2",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "cardiac_markers_3",
        "name": "Test D 3",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "cardiac_markers_4",
        "name": "Test E 4",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "cardiac_markers_5",
        "name": "Test A 5",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "cardiac_markers_6",
        "name": "Test B 6",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "cardiac_markers_7",
        "name": "Test C 7",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "cardiac_markers_8",
        "name": "Test D 8",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "cardiac_markers_9",
        "name": "Test E 9",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "cardiac_markers_10",
        "name": "Test A 10",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "cardiac_markers_11",
        "name": "Test B 11",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "cardiac_markers_12",
        "name": "Test C 12",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "cardiac_markers_13",
        "name": "Test D 13",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "cardiac_markers_14",
        "name": "Test E 14",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "cardiac_markers_15",
        "name": "Test A 15",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "cardiac_markers_16",
        "name": "Test B 16",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "cardiac_markers_17",
        "name": "Test C 17",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "cardiac_markers_18",
        "name": "Test D 18",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "cardiac_markers_19",
        "name": "Test E 19",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "cardiac_markers_20",
        "name": "Test A 20",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "cardiac_markers_21",
        "name": "Test B 21",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "cardiac_markers_22",
        "name": "Test C 22",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "cardiac_markers_23",
        "name": "Test D 23",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "cardiac_markers_24",
        "name": "Test E 24",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "cardiac_markers_25",
        "name": "Test A 25",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "cardiac_markers_26",
        "name": "Test B 26",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "cardiac_markers_27",
        "name": "Test C 27",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "cardiac_markers_28",
        "name": "Test D 28",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "cardiac_markers_29",
        "name": "Test E 29",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "cardiac_markers_30",
        "name": "Test A 30",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      }
    ]
  },
  {
    "id": "renal_function",
    "name": "Renal Function",
    "tests": [
      {
        "id": "renal_function_1",
        "name": "Test B 1",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "renal_function_2",
        "name": "Test C 2",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "renal_function_3",
        "name": "Test D 3",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "renal_function_4",
        "name": "Test E 4",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "renal_function_5",
        "name": "Test A 5",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "renal_function_6",
        "name": "Test B 6",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "renal_function_7",
        "name": "Test C 7",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "renal_function_8",
        "name": "Test D 8",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "renal_function_9",
        "name": "Test E 9",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "renal_function_10",
        "name": "Test A 10",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "renal_function_11",
        "name": "Test B 11",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "renal_function_12",
        "name": "Test C 12",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "renal_function_13",
        "name": "Test D 13",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "renal_function_14",
        "name": "Test E 14",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "renal_function_15",
        "name": "Test A 15",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "renal_function_16",
        "name": "Test B 16",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "renal_function_17",
        "name": "Test C 17",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "renal_function_18",
        "name": "Test D 18",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "renal_function_19",
        "name": "Test E 19",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "renal_function_20",
        "name": "Test A 20",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "renal_function_21",
        "name": "Test B 21",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "renal_function_22",
        "name": "Test C 22",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "renal_function_23",
        "name": "Test D 23",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "renal_function_24",
        "name": "Test E 24",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "renal_function_25",
        "name": "Test A 25",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "renal_function_26",
        "name": "Test B 26",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "renal_function_27",
        "name": "Test C 27",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "renal_function_28",
        "name": "Test D 28",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "renal_function_29",
        "name": "Test E 29",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "renal_function_30",
        "name": "Test A 30",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      }
    ]
  },
  {
    "id": "liver_function",
    "name": "Liver Function",
    "tests": [
      {
        "id": "liver_function_1",
        "name": "Test B 1",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "liver_function_2",
        "name": "Test C 2",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "liver_function_3",
        "name": "Test D 3",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "liver_function_4",
        "name": "Test E 4",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "liver_function_5",
        "name": "Test A 5",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "liver_function_6",
        "name": "Test B 6",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "liver_function_7",
        "name": "Test C 7",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "liver_function_8",
        "name": "Test D 8",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "liver_function_9",
        "name": "Test E 9",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "liver_function_10",
        "name": "Test A 10",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "liver_function_11",
        "name": "Test B 11",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "liver_function_12",
        "name": "Test C 12",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "liver_function_13",
        "name": "Test D 13",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "liver_function_14",
        "name": "Test E 14",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "liver_function_15",
        "name": "Test A 15",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "liver_function_16",
        "name": "Test B 16",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "liver_function_17",
        "name": "Test C 17",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "liver_function_18",
        "name": "Test D 18",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "liver_function_19",
        "name": "Test E 19",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "liver_function_20",
        "name": "Test A 20",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "liver_function_21",
        "name": "Test B 21",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "liver_function_22",
        "name": "Test C 22",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "liver_function_23",
        "name": "Test D 23",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "liver_function_24",
        "name": "Test E 24",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "liver_function_25",
        "name": "Test A 25",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      },
      {
        "id": "liver_function_26",
        "name": "Test B 26",
        "parameter": "Param B",
        "unit": "U/L",
        "normalMin": 0,
        "normalMax": 40,
        "description": "Description of test B."
      },
      {
        "id": "liver_function_27",
        "name": "Test C 27",
        "parameter": "Param C",
        "unit": "mmol/L",
        "normalMin": 3.5,
        "normalMax": 5.5,
        "description": "Description of test C."
      },
      {
        "id": "liver_function_28",
        "name": "Test D 28",
        "parameter": "Param D",
        "unit": "g/dL",
        "normalMin": 12,
        "normalMax": 16,
        "description": "Description of test D."
      },
      {
        "id": "liver_function_29",
        "name": "Test E 29",
        "parameter": "Param E",
        "unit": "ng/mL",
        "normalMin": 0.5,
        "normalMax": 5.0,
        "description": "Description of test E."
      },
      {
        "id": "liver_function_30",
        "name": "Test A 30",
        "parameter": "Param A",
        "unit": "mg/dL",
        "normalMin": 10,
        "normalMax": 20,
        "description": "Description of test A."
      }
    ]
  }
];

localStorage.setItem("lab_departments", JSON.stringify(departments));
