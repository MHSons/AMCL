document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = this.querySelector('input[type="text"]').value;
  const password = this.querySelector('input[type="password"]').value;

  // Demo credentials
  if (username === 'admin' && password === 'lab123') {
    alert('Login Successful! Redirecting to Dashboard...');
    window.location.href = 'dashboard.html';
  } else if (username === 'doctor' && password === 'doc123') {
    alert('Welcome Doctor!');
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid credentials. Try: admin / lab123');
  }
});
