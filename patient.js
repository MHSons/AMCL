// patient.js
export function savePatient(e) {
    e.preventDefault();
    const name = document.getElementById('patientName').value;
    const age = document.getElementById('patientAge').value;
    const gender = document.getElementById('patientGender').value;
    const address = document.getElementById('patientAddress').value;
    const phone = document.getElementById('patientPhone').value;
    const appointment = document.getElementById('patientAppointment').value;
    const departments = [];
    document.querySelectorAll('.deptCheck:checked').forEach(checkbox => {
        const deptId = checkbox.dataset.deptId;
        const tests = [];
        document.querySelectorAll(`#testsFor${deptId} .testCheck:checked`).forEach(testCheck => {
            tests.push(testCheck.dataset.testId);
        });
        if (tests.length > 0) {
            departments.push({deptId, tests: tests.map(id => ({id, result: ''}))});
        }
    });
    if (departments.length === 0) {
        alert('Select at least one department and test');
        return;
    }
    const patient = {
        id: Date.now(),
        name, age, gender, address, phone,
        appointment,
        departments,
        registeredDate: new Date().toISOString(),
        status: 'Registered'
    };
    const patients = JSON.parse(localStorage.getItem('patients'));
    patients.push(patient);
    localStorage.setItem('patients', JSON.stringify(patients));
    alert('Patient registered');
    generateRegistrationSlip(patient);
    loadPatients(localStorage.getItem('currentUser').role);
    e.target.reset();
    document.querySelectorAll('.deptCheck').forEach(ch => ch.checked = false);
    document.querySelectorAll('.testCheck').forEach(ch => ch.checked = false);
}

export function loadPatients(role) {
    const patientList = document.getElementById('patientList');
    patientList.innerHTML = '<h2>Patient List</h2><input type="text" id="patientSearch" placeholder="Search by Name or ID" class="form-control mb-2">';
    const searchInput = patientList.querySelector('#patientSearch');
    searchInput.addEventListener('input', (e) => updatePatientTable(role, e.target.value));
    updatePatientTable(role);
}

function updatePatientTable(role, query = '') {
    const patients = query ? searchPatients(query) : JSON.parse(localStorage.getItem('patients'));
    const table = document.createElement('table');
    table.className = 'table';
    table.innerHTML = '<thead><tr><th>ID</th><th>Name</th><th>Age</th><th>Gender</th><th>Appointment</th><th>Status</th><th>Actions</th></tr></thead><tbody></tbody>';
    const tbody = table.querySelector('tbody');
    patients.forEach(p => {
        const tr = document.createElement('tr');
        const appointmentTime = new Date(p.appointment).toLocaleString('en-US', { timeZone: 'Asia/Karachi', dateStyle: 'medium', timeStyle: 'short' });
        tr.innerHTML = `
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>${p.age}</td>
            <td>${p.gender}</td>
            <td>${appointmentTime}</td>
            <td>${p.status}</td>
            <td>
                <button onclick="viewReport(${p.id})" class="btn btn-info btn-sm">View Report</button>
            </td>
        `;
        if (role === 'mlt' || role === 'admin') {
            tr.querySelector('td:last-child').innerHTML += ` <button onclick="enterResults(${p.id})" class="btn btn-warning btn-sm">Enter Results</button>`;
        }
        if (role === 'admin') {
            tr.querySelector('td:last-child').innerHTML += ` <button onclick="editPatient(${p.id})" class="btn btn-secondary btn-sm">Edit</button>`;
        }
        tbody.appendChild(tr);
    });
    patientList.appendChild(table);
}

function searchPatients(query) {
    const patients = JSON.parse(localStorage.getItem('patients'));
    return patients.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.id.toString().includes(query));
}
