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

        // Clear previous test options
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

    // ✅ On form submit → temporary save / show data
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const patientData = {
            name: document.getElementById("patientName").value,
            age: document.getElementById("age").value,
            gender: document.getElementById("gender").value,
            department: deptDropdown.options[deptDropdown.selectedIndex].text,
            test: testDropdown.options[testDropdown.selectedIndex].text
        };

        console.log("Patient Registered:", patientData);
        alert(`Patient Registered:\nName: ${patientData.name}\nDepartment: ${patientData.department}\nTest: ${patientData.test}`);
        
        // Reset form
        registerForm.reset();
        testDropdown.innerHTML = '<option value="">-- Select Test --</option>';
    });
});
