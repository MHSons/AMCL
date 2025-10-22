import { showMessage, sanitizeInput } from './utils.js';

const mockApi = {
  async getPendingTests() {
    return JSON.parse(localStorage.getItem("pendingTests") || "[]");
  },
  async getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser") || "null");
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  const testsTableBody = document.querySelector("#testsTable tbody");

  // Check login and role
  const currentUser = await mockApi.getCurrentUser();
  if (!currentUser || currentUser.role !== "technician") {
    showMessage("Access denied! Technicians only.", true);
    setTimeout(() => window.location.href = "login.html", 1000);
    return;
  }

  // Load pending tests
  const loadTests = async () => {
    try {
      const pendingTests = await mockApi.getPendingTests();
      testsTableBody.innerHTML = "";
      pendingTests.forEach(patient => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${sanitizeInput(patient.mrn)}</td>
          <td>${sanitizeInput(patient.name)}</td>
          <td>${sanitizeInput(patient.sampleNo)}</td>
          <td>${sanitizeInput(patient.tests.map(t => t.name).join(", "))}</td>
          <td><button class="submit-button" data-patient-id="${patient.id}" aria-label="Add Result for ${sanitizeInput(patient.name)}">Add Result</button></td>
        `;
        testsTableBody.appendChild(tr);
      });

      // Add result button listeners
      testsTableBody.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
          window.location.href = `add_test_result.html?patientId=${button.dataset.patientId}`;
        });
      });
    } catch (e) {
      showMessage("Error loading tests!", true);
    }
  };

  loadTests();
});
