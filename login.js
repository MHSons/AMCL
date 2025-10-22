import { showMessage, sanitizeInput } from './utils.js';

const mockApi = {
  async getUsers() {
    return JSON.parse(localStorage.getItem("users") || "[]");
  },
  async saveCurrentUser(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const button = e.target.querySelector("button");
    button.disabled = true;

    const username = sanitizeInput(document.getElementById("username").value.trim());
    const password = document.getElementById("password").value;

    try {
      const users = await mockApi.getUsers();
      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
        await mockApi.saveCurrentUser(user);
        showMessage("Login successful!", false);
        setTimeout(() => window.location.href = user.role === "admin" ? "admin.html" : user.role === "technician" ? "technician.html" : "reception.html", 1000);
      } else {
        showMessage("Invalid username or password!", true);
      }
    } catch (e) {
      showMessage("Error during login!", true);
    } finally {
      button.disabled = false;
    }
  });
});
