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

// Baki code same rahega...
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
        document.querySelector('.modal-backdrop')?.remove();
        showRoleSections();
        loadAllData();
    } else {
        alert('Invalid credentials! Try: admin / admin');
    }
});
function showRoleSections() {
    const role = currentUser.role;
    document.getElementById('receptionLi').style.display = role === 'reception' || role === 'admin' ? 'block' : 'none';
    document.getElementById('technicianLi').style.display = role === 'technician' || role === 'admin' ? 'block' : 'none';
    document.getElementById('doctorLi').style.display = role === 'doctor' || role === 'admin' ? 'block' : 'none';
    document.getElementById('adminLi').style.display = role === 'admin' ? 'block' : 'none';
    showSection('dashboard');
}

function showSection(sec) {
    document.querySelectorAll('.section').forEach(s => s.classList.add('d-none'));
    document.getElementById(sec).classList.remove('d-none');
}

// Patient Registration
document.getElementById('patientForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const patient = {
        id: 'P' + Date.now(),
        name: document.getElementById('pName').value,
        date: document.getElementById('pDate').value,
        contact: document.getElementById('pContact').value,
        category: document.getElementById('testCategory').value,
        notes: document.getElementById('pNotes').value,
        status: 'registered'
    };
    patients.push(patient);
    localStorage.setItem('patients', JSON.stringify(patients));
    loadPatients();
    e.target.reset();
});

// Load Patients
function loadPatients() {
    const tbody = document.querySelector('#patientTable tbody');
    tbody.innerHTML = '';
    patients.forEach(p => {
        const tr = tbody.insertRow();
        tr.innerHTML = `<td>${p.id}</td><td>${p.name}</td><td>${p.date}</td><td>${p.category}</td><td><button class="btn btn-sm btn-info" onclick="viewReport('${p.id}')">View</button></td>`;
    });
    document.getElementById('selectPatient').innerHTML = '<option>Select Patient</option>' + patients.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
    updateDashboard();
}

// Technician Tests
document.getElementById('testForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const test = {
        patientId: document.getElementById('selectPatient').value,
        dept: document.getElementById('dept').value,
        type: document.getElementById('testType').value,
        result: document.getElementById('testResult').value,
        date: new Date().toISOString(),
        status: 'pending_approval'
    };
    tests.push(test);
    localStorage.setItem('tests', JSON.stringify(tests));
    loadTests();
    e.target.reset();
});

function loadTests() {
    const tbody = document.querySelector('#testTable tbody');
    tbody.innerHTML = '';
    tests.filter(t => t.status === 'pending').forEach(t => {
        const patient = patients.find(p => p.id === t.patientId);
        const tr = tbody.insertRow();
        tr.innerHTML = `<td>${patient ? patient.name : ''}</td><td>${t.dept}</td><td>${t.status}</td>`;
    });
    // Approval Table for Doctor
    const appTbody = document.querySelector('#approvalTable tbody');
    appTbody.innerHTML = '';
    tests.filter(t => t.status === 'pending_approval').forEach(t => {
        const patient = patients.find(p => p.id === t.patientId);
        const tr = appTbody.insertRow();
        tr.innerHTML = `<td>${patient ? patient.name : ''}</td><td>${t.type}</td><td>${t.result}</td><td><button class="btn btn-sm btn-success" onclick="approveTest('${t.date}')">Approve</button> <button class="btn btn-sm btn-warning" onclick="rejectTest('${t.date}')">Reject</button></td>`;
    });
}

// Approve/Reject
function approveTest(id) {
    const test = tests.find(t => t.date === id);
    if (test) {
        test.status = 'approved';
        localStorage.setItem('tests', JSON.stringify(tests));
        loadTests();
        generateReport(test.patientId);
    }
}

function rejectTest(id) {
    const test = tests.find(t => t.date === id);
    if (test) {
        test.status = 'rejected';
        localStorage.setItem('tests', JSON.stringify(tests));
        loadTests();
    }
}

// Report Generation
function viewReport(pid) {
    const patient = patients.find(p => p.id === pid);
    const patientTests = tests.filter(t => t.patientId === pid && t.status === 'approved');
    if (patient && patientTests.length > 0) {
        const content = `
            <div class="text-center mb-4">
                <h3>AlphaMed Clinical Laboratory Report</h3>
                <p>Quality Assurance Through Advance Technology</p>
            </div>
            <table class="table">
                <tr><th>Patient ID</th><td>${patient.id}</td></tr>
                <tr><th>Name</th><td>${patient.name}</td></tr>
                <tr><th>Date</th><td>${patient.date}</td></tr>
                ${patientTests.map(t => `<tr><th>${t.type} (${t.dept})</th><td>${t.result}</td></tr>`).join('')}
            </table>
            <div id="qrHere"></div>
        `;
        document.getElementById('reportContent').innerHTML = content;
        new QRCode(document.getElementById('qrHere'), { text: window.location.href + '?report=' + patient.id, width: 100, height: 100 });
        new bootstrap.Modal(document.getElementById('reportModal')).show();
    }
}

function generateReport(pid) {
    viewReport(pid); // Auto show
}

// Print/PDF
document.getElementById('printBtn').addEventListener('click', () => {
    window.print();
});
document.getElementById('pdfBtn').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.html(document.getElementById('reportContent'), {
        callback: (pdf) => pdf.save('report.pdf'),
        x: 10, y: 10, width: 190, windowWidth: 800
    });
});

// Admin Users
document.getElementById('userForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const un = document.getElementById('uName').value;
    users[un] = { pass: document.getElementById('uPass').value, role: document.getElementById('uRole').value };
    localStorage.setItem('users', JSON.stringify(users));
    loadUsers();
    e.target.reset();
});

function loadUsers() {
    const tbody = document.querySelector('#userTable tbody');
    tbody.innerHTML = '';
    Object.keys(users).forEach(u => {
        const tr = tbody.insertRow();
        tr.innerHTML = `<td>${u}</td><td>${users[u].role}</td><td><button class="btn btn-sm btn-danger" onclick="deleteUser('${u}')">Delete</button></td>`;
    });
}

function deleteUser(un) {
    delete users[un];
    localStorage.setItem('users', JSON.stringify(users));
    loadUsers();
}

// Inventory
document.getElementById('inventoryForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const item = {
        name: document.getElementById('itemName').value,
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
    tbody.innerHTML = '';
    inventory.forEach(i => {
        const tr = tbody.insertRow();
        tr.innerHTML = `<td>${i.name}</td><td>${i.qty}</td><td>${i.qty < 10 ? 'Low' : 'OK'}</td>`;
    });
    document.querySelector('#inventoryTable tbody').innerHTML = inventory.map(i => `<tr><td>${i.name}</td><td>${i.qty}</td></tr>`).join('');
    updateDashboard();
}

// QC
document.getElementById('qcForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const log = {
        date: new Date().toISOString(),
        entry: document.getElementById('qcLog').value
    };
    qcLogs.push(log);
    localStorage.setItem('qcLogs', JSON.stringify(qcLogs));
    loadQC();
    e.target.reset();
});

function loadQC() {
    const tbody = document.querySelector('#qcTable tbody');
    tbody.innerHTML = '';
    qcLogs.slice(-5).reverse().forEach(l => {
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
    document.getElementById('billPatient').innerHTML = '<option>Select Patient</option>' + patients.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
    const tbody = document.querySelector('#billTable tbody');
    tbody.innerHTML = '';
    bills.forEach(b => {
        const patient = patients.find(p => p.id === b.patientId);
        const tr = tbody.insertRow();
        tr.innerHTML = `<td>${patient ? patient.name : ''}</td><td>${b.amount}</td><td>${new Date(b.date).toLocaleString()}</td>`;
    });
}

// Load All Data
function loadAllData() {
    loadPatients();
    loadTests();
    loadUsers();
    loadInventory();
    loadQC();
    loadBills();
    updateDashboard();
}

function updateDashboard() {
    document.getElementById('totalPatients').textContent = patients.length;
    document.getElementById('pendingTests').textContent = tests.filter(t => t.status === 'pending').length;
    document.getElementById('lowInventory').textContent = inventory.filter(i => i.qty < 10).length;
    document.getElementById('qcAlerts').textContent = qcLogs.length;
}

function logout() {
    currentUser = null;
    document.getElementById('app').style.display = 'none';
    new bootstrap.Modal(document.getElementById('loginModal')).show();
    document.getElementById('loginForm').reset();
}

// Init
document.getElementById('loginModal').classList.add('show');
new bootstrap.Modal(document.getElementById('loginModal')).show();

// URL Report
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('report')) {
    const pid = urlParams.get('report');
    viewReport(pid);
}
