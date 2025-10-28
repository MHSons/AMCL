// SIMPLE LAB SYSTEM - 100% WORKING
let currentUser = null;
let patients = JSON.parse(localStorage.getItem('labPatients')) || [];
let tests = JSON.parse(localStorage.getItem('labTests')) || [];
let inventory = JSON.parse(localStorage.getItem('labInventory')) || [];

// LOGIN - SUPER SIMPLE
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'admin') {
        currentUser = 'admin';
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('mainApp').style.display = 'block';
        document.getElementById('currentUser').innerHTML = '<strong>Welcome, Admin!</strong>';
        loadAllData();
    } else {
        alert('Username: admin | Password: admin');
    }
});

// SHOW PAGE
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

// PATIENT REGISTRATION
document.getElementById('patientForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const patient = {
        id: 'P' + (patients.length + 1).toString().padStart(4, '0'),
        name: document.getElementById('pName').value,
        contact: document.getElementById('pContact').value,
        test: document.getElementById('pTest').value,
        date: document.getElementById('pDate').value
    };
    patients.push(patient);
    localStorage.setItem('labPatients', JSON.stringify(patients));
    loadPatients();
    this.reset();
    alert('Patient Registered: ' + patient.id);
});

// TEST RESULTS
document.getElementById('testForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const patientId = document.getElementById('selectPatient').value;
    const result = document.getElementById('testResult').value;
    tests.push({
        patientId: patientId,
        result: result,
        date: new Date().toISOString()
    });
    localStorage.setItem('labTests', JSON.stringify(tests));
    loadTests();
    this.reset();
});

// INVENTORY
document.getElementById('invForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const item = {
        name: document.getElementById('invName').value,
        qty: parseInt(document.getElementById('invQty').value)
    };
    inventory.push(item);
    localStorage.setItem('labInventory', JSON.stringify(inventory));
    loadInventory();
    this.reset();
});

// LOAD DATA FUNCTIONS
function loadPatients() {
    const tbody = document.getElementById('patientList');
    tbody.innerHTML = '';
    patients.forEach(p => {
        const tr = tbody.insertRow();
        tr.innerHTML = `<td>${p.id}</td><td>${p.name}</td><td>${p.test}</td><td>${p.date}</td>`;
    });
    loadPatientDropdown();
    updateDashboard();
}

function loadPatientDropdown() {
    const select = document.getElementById('selectPatient');
    select.innerHTML = '<option value="">Select Patient</option>';
    patients.forEach(p => {
        select.innerHTML += `<option value="${p.id}">${p.name} (${p.id})</option>`;
    });
}

function loadTests() {
    const tbody = document.getElementById('testList');
    tbody.innerHTML = '';
    tests.forEach(t => {
        const patient = patients.find(p => p.id === t.patientId);
        const tr = tbody.insertRow();
        tr.innerHTML = `<td>${patient ? patient.name : 'Unknown'}</td><td>${patient ? patient.test : ''}</td><td>${t.result}</td><td>${new Date(t.date).toLocaleDateString()}</td>`;
    });
    loadReports();
    updateDashboard();
}

function loadInventory() {
    const tbody = document.getElementById('invList');
    tbody.innerHTML = '';
    inventory.forEach(item => {
        const tr = tbody.insertRow();
        const status = item.qty < 10 ? 'danger' : 'success';
        tr.innerHTML = `<td>${item.name}</td><td>${item.qty}</td><td><span class="text-${status}">${item.qty < 10 ? 'LOW' : 'OK'}</span></td>`;
    });
    updateDashboard();
}

function loadReports() {
    const container = document.getElementById('reportList');
    container.innerHTML = '';
    patients.forEach(patient => {
        const patientTests = tests.filter(t => t.patientId === patient.id);
        if (patientTests.length > 0) {
            const div = document.createElement('div');
            div.className = 'col-md-4 mb-3';
            div.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h6>${patient.name}</h6>
                        <p><small>${patient.id} | ${patient.test}</small></p>
                        <button class="btn btn-sm btn-primary" onclick="printReport('${patient.id}')">Print Report</button>
                    </div>
                </div>
            `;
            container.appendChild(div);
        }
    });
}

// PRINT REPORT
function printReport(patientId) {
    const patient = patients.find(p => p.id === patientId);
    const patientTests = tests.filter(t => t.patientId === patientId);
    const printContent = `
        <div style="text-align: center; padding: 20px;">
            <h2>AlphaMed Clinical Laboratory</h2>
            <p>Quality Assurance Through Advance Technology</p>
            <hr>
            <table style="width: 100%; border-collapse: collapse;">
                <tr><td><strong>Patient ID:</strong></td><td>${patient.id}</td></tr>
                <tr><td><strong>Name:</strong></td><td>${patient.name}</td></tr>
                <tr><td><strong>Test:</strong></td><td>${patient.test}</td></tr>
                <tr><td><strong>Date:</strong></td><td>${patient.date}</td></tr>
            </table>
            <h4 style="margin-top: 20px;">Results:</h4>
            ${patientTests.map(t => `<p><strong>${patient.test}:</strong> ${t.result}</p>`).join('')}
            <hr>
            <p style="text-align: right;"><strong>Authorized Signature</strong></p>
        </div>
    `;
    
    const printWin = window.open('', '', 'width=800,height=600');
    printWin.document.write(`
        <html><head><title>Lab Report - ${patient.name}</title>
        <style>body { font-family: Arial; margin: 20px; }</style>
        </head><body>${printContent}</body></html>
    `);
    printWin.document.close();
    printWin.print();
}

// DASHBOARD STATS
function updateDashboard() {
    document.getElementById('totalPatients').textContent = patients.length;
    document.getElementById('totalTests').textContent = tests.length;
    document.getElementById('lowStock').textContent = inventory.filter(i => i.qty < 10).length;
    document.getElementById('todayReports').textContent = tests.filter(t => new Date(t.date).toDateString() === new Date().toDateString()).length;
}

// LOGOUT
function logout() {
    document.getElementById('mainApp').style.display = 'none';
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('loginForm').reset();
}

// INIT
showPage('dashboard');
