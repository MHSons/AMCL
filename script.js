// AUTO CREATE DEFAULT USERS ON FIRST LOAD
if (!localStorage.getItem('users')) {
  const defaultUsers = {
    'admin': { pass: 'admin', role: 'admin' },
    'reception': { pass: '123', role: 'reception' },
    'technician': { pass: '123', role: 'technician' },
    'doctor': { pass: '123', role: 'doctor' }
  };
  localStorage.setItem('users', JSON.stringify(defaultUsers));
  console.log('Default users created: admin/admin, reception/123, etc.');
}

// Load Data
let users = JSON.parse(localStorage.getItem('users')) || {};
let currentUser = null;
let patients = JSON.parse(localStorage.getItem('patients')) || [];
let tests = JSON.parse(localStorage.getItem('tests')) || [];
let inventory = JSON.parse(localStorage.getItem('inventory')) || [];
let qcLogs = JSON.parse(localStorage.getItem('qcLogs')) || [];
let bills = JSON.parse(localStorage.getItem('bills')) || [];

// Login
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const un = document.getElementById('username').value.trim();
    const pw = document.getElementById('password').value;
    if (users[un] && users[un].pass === pw) {
        currentUser = { name: un, role: users[un].role };
        document.getElementById('userRole').textContent = currentUser.name + ' (' + currentUser.role + ')';
        document.getElementById('app').style.display = 'block';
        document.getElementById('loginModal').classList.remove('show');
        document.body.classList.remove('modal-open');
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) backdrop.remove();
        showRoleSections();
        loadAllData();
    } else {
        alert('Invalid credentials! Try: admin / admin');
    }
});

function showRoleSections() {
    const role = currentUser.role;
    document.getElementById('receptionLi').style.display = ['reception', 'admin'].includes(role) ? 'block' : 'none';
    document.getElementById('technicianLi').style.display = ['technician', 'admin'].includes(role) ? 'block' : 'none';
    document.getElementById('doctorLi').style.display = ['doctor', 'admin'].includes(role) ? 'block' : 'none';
    document.getElementById('adminLi').style.display = role === 'admin' ? 'block' : 'none';
    showSection('dashboard');
}

function showSection(sec) {
    document.querySelectorAll('.section').forEach(s => s.classList.add('d-none'));
    const section = document.getElementById(sec);
    if (section) section.classList.remove('d-none');
}

// Patient Registration
document.getElementById('patientForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const patient = {
        id: 'P' + Date.now().toString().slice(-6),
        name: document.getElementById('pName').value.trim(),
        date: document.getElementById('pDate').value,
        contact: document.getElementById('pContact').value.trim(),
        category: document.getElementById('testCategory').value,
        notes: document.getElementById('pNotes').value.trim(),
        status: 'registered'
    };
    patients.push(patient);
    localStorage.setItem('patients', JSON.stringify(patients));
    loadPatients();
    e.target.reset();
    alert('Patient registered: ' + patient.id);
});

// Load Patients
function loadPatients() {
    const tbody = document.querySelector('#patientTable tbody');
    tbody.innerHTML = '';
    patients.forEach(p => {
        const tr = tbody.insertRow();
        tr.innerHTML = `
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>${p.date}</td>
            <td>${p.category}</td>
            <td><button class="btn btn-sm btn-info" onclick="viewReport('${p.id}')">View</button></td>
        `;
    });

    // Update dropdowns
    const selectPatient = document.getElementById('selectPatient');
    const billPatient = document.getElementById('billPatient');
    selectPatient.innerHTML = '<option>Select Patient</option>' + patients.map(p => `<option value="${p.id}">${p.name} (${p.id})</option>`).join('');
    billPatient.innerHTML = '<option>Select Patient</option>' + patients.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
    updateDashboard();
}

// Technician: Submit Test
document.getElementById('testForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const test = {
        patientId: document.getElementById('selectPatient').value,
        dept: document.getElementById('dept').value,
        type: document.getElementById('testType').value.trim(),
        result: document.getElementById('testResult').value.trim(),
        date: new Date().toISOString(),
        status: 'pending_approval'
    };
    tests.push(test);
    localStorage.setItem('tests', JSON.stringify(tests));
    loadTests();
    e.target.reset();
    alert('Test submitted for approval');
});

function loadTests() {
    // Pending Tests for Technician
    const testTbody = document.querySelector('#testTable tbody');
    testTbody.innerHTML = '';
    tests.filter(t => t.status === 'pending').forEach(t => {
        const patient = patients.find(p => p.id === t.patientId);
        const tr = testTbody.insertRow();
        tr.innerHTML = `<td>${patient?.name || ''}</td><td>${t.dept}</td><td>${t.status}</td>`;
    });

    // Approval Table for Doctor
    const appTbody = document.querySelector('#approvalTable tbody');
    appTbody.innerHTML = '';
    tests.filter(t => t.status === 'pending_approval').forEach(t => {
        const patient = patients.find(p => p.id === t.patientId);
        const tr = appTbody.insertRow();
        tr.innerHTML = `
            <td>${patient?.name || ''}</td>
            <td>${t.type}</td>
            <td style="white-space: pre-line;">${t.result}</td>
            <td>
                <button class="btn btn-sm btn-success" onclick="approveTest('${t.date}')">Approve</button>
                <button class="btn btn-sm btn-warning" onclick="rejectTest('${t.date}')">Reject</button>
            </td>
        `;
    });
}

function approveTest(date) {
    const test = tests.find(t => t.date === date);
    if (test) {
        test.status = 'approved';
        localStorage.setItem('tests', JSON.stringify(tests));
        loadTests();
        generateReport(test.patientId);
    }
}

function rejectTest(date) {
    const test = tests.find(t => t.date === date);
    if (test) {
        test.status = 'rejected';
        localStorage.setItem('tests', JSON.stringify(tests));
        loadTests();
    }
}

// Report Generation
function viewReport(pid) {
    const patient = patients.find(p => p.id === pid);
    const approvedTests = tests.filter(t => t.patientId === pid && t.status === 'approved');
    if (patient && approvedTests.length > 0) {
        const content = `
            <div class="text-center mb-4">
                <h3>AlphaMed Clinical Laboratory</h3>
                <p class="text-muted">Quality Assurance Through Advance Technology</p>
            </div>
            <table class="table table-bordered">
                <tr><th>Patient ID</th><td>${patient.id}</td></tr>
                <tr><th>Name</th><td>${patient.name}</td></tr>
                <tr><th>Date</th><td>${new Date(patient.date).toLocaleDateString()}</td></tr>
                <tr><th>Contact</th><td>${patient.contact}</td></tr>
            </table>
            <h5 class="mt-4">Test Results</h5>
            <table class="table table-sm">
                <thead class="table-light"><tr><th>Test</th><th>Department</th><th>Result</th></tr></thead>
                <tbody>
                    ${approvedTests.map(t => `<tr><td>${t.type}</td><td>${t.dept}</td><td style="white-space: pre-line;">${t.result}</td></tr>`).join('')}
                </tbody>
            </table>
            <div id="qrHere" class="text-center mt-4"></div>
            <div class="text-end mt-5">
                <p><strong>Authorized Signatory</strong></p>
            </div>
        `;
        document.getElementById('reportContent').innerHTML = content;
        new QRCode(document.getElementById('qrHere'), {
            text: window.location.origin + window.location.pathname + '?report=' + patient.id,
            width: 120, height: 120
        });
        new bootstrap.Modal(document.getElementById('reportModal')).show();
    } else {
        alert('No approved tests for this patient.');
    }
}

function generateReport(pid) {
    viewReport(pid);
}

// Print & PDF
document.getElementById('printBtn').addEventListener('click', () => {
    const printWin = window.open('', '', 'width=900,height=700');
    printWin.document.write(`
        <html><head><title>Report</title>
        <style>
            body { font-family: Arial; padding: 20px; }
            table { width: 100%; border-collapse: collapse; margin: 10px 0; }
            th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
            th { background: #f0f0f0; }
            .text-center { text-align: center; }
        </style>
        </head><body>${document.getElementById('reportContent').innerHTML}</body></html>
    `);
    printWin.document.close();
    setTimeout(() => printWin.print(), 500);
});

document.getElementById('pdfBtn').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');
    doc.html(document.getElementById('reportContent'), {
        callback: (pdf) => pdf.save(`${patients.find(p => p.id === urlParams.get('report'))?.id || 'report'}.pdf`),
        x: 10, y: 10, html2canvas: { scale: 0.23 }
    });
});

// Admin: Users
document.getElementById('userForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const un = document.getElementById('uName').value.trim();
    const pw = document.getElementById('uPass').value;
    const role = document.getElementById('uRole').value;
    if (un && pw) {
        users[un] = { pass: pw, role: role };
        localStorage.setItem('users', JSON.stringify(users));
        loadUsers();
        e.target.reset();
        alert('User added: ' + un);
    }
});

function loadUsers() {
    const tbody = document.querySelector('#userTable tbody');
    tbody.innerHTML = '';
    Object.keys(users).forEach(u => {
        if (u !== 'admin') { // admin delete na ho
            const tr = tbody.insertRow();
            tr.innerHTML = `<td>${u}</td><td>${users[u].role}</td><td><button class="btn btn-sm btn-danger" onclick="deleteUser('${u}')">Delete</button></td>`;
        }
    });
}

function deleteUser(un) {
    if (confirm('Delete user: ' + un + '?')) {
        delete users[un];
        localStorage.setItem('users', JSON.stringify(users));
        loadUsers();
    }
}

// Inventory
document.getElementById('inventoryForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const item = {
        name: document.getElementById('itemName').value.trim(),
        qty: parseInt(document.getElementById('itemQty').value),
        date: new Date().toISOString()
    };
    inventory.push(item);
    localStorage.setItem('inventory', JSON.stringify(inventory));
    loadInventory();
    e.target.reset();
});

function loadInventory() {
    const tbody = document.querySelector('#invTable tbody');
    const adminTbody = document.querySelector('#inventoryTable tbody');
    [tbody, adminTbody].forEach(tb => {
        tb.innerHTML = '';
        inventory.forEach(i => {
            const tr = tb.insertRow();
            tr.innerHTML = `<td>${i.name}</td><td>${i.qty}</td>${tb === tbody ? `<td>${i.qty < 10 ? '<span class="text-danger">Low</span>' : 'OK'}</td>` : ''}`;
        });
    });
    updateDashboard();
}

// Quality Control
document.getElementById('qcForm').addEventListener('submit', (e) => {
    e.preventDefault();
    qcLogs.push({
        date: new Date().toISOString(),
        entry: document.getElementById('qcLog').value.trim()
    });
    localStorage.setItem('qcLogs', JSON.stringify(qcLogs));
    loadQC();
    e.target.reset();
});

function loadQC() {
    const tbody = document.querySelector('#qcTable tbody');
    tbody.innerHTML = '';
    qcLogs.slice(-10).reverse().forEach(l => {
        const tr = tbody.insertRow();
        tr.innerHTML = `<td>${new Date(l.date).toLocaleString()}</td><td>${l.entry}</td>`;
    });
}

// Billing
document.getElementById('billForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const bill = {
        patientId: document.getElementById('billPatient').value,
        amount: document.getElementById('billAmount').value,
        date: new Date().toISOString()
    };
    bills.push(bill);
    localStorage.setItem('bills', JSON.stringify(bills));
    loadBills();
    e.target.reset();
});

function loadBills() {
    const tbody = document.querySelector('#billTable tbody');
    tbody.innerHTML = '';
    bills.forEach(b => {
        const patient = patients.find(p => p.id === b.patientId);
        const tr = tbody.insertRow();
        tr.innerHTML = `<td>${patient?.name || 'Unknown'}</td><td>₹${b.amount}</td><td>${new Date(b.date).toLocaleString()}</td>`;
    });
}

// Dashboard Stats
function updateDashboard() {
    document.getElementById('totalPatients').textContent = patients.length;
    document.getElementById('pendingTests').textContent = tests.filter(t => t.status === 'pending_approval').length;
    document.getElementById('lowInventory').textContent = inventory.filter(i => i.qty < 10).length;
    document.getElementById('qcAlerts').textContent = qcLogs.length;
}

// Load All
function loadAllData() {
    loadPatients();
    loadTests();
    loadUsers();
    loadInventory();
    loadQC();
    loadBills();
    updateDashboard();
}

// Logout
function logout() {
    currentUser = null;
    document.getElementById('app').style.display = 'none';
    document.getElementById('loginForm').reset();
    new bootstrap.Modal(document.getElementById('loginModal')).show();
}

// URL Report View
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('report')) {
    setTimeout(() => {
        viewReport(urlParams.get('report'));
    }, 1000);
}

// Initialize
document.getElementById('loginModal').classList.add('show');
new bootstrap.Modal(document.getElementById('loginModal')).show();
