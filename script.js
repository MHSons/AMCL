// Dummy users (baad me DB add kiya ja sakta hai)
const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "reception", password: "reception123", role: "reception" },
  { username: "tech", password: "tech123", role: "technician" }
];

// Login form handle
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("role").value;

  const user = users.find(
    (u) => u.username === username && u.password === password && u.role === role
  );

  if (user) {
    alert("Login successful! Welcome " + role.toUpperCase());

    // Save session (localStorage me temporarily)
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    // Redirect based on role
    if (role === "admin") {
      window.location.href = "admin.html";
    } else if (role === "reception") {
      window.location.href = "reception.html";
    } else if (role === "technician") {
      window.location.href = "technician.html";
    }
  } else {
    alert("Invalid username, password, or role!");
  }
});
