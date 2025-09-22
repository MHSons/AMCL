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
    deptDropdown?.addEventListener("change", function () {
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

    // ✅ On form submit → save patient to localStorage
    registerForm?.addEventListener("submit", function (e) {
        e.preventDefault();

        const patientData = {
            id: Date.now(),
            name: document.getElementById("patientName").value,
            age: document.getElementById("age").value,
            gender: document.getElementById("gender").value,
            department: deptDropdown.options[deptDropdown.selectedIndex].text,
            test: testDropdown.options[testDropdown.selectedIndex].text,
            results: []
        };

        let patients = JSON.parse(localStorage.getItem("patients")) || [];
        patients.push(patientData);
        localStorage.setItem("patients", JSON.stringify(patients));

        alert(`Patient Registered: ${patientData.name}`);
        window.location.href = "add_test_result.html";
    });
});
