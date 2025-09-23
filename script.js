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

    // ✅ On department change → load tests
    deptDropdown.addEventListener("change", function () {
        let selectedDept = departmentsArray.find(d => d.id === deptDropdown.value);
        testDropdown.innerHTML = '<option value="">-- Select Test --</option>';
        if (selectedDept) {
            selectedDept.tests.forEach(test => {
                let option = document.createElement("option");
                option.value = test.id;
                option.textContent = test.name;
                testDropdown.appendChild(option);
            });
        }
    });

    // ✅ On form submit → save patient to pendingTests
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const selectedDept = departmentsArray.find(d => d.id === deptDropdown.value);
        const selectedTest = selectedDept.tests.find(t => t.id === testDropdown.value);

        const patientData = {
            id: Date.now(),
            mrn: "MRN-" + Math.floor(Math.random() * 100000),
            sampleNo: document.getElementById("sampleNo").value,
            name: document.getElementById("patientName").value,
            age: document.getElementById("age").value,
            gender: document.getElementById("gender").value,
            departments: [selectedDept.name],
            tests: [{
                id: selectedTest.id,
                name: selectedTest.name,
                parameter: selectedTest.parameter,
                unit: selectedTest.unit,
                normalMin: selectedTest.normalMin,
                normalMax: selectedTest.normalMax
            }]
        };

        // ✅ Save only in pendingTests
        let pendingTests = JSON.parse(localStorage.getItem("pendingTests")) || [];
        pendingTests.push(patientData);
        localStorage.setItem("pendingTests", JSON.stringify(pendingTests));

        // ✅ Save for slip
        localStorage.setItem("lastRegisteredPatient", JSON.stringify(patientData));

        alert("Patient registered successfully ✅");
        window.location.href = "registration-slip.html";
    });
});
