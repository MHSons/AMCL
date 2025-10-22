import { showMessage } from './utils.js';

const mockApi = {
  async getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser") || "null");
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  // Check login and role
  const currentUser = await mockApi.getCurrentUser();
  if (!currentUser || currentUser.role !== "admin") {
    showMessage("Access denied! Admins only.", true);
    setTimeout(() => window.location.href = "login.html", 1000);
    return;
  }
});
