// patient.js
export function savePatient(e) {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
    }

    const patient = {
        id: Date.now(),
        name: document.getElementById('patientName').value.trim(),
        age: parseInt(document.getElementById('patientAge').value),
        gender: document.getElementById('patientGender').value,
        address: document.getElementById('patientAddress').value.trim(),
        phone: document.getElementById('patientPhone').value.trim(),
        appointment: document.getElementById('patientAppointment').value,
        departments: getSelectedDepartments(),
        registeredDate: new Date().toISOString(),
        status: 'Registered'
    };

    let patients = JSON.parse(localStorage.getItem('patients') || '[]');
    patients.push(patient);
    localStorage.setItem('patients', JSON.stringify(patients));
    alert('Patient registered successfully!');
    generateRegistrationSlip(patient); // Assumes this is imported or defined elsewhere
    loadPatients(localStorage.getItem('currentUser').role);
    form.reset();
    form.classList.remove('was-validated');
    document.querySelectorAll('.deptCheck').forEach(ch => ch.checked = false);
    document.querySelectorAll('.testCheck').forEach(ch => ch.checked = false);
}

export function loadPatients(role) {
    const patientList = document.getElementById('patientList');
    patientList.innerHTML = `
        <h2 class="mt-4">Patient List</h2>
        <input type="text" id="patientSearch" placeholder="Search by Name or ID" class="form-control mb-3" aria-label="Search patients">
    `;
    const searchInput = patientList.querySelector('#patientSearch');
    searchInput.addEventListener('input', (e) => updatePatientTable(role, e.target.value));
    updatePatientTable(role);
}

function updatePatientTable(role, query = '') {
    const patients = query ? searchPatients(query) : JSON.parse(localStorage.getItem('patients') || '[]');
    const table = document.createElement('table');
    table.className = 'table table-striped';
    table.innerHTML = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Appointment</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;
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
                <button onclick="viewReport(${p.id})" class="btn btn-info btn-sm me-2">View Report</button>
            </td>
        `;
        if (role === 'mlt' || role === 'admin') {
            tr.querySelector('td:last-child').innerHTML += `<button onclick="enterResults(${p.id})" class="btn btn-warning btn-sm me-2">Enter Results</button>`;
        }
        if (role === 'admin') {
            tr.querySelector('td:last-child').innerHTML += `<button onclick="editPatient(${p.id})" class="btn btn-secondary btn-sm">Edit</button>`;
        }
        tbody.appendChild(tr);
    });

    patientList.appendChild(table);
}

function searchPatients(query) {
    const patients = JSON.parse(localStorage.getItem('patients') || '[]');
    return patients.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.id.toString().includes(query)
    );
}

function getSelectedDepartments() {
    const departments = [];
    document.querySelectorAll('.deptCheck:checked').forEach(checkbox => {
        const deptId = checkbox.dataset.deptId;
        const tests = [];
        document.querySelectorAll(`#testsFor${deptId} .testCheck:checked`).forEach(testCheck => {
            tests.push({ id: testCheck.dataset.testId, result: '' });
        });
        if (tests.length > 0) {
            departments.push({ deptId, tests });
        }
    });
    return departments;
}

// Placeholder for editPatient (to be implemented if needed)
window.editPatient = (patientId) => {
    alert(`Edit patient with ID: ${patientId} (Implement edit logic here)`);
};
