// ===========================
// AlphaMed Clinical Laboratory
// Common Script File
// ===========================

// Check login status on page load
function checkLogin() {
  let currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
  if (!currentUser) {
    window.location.href = "login.html";
  }
}

// Handle login form
function loginUser(event) {
  event.preventDefault();

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users") || "[]");
  let user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    alert("Welcome " + user.username + "!");

    // Redirect based on role
    if (user.role === "Receptionist") {
      window.location.href = "reception.html";
    } else if (user.role === "Technician") {
      window.location.href = "technician.html";
    } else {
      window.location.href = "admin.html";
    }
  } else {
    alert("Invalid username or password!");
  }
}

// Logout function
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}

// Protect restricted pages
function protectPage(roles = []) {
  let currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
  if (!currentUser) {
    window.location.href = "login.html";
    return;
  }
  if (roles.length && !roles.includes(currentUser.role)) {
    alert("Access denied!");
    window.location.href = "index.html";
  }
}
