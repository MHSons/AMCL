import { showMessage, sanitizeInput } from './utils.js';

const mockApi = {
  async getPendingTests() {
    return JSON.parse(localStorage.getItem("pendingTests") || "[]");
  },
  async savePendingTests(tests) {
    localStorage.setItem("pendingTests", JSON.stringify(tests));
  },
  async getCompletedTests() {
    return JSON.parse(localStorage.getItem("completedTests") || "[]");
  },
  async saveCompletedTests(tests) {
    localStorage.setItem("completedTests", JSON.stringify(tests));
  },
  async getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser") || "null");
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  const patientSelect = document.getElementById("patientSelect");
  const resultForm = document.getElementById("resultForm");
  const testsList = document.getElementById("tests-list");

  // Check login and role
  const currentUser = await mockApi.getCurrentUser();
  if (!currentUser || currentUser.role !== "technician") {
    showMessage("Access denied! Technicians only.", true);
    setTimeout(() => window.location.href = "login.html", 1000);
    return;
  }

  // Load patients
  const loadPatients = async () => {
    try {
      const pendingTests = await mockApi.getPendingTests();
      patientSelect.innerHTML = '<option value="">-- Select Patient --</option>';
      pendingTests.forEach(patient => {
        const option = document.createElement("option");
        option.value = patient.id;
        option.textContent = `${patient.name} (MRN: ${patient.mrn})`;
        patientSelect.appendChild(option);
      });
    } catch (e) {
      showMessage("Error loading patients!", true);
    }
  };

  loadPatients();

  // On patient selection
  patientSelect.addEventListener("change", async () => {
    const patientId = patientSelect.value;
    testsList.innerHTML = "";
    if (!patientId) return;

    try {
      const pendingTests = await mockApi.getPendingTests();
      const patient = pendingTests.find(p => p.id === Number(patientId));
      if (patient) {
        patient.tests.forEach(test => {
          const div = document.createElement("div");
          div.className = "test-item";
          div.innerHTML = `
            <span>${sanitizeInput(test.name)}</span>
            <input type="number" data-test-id="${test.id}" placeholder="Result (${test.unit})" required aria-label="${sanitizeInput(test.name)} result">
          `;
          testsList.appendChild(div);
        });
      }
    } catch (e) {
      showMessage("Error loading tests!", true);
    }
  });

  // Form submission
  resultForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const button = e.target.querySelector("button");
    button.disabled = true;

    const patientId = patientSelect.value;
    if (!patientId) {
      showMessage("Please select a patient!", true);
      button.disabled = false;
      return;
    }

    try {
      const pendingTests = await mockApi.getPendingTests();
      const patient = pendingTests.find(p => p.id === Number(patientId));
      if (!patient) {
        showMessage("Patient not found!", true);
        button.disabled = false;
        return;
      }

      const results = Array.from(testsList.querySelectorAll("input")).map(input => ({
        testId: input.dataset.testId,
        result: input.value,
        unit: patient.tests.find(t => t.id === input.dataset.testId).unit
      }));

      const completedTest = {
        ...patient,
        results,
        completedAt: new Date().toISOString()
      };

      const updatedPendingTests = pendingTests.filter(p => p.id !== Number(patientId));
      const completedTests = await mockApi.getCompletedTests();
      completedTests.push(completedTest);

      await mockApi.savePendingTests(updatedPendingTests);
      await mockApi.saveCompletedTests(completedTests);
      showMessage("Results saved successfully!", false);
      resultForm.reset();
      patientSelect.value = "";
      testsList.innerHTML = "";
      loadPatients();
    } catch (e) {
      showMessage("Error saving results!", true);
    } finally {
      button.disabled = false;
    }
  });
});
