import { showMessage, sanitizeInput } from './utils.js';
import { departmentsArray } from './tests.js';

const mockApi = {
  async getPendingTests() {
    return JSON.parse(localStorage.getItem("pendingTests") || "[]");
  },
  async savePendingTest(patient) {
    const tests = await this.getPendingTests();
    tests.push(patient);
    localStorage.setItem("pendingTests", JSON.stringify(tests));
  },
  async saveLastPatient(patient) {
    localStorage.setItem("lastRegisteredPatient", JSON.stringify(patient));
  },
  async getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser") || "null");
  },
  async getSettings() {
    return JSON.parse(localStorage.getItem("labSettings") || "{}");
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  const deptDropdown = document.getElementById("department");
  const testDropdown = document.getElementById("test");
  const registerForm = document.getElementById("registerForm");

  // Check login
  const currentUser = await mockApi.getCurrentUser();
  if (!currentUser) {
    showMessage("Please log in!", true);
    setTimeout(() => window.location.href = "login.html", 1000);
    return;
  }

  // Load departments
  try {
    if (!departmentsArray || !Array.isArray(departmentsArray)) {
      throw new Error("Department data not available");
    }
    deptDropdown.innerHTML = '<option value="" disabled>-- Select Department(s) --</option>'; // Added disabled default option
    departmentsArray.forEach(dept => {
      const option = document.createElement("option");
      option.value = dept.id;
      option.textContent = dept.name;
      deptDropdown.appendChild(option);
    });
  } catch (e) {
    showMessage("Error loading departments: " + e.message, true);
    deptDropdown.disabled = true;
    return;
  }

  // On department change
  deptDropdown.addEventListener("change", () => {
    testDropdown.innerHTML = '<option value="" disabled>-- Select Test(s) --</option>'; // Reset tests
    const selectedDepts = Array.from(deptDropdown.selectedOptions).map(opt => opt.value);

    if (selectedDepts.length === 0) {
      testDropdown.disabled = true;
      return;
    }

    testDropdown.disabled = false;
    const tests = new Set(); // Avoid duplicate tests
    selectedDepts.forEach(deptId => {
      const selectedDept = departmentsArray.find(d => d.id === deptId);
      if (selectedDept && selectedDept.tests) {
        selectedDept.tests.forEach(test => {
          tests.add(JSON.stringify({ id: test.id, name: test.name }));
        });
      }
    });

    Array.from(tests).forEach(testStr => {
      const test = JSON.parse(testStr);
      const option = document.createElement("option");
      option.value = test.id;
      option.textContent = test.name;
      testDropdown.appendChild(option);
    });
  });

  // Form submission
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const button = e.target.querySelector("button");
    button.disabled = true;

    const selectedDepartments = Array.from(deptDropdown.selectedOptions).map(opt => {
      const dept = departmentsArray.find(d => d.id === opt.value);
      return dept ? dept.name : "";
    }).filter(Boolean);

    const selectedTests = Array.from(testDropdown.selectedOptions).map(opt => {
      for (const dept of departmentsArray) {
        const test = dept.tests.find(t => t.id === opt.value);
        if (test) return { id: test.id, name: test.name, parameter: test.parameter, unit: test.unit, normalMin: test.normalMin, normalMax: test.normalMax };
      }
      return null;
    }).filter(Boolean);

    const patientData = {
      id: Date.now(),
      mrn: `MRN-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      sampleNo: sanitizeInput(document.getElementById("sampleNo").value.trim()),
      name: sanitizeInput(document.getElementById("patientName").value.trim()),
      age: document.getElementById("age").value.trim(),
      gender: document.getElementById("gender").value,
      departments: selectedDepartments,
      tests: selectedTests,
      labName: (await mockApi.getSettings()).labName || "AlphaMed Clinical Laboratory"
    };

    // Validation
    if (!patientData.sampleNo || !patientData.name) {
      showMessage("Please fill in all required fields!", true);
      button.disabled = false;
      return;
    }
    if (!/^\d+$/.test(patientData.age) || patientData.age <= 0) {
      showMessage("Please enter a valid age!", true);
      button.disabled = false;
      return;
    }
    if (!selectedDepartments.length || !selectedTests.length) {
      showMessage("Please select at least one department and test!", true);
      button.disabled = false;
      return;
    }

    try {
      await mockApi.savePendingTest(patientData);
      await mockApi.saveLastPatient(patientData);
      showMessage("Patient registered successfully!", false);
      registerForm.reset();
      deptDropdown.value = "";
      testDropdown.innerHTML = '<option value="" disabled>-- Select Test(s) --</option>';
      testDropdown.disabled = true;
      setTimeout(() => window.location.href = "registration-slip.html", 1000);
    } catch (e) {
      showMessage("Error saving patient data!", true);
    } finally {
      button.disabled = false;
    }
  });
});
