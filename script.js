document.addEventListener("DOMContentLoaded", function () {
    const deptDropdown = document.getElementById("department");
    const testDropdown = document.getElementById("test");
    const registerForm = document.getElementById("registerForm");

    // ✅ Load departments
    if (typeof departmentsArray !== "undefined" && Array.isArray(departmentsArray)) {
        departmentsArray.forEach(dept => {
            let option = document.createElement("option");
            option.value = dept.id;
            option.textContent = dept.name;
            deptDropdown?.appendChild(option);
        });
    }

    // ✅ Department change → load tests
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

    // ✅ Register patient
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

        // ✅ Save into patients list
        let patients = JSON.parse(localStorage.getItem("patients")) || [];
        patients.push(patientData);
        localStorage.setItem("patients", JSON.stringify(patients));

        // ✅ For slip
        localStorage.setItem("lastRegisteredPatient", JSON.stringify(patientData));

        alert("Patient registered successfully!");
        window.location.href = "registration-slip.html"; 
    });
});
