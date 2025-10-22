import { showMessage, sanitizeInput } from './utils.js';

const mockApi = {
  async getCompletedTests() {
    return JSON.parse(localStorage.getItem("completedTests") || "[]");
  },
  async getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser") || "null");
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  const reportsTableBody = document.querySelector("#reportsTable tbody");

  // Check login
  const currentUser = await mockApi.getCurrentUser();
  if (!currentUser) {
    showMessage("Please log in!", true);
    setTimeout(() => window.location.href = "login.html", 1000);
    return;
  }

  // Load reports
  const loadReports = async () => {
    try {
      const completedTests = await mockApi.getCompletedTests();
      reportsTableBody.innerHTML = "";
      completedTests.forEach(report => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${sanitizeInput(report.mrn)}</td>
          <td>${sanitizeInput(report.name)}</td>
          <td>${sanitizeInput(report.sampleNo)}</td>
          <td>${sanitizeInput(report.tests.map(t => t.name).join(", "))}</td>
          <td>${new Date(report.completedAt).toLocaleString()}</td>
          <td><button class="submit-button" data-patient-id="${report.id}" aria-label="View Report for ${sanitizeInput(report.name)}">View Report</button></td>
        `;
        reportsTableBody.appendChild(tr);
      });

      // Add view report listeners
      reportsTableBody.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
          window.location.href = `report.html?patientId=${button.dataset.patientId}`;
        });
      });
    } catch (e) {
      showMessage("Error loading reports!", true);
    }
  };

  loadReports();
});
