// ===============================
// AlphaMed Clinical Laboratory — Global Script
// ===============================

// Load Lab Settings (applies everywhere)
function applyLabSettings() {
  const s = JSON.parse(localStorage.getItem('labSettings') || '{}');

  // Update document title
  if (s.labName && document.title.indexOf(s.labName) === -1) {
    document.title = `${document.title} | ${s.labName}`;
  }

  // Add watermark automatically (if logo found)
  if (s.logo) {
    const wm = document.createElement('div');
    wm.className = 'auto-watermark';
    wm.style.position = 'fixed';
    wm.style.top = '0';
    wm.style.left = '0';
    wm.style.width = '100%';
    wm.style.height = '100%';
    wm.style.background = `url('${s.logo}') center center no-repeat`;
    wm.style.backgroundSize = '400px';
    wm.style.opacity = '0.05';
    wm.style.pointerEvents = 'none';
    wm.style.zIndex = '-1';
    document.body.appendChild(wm);
  }

  // WhatsApp button (bottom-right floating)
  if (s.labWhatsApp) {
    const wa = document.createElement('a');
    const num = s.labWhatsApp.replace(/\D/g, '');
    wa.href = `https://wa.me/92${num.slice(-10)}?text=Hello%20${encodeURIComponent(s.labName || '')}`;
    wa.target = '_blank';
    wa.innerHTML = `💬`;
    wa.title = 'Contact on WhatsApp';
    wa.style.position = 'fixed';
    wa.style.bottom = '20px';
    wa.style.right = '20px';
    wa.style.background = '#25d366';
    wa.style.color = 'white';
    wa.style.fontSize = '22px';
    wa.style.borderRadius = '50%';
    wa.style.padding = '10px 14px';
    wa.style.textDecoration = 'none';
    wa.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
    wa.style.zIndex = '999';
    document.body.appendChild(wa);
  }
}

// ===============================
// User Session Controls
// ===============================

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('loggedUser') || 'null');
}

function requireLogin(roles = []) {
  const user = getCurrentUser();
  if (!user) {
    alert('Please login first!');
    window.location.href = 'index.html';
    return;
  }
  if (roles.length && !roles.includes(user.role)) {
    alert('You do not have access to this page.');
    window.location.href = 'dashboard.html';
  }
}

// Logout function
function logout() {
  if (confirm('Are you sure you want to log out?')) {
    localStorage.removeItem('loggedUser');
    window.location.href = 'index.html';
  }
}

// ===============================
// Utility Helpers
// ===============================

// Format date & time
function formatDate(dt) {
  return new Date(dt).toLocaleString();
}

// Generate new patient code
function generatePatientCode() {
  return 'P-' + Math.floor(Math.random() * 100000);
}

// Add watermark on print automatically
window.addEventListener('beforeprint', () => {
  const wm = document.querySelector('.auto-watermark');
  if (wm) wm.style.opacity = '0.1';
});
window.addEventListener('afterprint', () => {
  const wm = document.querySelector('.auto-watermark');
  if (wm) wm.style.opacity = '0.05';
});

// ===============================
// Initialize (on every page load)
// ===============================
document.addEventListener('DOMContentLoaded', applyLabSettings);
