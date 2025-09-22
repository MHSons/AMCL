// site-wide helper functions (client-side)
console.log('Alpha Lab script loaded');

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('lab_user') || 'null');
}

function requireLogin() {
  const user = getCurrentUser();
  if (!user) {
    alert('You must be logged in to access this page.');
    window.location = 'login.html';
  }
  return user;
}
