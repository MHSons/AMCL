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
  const patientsTableBody = document.querySelector("#patientsTable tbody");

  // Check login and role
  const currentUser = await mockApi.getCurrentUser();
  if (!currentUser || currentUser.role !== "receptionist") {
    showMessage("Access denied! Receptionists only.", true);
    setTimeout(() => window.location.href = "login.html", 1000);
    return;
  }

  // Load patients
  const loadPatients = async () => {
    try {
      const pendingTests = await mockApi.getPendingTests();
      patientsTableBody.innerHTML = "";
      pendingTests.forEach(patient => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${sanitizeInput(patient.mrn)}</td>
          <td>${sanitizeInput(patient.name)}</td>
          <td>${sanitizeInput(patient.sampleNo)}</td>
          <td>${sanitizeInput(patient.departments.join(", "))}</td>
          <td>${sanitizeInput(patient.tests.map(t => t.name).join(", "))}</td>
        `;
        patientsTableBody.appendChild(tr);
      });
    } catch (e) {
      showMessage("Error loading patients!", true);
    }
  };

  loadPatients();
});
