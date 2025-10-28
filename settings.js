import { showMessage, sanitizeInput } from './utils.js';

const mockApi = {
  async getSettings() {
    return JSON.parse(localStorage.getItem("labSettings") || "{}");
  },
  async saveSettings(settings) {
    localStorage.setItem("labSettings", JSON.stringify(settings));
  },
  async getUsers() {
    return JSON.parse(localStorage.getItem("users") || "[]");
  },
  async saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
  },
  async getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser") || "null");
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  // Check login
  const currentUser = await mockApi.getCurrentUser();
  if (!currentUser) {
    showMessage("Please log in!", true);
    setTimeout(() => window.location.href = "login.html", 1000);
    return;
  }

  // Load settings
  try {
    const settings = await mockApi.getSettings();
    document.getElementById("labName").value = settings.labName || "";
    document.getElementById("labAddress").value = settings.labAddress || "";
    document.getElementById("labPhone").value = settings.labPhone || "";
  } catch (e) {
    showMessage("Error loading settings!", true);
  }

  // Settings form submission
  document.getElementById("settingsForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const button = e.target.querySelector("button");
    button.disabled = true;

    const settings = {
      labName: sanitizeInput(document.getElementById("labName").value.trim()),
      labAddress: sanitizeInput(document.getElementById("labAddress").value.trim()),
      labPhone: document.getElementById("labPhone").value.trim()
    };

    if (!/^\+?\d{10,15}$/.test(settings.labPhone)) {
      showMessage("Invalid phone number!", true);
      button.disabled = false;
      return;
    }

    try {
      await mockApi.saveSettings(settings);
      showMessage("Settings saved successfully!", false);
      e.target.reset();
    } catch (e) {
      showMessage("Error saving settings!", true);
    } finally {
      button.disabled = false;
    }
  });

  // Password form submission
  document.getElementById("passwordForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const button = e.target.querySelector("button");
    button.disabled = true;

    const oldPass = document.getElementById("oldPass").value;
    const newPass = document.getElementById("newPass").value;
    const confirmPass = document.getElementById("confirmPass").value;

    if (newPass !== confirmPass) {
      showMessage("New passwords do not match!", true);
      button.disabled = false;
      return;
    }
    if (newPass.length < 8) {
      showMessage("New password must be at least 8 characters!", true);
      button.disabled = false;
      return;
    }

    try {
      const currentUser = await mockApi.getCurrentUser();
      if (!currentUser) {
        showMessage("Please log in!", true);
        button.disabled = false;
        return;
      }

      const users = await mockApi.getUsers();
      const userIndex = users.findIndex(u => u.username === currentUser.username);

      if (userIndex === -1 || users[userIndex].password !== oldPass) {
        showMessage("Old password incorrect!", true);
        button.disabled = false;
        return;
      }

      users[userIndex].password = newPass;
      await mockApi.saveUsers(users);
      showMessage("Password updated successfully!", false);
      e.target.reset();
    } catch (e) {
      showMessage("Error updating password!", true);
    } finally {
      button.disabled = false;
    }
  });
});
