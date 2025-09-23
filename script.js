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
        testDropdown.innerHTML = '<option value="">-- Select Test --</option>';
        let selectedDepts = Array.from(deptDropdown.selectedOptions).map(opt => opt.value);

        selectedDepts.forEach(deptId => {
            let selectedDept = departmentsArray.find(d => d.id === deptId);
            if (selectedDept) {
                selectedDept.tests.forEach(test => {
                    let option = document.createElement("option");
                    option.value = test.id;
                    option.textContent = test.name;
                    testDropdown.appendChild(option);
                });
            }
        });
    });

    // ✅ On form submit → save patient
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const patientData = {
            id: Date.now(),
            name: document.getElementById("patientName").value,
            age: document.getElementById("age").value,
            gender: document.getElementById("gender").value,
            sampleNo: document.getElementById("sampleNo").value,
            departments: Array.from(deptDropdown.selectedOptions).map(opt => opt.text),
            tests: Array.from(testDropdown.selectedOptions).map(opt => ({
                id: opt.value,
                name: opt.text
            })),
            mrn: "MRN-" + Date.now(),
            date: new Date().toLocaleString()
        };

        let patients = JSON.parse(localStorage.getItem("patients")) || [];
        patients.push(patientData);
        localStorage.setItem("patients", JSON.stringify(patients));

        // ✅ Auto open slip
        window.location.href = `registration-slip.html?id=${patientData.id}`;
    });
});
