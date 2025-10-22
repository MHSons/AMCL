import { showMessage, sanitizeInput } from './utils.js';

const mockApi = {
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
  const addUserForm = document.getElementById("addUserForm");
  const usersTableBody = document.querySelector("#usersTable tbody");

  // Check login and role
  const currentUser = await mockApi.getCurrentUser();
  if (!currentUser || currentUser.role !== "admin") {
    showMessage("Access denied! Admins only.", true);
    setTimeout(() => window.location.href = "login.html", 1000);
    return;
  }

  // Load users
  const loadUsers = async () => {
    try {
      const users = await mockApi.getUsers();
      usersTableBody.innerHTML = "";
      users.forEach(user => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${sanitizeInput(user.username)}</td>
          <td>${sanitizeInput(user.role)}</td>
          <td><button class="submit-button" data-username="${sanitizeInput(user.username)}">Delete</button></td>
        `;
        usersTableBody.appendChild(tr);
      });

      // Add delete listeners
      usersTableBody.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", async () => {
          const username = button.dataset.username;
          if (confirm(`Delete user ${username}?`)) {
            try {
              const users = await mockApi.getUsers();
              const updatedUsers = users.filter(u => u.username !== username);
              await mockApi.saveUsers(updatedUsers);
              showMessage("User deleted successfully!", false);
              loadUsers();
            } catch (e) {
              showMessage("Error deleting user!", true);
            }
          }
        });
      });
    } catch (e) {
      showMessage("Error loading users!", true);
    }
  };

  loadUsers();

  // Add user
  addUserForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const button = e.target.querySelector("button");
    button.disabled = true;

    const username = sanitizeInput(document.getElementById("username").value.trim());
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    try {
      const users = await mockApi.getUsers();
      if (users.find(u => u.username === username)) {
        showMessage("Username already exists!", true);
        button.disabled = false;
        return;
      }

      users.push({ username, password, role });
      await mockApi.saveUsers(users);
      showMessage("User added successfully!", false);
      e.target.reset();
      loadUsers();
    } catch (e) {
      showMessage("Error adding user!", true);
    } finally {
      button.disabled = false;
    }
  });
});
