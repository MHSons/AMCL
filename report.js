import { showMessage, sanitizeInput } from './utils.js';

const mockApi = {
  async getCompletedTests() {
    return JSON.parse(localStorage.getItem("completedTests") || "[]");
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const patientId = urlParams.get("patientId");

  try {
    const completedTests = await mockApi.getCompletedTests();
    const patient = completedTests.find(p => p.id === Number(patientId));
    if (!patient) {
      showMessage("Report not found!", true);
      return;
    }

    document.getElementById("labName").textContent = sanitizeInput(patient.labName);
    document.getElementById("mrn").textContent = sanitizeInput(patient.mrn);
    document.getElementById("name").textContent = sanitizeInput(patient.name);
    document.getElementById("sampleNo").textContent = sanitizeInput(patient.sampleNo);
    document.getElementById("age").textContent = sanitizeInput(patient.age);
    document.getElementById("gender").textContent = sanitizeInput(patient.gender);
    document.getElementById("completedAt").textContent = new Date(patient.completedAt).toLocaleString();

    const tbody = document.querySelector("#resultsTable tbody");
    patient.results.forEach(result => {
      const test = patient.tests.find(t => t.id === result.testId);
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${sanitizeInput(test.name)}</td>
        <td>${sanitizeInput(result.result)}</td>
        <td>${sanitizeInput(result.unit)}</td>
        <td>${sanitizeInput(`${test.normalMin} - ${test.normalMax}`)}</td>
      `;
      tbody.appendChild(tr);
    });
  } catch (e) {
    showMessage("Error loading report!", true);
  }
});
