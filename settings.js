function loadSettings() {
  try {
    let settings = JSON.parse(localStorage.getItem("labSettings") || "{}");
    if (settings.labName) document.getElementById("labName").value = settings.labName;
    if (settings.labAddress) document.getElementById("labAddress").value = settings.labAddress;
    if (settings.labPhone) document.getElementById("labPhone").value = settings.labPhone;
  } catch (e) {
    showMessage("Error loading settings!");
  }
}

function saveSettings(e) {
  e.preventDefault();
  let settings = {
    labName: document.getElementById("labName").value.trim(),
    labAddress: document.getElementById("labAddress").value.trim(),
    labPhone: document.getElementById("labPhone").value.trim()
  };
  if (!/^\+?\d{10,15}$/.test(settings.labPhone)) {
    showMessage("Invalid phone number!");
    return;
  }
  try {
    localStorage.setItem("labSettings", JSON.stringify(settings));
    showMessage("Settings saved!", false);
  } catch (e) {
    showMessage("Error saving settings!");
  }
}

function changePassword(e) {
  e.preventDefault();
  let oldPass = document.getElementById("oldPass").value;
  let newPass = document.getElementById("newPass").value;
  let confirmPass = document.getElementById("confirmPass").value;

  if (newPass !== confirmPass) {
    showMessage("New passwords do not match!");
    return;
  }
  if (newPass.length < 8) {
    showMessage("New password must be at least 8 characters!");
    return;
  }

  try {
    let currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
    if (!currentUser) {
      showMessage("Not logged in!");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users") || "[]");
    let userIndex = users.findIndex(u => u.username === currentUser.username);

    if (userIndex === -1 || users[userIndex].password !== oldPass) {
      showMessage("Old password incorrect!");
      return;
    }

    users[userIndex].password = newPass;
    localStorage.setItem("users", JSON.stringify(users));
    showMessage("Password updated!", false);
    document.querySelector("form[onsubmit='return changePassword(event)']").reset();
  } catch (e) {
    showMessage("Error updating password!");
  }
}

function showMessage(text, isError = true) {
  const messageDiv = document.getElementById("message");
  messageDiv.style.color = isError ? "red" : "green";
  messageDiv.textContent = text;
  setTimeout(() => messageDiv.textContent = "", 3000);
}
