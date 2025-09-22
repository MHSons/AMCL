document.addEventListener("DOMContentLoaded", function () {
    const deptDropdown = document.getElementById("department");
    const testDropdown = document.getElementById("test");
    const registerForm = document.getElementById("registerForm");

    // ✅ Load departments dynamically
    if (typeof departmentsArray !== "undefined" && Array.isArray(departmentsArray)) {
        departmentsArray.forEach(dept => {
            let option = document.createElement("option");
            option.value = dept.id;
            option.textContent = dept.name;
            deptDropdown.appendChild(option);
        });
    }

    // ✅ On department change → load tests (multi)
    deptDropdown?.addEventListener("change", function () {
        testDropdown.innerHTML = '<option value="">-- Select Test --</option>';

        let selectedDepts = Array.from(deptDropdown.selectedOptions).map(opt => opt.value);

        selectedDepts.forEach(deptId => {
            let dept = departmentsArray.find(d => d.id === deptId);
            if (dept) {
                dept.tests.forEach(test => {
                    let option = document.createElement("option");
                    option.value = test.id;
                    option.textContent = test.name;
                    testDropdown.appendChild(option);
                });
            }
        });
    });

    // ✅ On form submit → save patient to localStorage
    registerForm?.addEventListener("submit", function (e) {
        e.preventDefault();

        const mrn = "MRN-" + Date.now();

        let selectedDepts = Array.from(deptDropdown.selectedOptions).map(opt => opt.text);
        let selectedTests = Array.from(testDropdown.selectedOptions).map(opt => opt.text);

        const patientData = {
            id: Date.now(),
            mrn: mrn,
            name: document.getElementById("patientName").value,
            age: document.getElementById("age").value,
            gender: document.getElementById("gender").value,
            departments: selectedDepts,
            tests: selectedTests,
            results: []
        };

        let patients = JSON.parse(localStorage.getItem("patients")) || [];
        patients.push(patientData);
        localStorage.setItem("patients", JSON.stringify(patients));

        localStorage.setItem("lastRegisteredPatient", JSON.stringify(patientData));

        window.location.href = "registration-slip.html";
    });
});
