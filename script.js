import { savePatient, loadPatients } from './patient.js';
import { generateRegistrationSlip, viewReport } from './report.js';
import config from './config.js';

const CryptoJS = window.CryptoJS;

function hashPassword(password) {
    return CryptoJS.SHA256(password).toString();
}

// Initialize storage with data from data.json if available
function initStorage() {
    if (!localStorage.getItem('departments')) {
        fetch('./data.json')
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('departments', JSON.stringify(data.departments));
                localStorage.setItem('tests', JSON.stringify(data.tests));
                localStorage.setItem('users', JSON.stringify(data.users.map(u => ({
                    ...u,
                    password: hashPassword(u.password) // Ensure passwords are hashed
                }))));
                localStorage.setItem('patients', JSON.stringify([]));
                localStorage.setItem('labSettings', JSON.stringify({
                    name: 'AlphaMed Clinical Laboratory',
                    tagline: 'Quality Assurance Through Advanced Technology',
                    logo: 'data:image/png;base64,[BASE64_LOGO_HERE]',
                    cliaNumber: 'CLIA #45D1234567',
                    capNumber: 'CAP #12345678',
                    hipaaNotice: 'This report contains Protected Health Information (PHI) under HIPAA. Unauthorized disclosure is prohibited.'
                }));
                localStorage.setItem('gallery', JSON.stringify([]));
                localStorage.setItem('careers', JSON.stringify([]));
                console.log('Storage initialized with data.json');
            })
            .catch(error => console.error('Error loading data.json:', error));
    }
}

function loadLabSettings() {
    const settings = JSON.parse(localStorage.getItem('labSettings'));
    document.getElementById('labName').textContent = settings.name;
    document.getElementById('labTagline').textContent = settings.tagline;
    document.getElementById('labLogo').src = settings.logo;
    document.getElementById('watermark').style.backgroundImage = `url(${settings.logo})`;
}

document.addEventListener('DOMContentLoaded', () => {
    initStorage();
    loadLabSettings();
    if (!localStorage.getItem('currentUser')) {
        loadPublicContent();
    } else {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        loadRoleContent(user.role);
    }
});

function loadPublicContent() {
    const main = document.getElementById('mainSection');
    main.style.display = 'block';
    main.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"><img id="labLogo" alt="Logo" width="150"></a>
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                <li class="nav-item"><a class="nav-link" href="#accreditation">Accreditation</a></li>
                <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                <li class="nav-item"><a class="nav-link" href="#careers">Careers</a></li>
                <li class="nav-item"><a class="nav-link" href="#gallery">Gallery</a></li>
                <li class="nav-item"><a class="nav-link" href="#portal">Patient Portal</a></li>
            </ul>
        </nav>
        <section id="home">Welcome to AlphaMed - USA Accredited Clinical Lab. <p>CLIA #${JSON.parse(localStorage.getItem('labSettings')).cliaNumber}</p></section>
        <section id="about">About Us: We are a certified lab providing high-quality testing.</section>
        <section id="services"><ul>${JSON.parse(localStorage.getItem('departments')).map(d => `<li>${d.name}</li>`).join('')}</ul></section>
        <section id="accreditation">Accredited by CLIA and CAP. ${JSON.parse(localStorage.getItem('labSettings')).hipaaNotice}</section>
        <section id="contact">Contact us at info@alphamedlab.com</section>
        <section id="careers"><ul>${JSON.parse(localStorage.getItem('careers')).map(c => `<li>${c}</li>`).join('')}</ul></section>
        <section id="gallery"><ul>${JSON.parse(localStorage.getItem('gallery')).map(g => `<li>${g}</li>`).join('')}</ul></section>
        <section id="portal"><button onclick="showLogin()">Login to Patient Portal</button></section>
    `;
}

function showLogin() {
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('mainSection').style.display = 'none';
}

document.getElementById('togglePassword').addEventListener('click', () => {
    const password = document.getElementById('password');
    const type = password.type === 'password' ? 'text' : 'password';
    password.type = type;
    document.querySelector('#togglePassword i').classList.toggle('fa-eye-slash');
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = hashPassword(document.getElementById('password').value);
    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log('Login Attempt - Username:', username, 'Hashed Password:', password, 'Users:', users);
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('mainSection').style.display = 'block';
        loadRoleContent(user.role);
    } else {
        alert('Invalid credentials. Check console for details.');
    }
});

function loadRoleContent(role) {
    const main = document.getElementById('mainSection');
    main.innerHTML = '<button onclick="logout()" class="btn btn-secondary mb-3">Logout</button>';
    const changePassForm = document.createElement('form');
    changePassForm.innerHTML = `
        <h3>Change Password</h3>
        <input type="password" id="newPassword" placeholder="New Password" class="form-control mb-2">
        <button type="submit" class="btn btn-info">Change</button>
    `;
    changePassForm.addEventListener('submit', changePassword);
    main.appendChild(changePassForm);

    if (role === 'reception' || role === 'admin') {
        const reminderSection = document.createElement('div');
        reminderSection.id = 'reminderSection';
        reminderSection.innerHTML = '<h2>Upcoming Appointments</h2><div id="reminders"></div>';
        main.appendChild(reminderSection);
        checkReminders(role);
    }

    const patientList = document.createElement('div');
    patientList.id = 'patientList';
    patientList.innerHTML = '<h2>Patient List</h2><input type="text" id="patientSearch" placeholder="Search by Name or ID" class="form-control mb-2">';
    main.appendChild(patientList);
    loadPatients(role);

    if (role === 'reception' || role === 'admin') {
        const form = document.createElement('form');
        form.id = 'patientForm';
        form.innerHTML = `
            <h2>Patient Entry</h2>
            <input type="text" id="patientName" placeholder="Name" class="form-control mb-2" required>
            <input type="number" id="patientAge" placeholder="Age" class="form-control mb-2" required>
            <select id="patientGender" class="form-control mb-2" required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <input type="text" id="patientAddress" placeholder="Address" class="form-control mb-2" required>
            <input type="text" id="patientPhone" placeholder="Phone" class="form-control mb-2" required>
            <input type="datetime-local" id="patientAppointment" placeholder="Appointment Time" class="form-control mb-2" required>
            <div id="deptSelection">
                <h3>Select Departments and Tests</h3>
            </div>
            <button type="submit" class="btn btn-primary">Register Patient</button>
        `;
        main.appendChild(form);
        loadDeptSelection();
        form.addEventListener('submit', savePatient);
    }

    if (role === 'mlt' || role === 'admin') {
        const resultSection = document.createElement('div');
        resultSection.id = 'resultSection';
        resultSection.innerHTML = '<h2>Enter Results</h2>';
        main.appendChild(resultSection);
    }

    if (role === 'admin') {
        const settingsSection = document.createElement('div');
        settingsSection.innerHTML = '<h2>Admin Settings</h2>';
        const addDeptForm = document.createElement('form');
        addDeptForm.innerHTML = `
            <h3>Add Department</h3>
            <input type="text" id="newDeptName" placeholder="Department Name" class="form-control mb-2">
            <button type="submit" class="btn btn-success">Add</button>
        `;
        addDeptForm.addEventListener('submit', addDepartment);
        settingsSection.appendChild(addDeptForm);

        const addTestForm = document.createElement('form');
        addTestForm.innerHTML = `
            <h3>Add Test</h3>
            <select id="deptForTest" class="form-control mb-2"></select>
            <input type="text" id="newTestName" placeholder="Test Name" class="form-control mb-2">
            <input type="text" id="testUnit" placeholder="Unit" class="form-control mb-2">
            <input type="text" id="normalMale" placeholder="Normal Male" class="form-control mb-2">
            <input type="text" id="normalFemale" placeholder="Normal Female" class="form-control mb-2">
            <button type="submit" class="btn btn-success">Add Test</button>
        `;
        addTestForm.addEventListener('submit', addTest);
        settingsSection.appendChild(addTestForm);
        loadDeptsForTest();

        const addUserForm = document.createElement('form');
        addUserForm.innerHTML = `
            <h3>Add User</h3>
            <input type="text" id="newUsername" placeholder="Username" class="form-control mb-2">
            <input type="password" id="newUserPassword" placeholder="Password" class="form-control mb-2">
            <select id="newUserRole" class="form-control mb-2">
                <option value="admin">Admin</option>
                <option value="mlt">MLT</option>
                <option value="reception">Reception</option>
            </select>
            <button type="submit" class="btn btn-success">Add User</button>
        `;
        addUserForm.addEventListener('submit', addUser);
        settingsSection.appendChild(addUserForm);

        const careersSection = document.createElement('div');
        careersSection.innerHTML = '<h3>Careers</h3><ul id="careersList"></ul>';
        const addCareerForm = document.createElement('form');
        addCareerForm.innerHTML = `
            <input type="text" id="newCareer" placeholder="Career Position" class="form-control mb-2">
            <button type="submit" class="btn btn-success">Add</button>
        `;
        addCareerForm.addEventListener('submit', addCareer);
        careersSection.appendChild(addCareerForm);
        settingsSection.appendChild(careersSection);
        loadCareers();

        const gallerySection = document.createElement('div');
        gallerySection.innerHTML = '<h3>Gallery</h3><ul id="galleryList"></ul>';
        const addGalleryForm = document.createElement('form');
        addGalleryForm.innerHTML = `
            <input type="text" id="newGalleryItem" placeholder="Gallery Item Description" class="form-control mb-2">
            <button type="submit" class="btn btn-success">Add</button>
        `;
        addGalleryForm.addEventListener('submit', addGalleryItem);
        gallerySection.appendChild(addGalleryForm);
        settingsSection.appendChild(gallerySection);
        loadGallery();

        main.appendChild(settingsSection);
    }
}

function loadDeptSelection() {
    const deptSelection = document.getElementById('deptSelection');
    const departments = JSON.parse(localStorage.getItem('departments'));
    departments.forEach(dept => {
        const div = document.createElement('div');
        div.innerHTML = `
            <label><input type="checkbox" class="deptCheck" data-dept-id="${dept.id}"> ${dept.name}</label>
            <div id="testsFor${dept.id}" style="display:none;"></div>
        `;
        deptSelection.appendChild(div);
        div.querySelector('.deptCheck').addEventListener('change', (e) => {
            const testDiv = div.querySelector(`#testsFor${dept.id}`);
            if (e.target.checked) {
                testDiv.style.display = 'block';
                loadTestsForDept(dept.id, testDiv);
            } else {
                testDiv.style.display = 'none';
                testDiv.innerHTML = '';
            }
        });
    });
}

function loadTestsForDept(deptId, container) {
    const tests = JSON.parse(localStorage.getItem('tests'))[deptId] || [];
    container.innerHTML = '';
    tests.forEach(test => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="checkbox" class="testCheck" data-test-id="${test.id}"> ${test.name}`;
        container.appendChild(label);
    });
}

function changePassword(e) {
    e.preventDefault();
    const newPass = hashPassword(document.getElementById('newPassword').value);
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const users = JSON.parse(localStorage.getItem('users'));
    const userIndex = users.findIndex(u => u.username === currentUser.username);
    users[userIndex].password = newPass;
    localStorage.setItem('users', JSON.stringify(users));
    alert('Password changed');
    e.target.reset();
}

function logout() {
    localStorage.removeItem('currentUser');
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('mainSection').style.display = 'none';
}

function addDepartment(e) {
    e.preventDefault();
    const name = document.getElementById('newDeptName').value;
    const departments = JSON.parse(localStorage.getItem('departments'));
    const newId = departments.length + 1;
    departments.push({id: newId, name});
    localStorage.setItem('departments', JSON.stringify(departments));
    const tests = JSON.parse(localStorage.getItem('tests'));
    tests[newId] = [];
    localStorage.setItem('tests', JSON.stringify(tests));
    alert('Department added');
    e.target.reset();
}

function addTest(e) {
    e.preventDefault();
    const deptId = document.getElementById('deptForTest').value;
    const name = document.getElementById('newTestName').value;
    const unit = document.getElementById('testUnit').value;
    const normalMale = document.getElementById('normalMale').value;
    const normalFemale = document.getElementById('normalFemale').value;
    const tests = JSON.parse(localStorage.getItem('tests'));
    const deptTests = tests[deptId] || [];
    const newId = deptTests.length + 1;
    deptTests.push({id: newId, name, unit, normalMale, normalFemale});
    tests[deptId] = deptTests;
    localStorage.setItem('tests', JSON.stringify(tests));
    alert('Test added');
    e.target.reset();
}

function loadDeptsForTest() {
    const select = document.getElementById('deptForTest');
    const departments = JSON.parse(localStorage.getItem('departments'));
    departments.forEach(dept => {
        const option = document.createElement('option');
        option.value = dept.id;
        option.textContent = dept.name;
        select.appendChild(option);
    });
}

function addUser(e) {
    e.preventDefault();
    const username = document.getElementById('newUsername').value;
    const password = hashPassword(document.getElementById('newUserPassword').value);
    const role = document.getElementById('newUserRole').value;
    const users = JSON.parse(localStorage.getItem('users'));
    if (users.find(u => u.username === username)) {
        alert('Username exists');
        return;
    }
    users.push({username, password, role});
    localStorage.setItem('users', JSON.stringify(users));
    alert('User added');
    e.target.reset();
}

function addCareer(e) {
    e.preventDefault();
    const position = document.getElementById('newCareer').value;
    const careers = JSON.parse(localStorage.getItem('careers'));
    careers.push(position);
    localStorage.setItem('careers', JSON.stringify(careers));
    loadCareers();
    e.target.reset();
}

function loadCareers() {
    const list = document.getElementById('careersList');
    list.innerHTML = '';
    const careers = JSON.parse(localStorage.getItem('careers'));
    careers.forEach(c => {
        const li = document.createElement('li');
        li.textContent = c;
        list.appendChild(li);
    });
}

function addGalleryItem(e) {
    e.preventDefault();
    const desc = document.getElementById('newGalleryItem').value;
    const gallery = JSON.parse(localStorage.getItem('gallery'));
    gallery.push(desc);
    localStorage.setItem('gallery', JSON.stringify(gallery));
    loadGallery();
    e.target.reset();
}

function loadGallery() {
    const list = document.getElementById('galleryList');
    list.innerHTML = '';
    const gallery = JSON.parse(localStorage.getItem('gallery'));
    gallery.forEach(g => {
        const li = document.createElement('li');
        li.textContent = g;
        list.appendChild(li);
    });
}

function enterResults(patientId) {
    const patient = JSON.parse(localStorage.getItem('patients')).find(p => p.id === patientId);
    const div = document.createElement('div');
    div.innerHTML = `<h3>Enter Results for ${patient.name}</h3>`;
    patient.departments.forEach(dept => {
        const deptName = JSON.parse(localStorage.getItem('departments')).find(d => d.id == dept.deptId).name;
        const deptDiv = document.createElement('div');
        deptDiv.innerHTML = `<h4>${deptName}</h4>`;
        dept.tests.forEach(test => {
            const testName = JSON.parse(localStorage.getItem('tests'))[dept.deptId].find(t => t.id == test.id).name;
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = `Result for ${testName}`;
            input.value = test.result;
            input.dataset.testId = test.id;
            input.dataset.deptId = dept.deptId;
            deptDiv.appendChild(input);
        });
        div.appendChild(deptDiv);
    });
    const button = document.createElement('button');
    button.textContent = 'Save Results';
    button.onclick = () => saveResults(patientId, div);
    div.appendChild(button);
    document.getElementById('resultSection').appendChild(div);
}

function saveResults(patientId, div) {
    const patients = JSON.parse(localStorage.getItem('patients'));
    const patient = patients.find(p => p.id === patientId);
    div.querySelectorAll('input').forEach(input => {
        const deptId = input.dataset.deptId;
        const testId = input.dataset.testId;
        const dept = patient.departments.find(d => d.deptId == deptId);
        const test = dept.tests.find(t => t.id == testId);
        test.result = input.value;
    });
    patient.status = 'Results Entered';
    localStorage.setItem('patients', JSON.stringify(patients));
    alert('Results saved');
    loadPatients(localStorage.getItem('currentUser').role);
}

function checkReminders(role) {
    const remindersDiv = document.getElementById('reminders');
    const patients = JSON.parse(localStorage.getItem('patients'));
    const now = new Date(); // 01:08 PM PKT
    const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000); // 02:08 PM PKT
    console.log('Checking reminders at:', now.toLocaleString('en-US', { timeZone: 'Asia/Karachi' }));

    remindersDiv.innerHTML = '';
    patients.forEach(p => {
        const appointmentTime = new Date(p.appointment);
        if (appointmentTime > now && appointmentTime <= oneHourLater && p.status !== 'Completed') {
            const reminder = document.createElement('div');
            reminder.className = 'reminder';
            const formattedTime = appointmentTime.toLocaleString('en-US', { timeZone: 'Asia/Karachi', dateStyle: 'medium', timeStyle: 'short' });
            reminder.innerHTML = `
                <p>Appointment for ${p.name} at ${formattedTime} (ID: ${p.id})</p>
                <button onclick="acknowledgeReminder(${p.id})" class="btn btn-success btn-sm">Acknowledge</button>
                <button onclick="rescheduleAppointment(${p.id})" class="btn btn-warning btn-sm">Reschedule</button>
            `;
            remindersDiv.appendChild(reminder);
        }
    });

    setTimeout(() => checkReminders(role), 60000);
}

function acknowledgeReminder(patientId) {
    const patients = JSON.parse(localStorage.getItem('patients'));
    const patient = patients.find(p => p.id === patientId);
    if (patient) {
        patient.status = 'Acknowledged';
        localStorage.setItem('patients', JSON.stringify(patients));
        checkReminders(JSON.parse(localStorage.getItem('currentUser')).role);
        alert(`${patient.name}'s appointment acknowledged`);
    }
}

function rescheduleAppointment(patientId) {
    const patients = JSON.parse(localStorage.getItem('patients'));
    const patient = patients.find(p => p.id === patientId);
    if (patient) {
        const newTime = prompt(`Enter new appointment time for ${patient.name} (e.g., 2025-10-20T14:00):`, patient.appointment);
        if (newTime) {
            patient.appointment = newTime;
            localStorage.setItem('patients', JSON.stringify(patients));
            checkReminders(JSON.parse(localStorage.getItem('currentUser')).role);
            alert(`Appointment for ${patient.name} rescheduled to ${newTime}`);
        }
    }
}
