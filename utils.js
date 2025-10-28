export function showMessage(text, isError = true) {
  const messageDiv = document.getElementById("message");
  if (messageDiv) {
    messageDiv.style.color = isError ? "var(--error-color)" : "var(--success-color)";
    messageDiv.textContent = text;
    messageDiv.setAttribute("aria-live", "polite");
    setTimeout(() => messageDiv.textContent = "", 3000);
  }
}

export function sanitizeInput(input) {
  return input.replace(/[<>&"']/g, match => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&#x27;'
  }[match]));
}
