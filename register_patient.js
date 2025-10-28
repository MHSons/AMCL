import { showMessage, sanitizeInput } from './utils.js';

const mockApi = {
  async getLastPatient() {
    return JSON.parse(localStorage.getItem("lastRegisteredPatient") || "null");
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const patient = await mockApi.getLastPatient();
    if (!patient) {
      showMessage("No patient data found!", true);
      return;
    }

    document.getElementById("labName").textContent = sanitizeInput(patient.labName);
    document.getElementById("mrn").textContent = sanitizeInput(patient.mrn);
    document.getElementById("name").textContent = sanitizeInput(patient.name);
    document.getElementById("sampleNo").textContent = sanitizeInput(patient.sampleNo);
    document.getElementById("age").textContent = sanitizeInput(patient.age);
    document.getElementById("gender").textContent = sanitizeInput(patient.gender);
    document.getElementById("departments").textContent = sanitizeInput(patient.departments.join(", "));
    document.getElementById("tests").textContent = sanitizeInput(patient.tests.map(t => t.name).join(", "));
  } catch (e) {
    showMessage("Error loading patient data!", true);
  }
});
