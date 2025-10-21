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
        testDropdown.innerHTML = '<option value="">-- Select Test(s) --</option>';

        // Saare selected departments nikaalna
        let selectedDepts = Array.from(deptDropdown.selectedOptions).map(opt => opt.value);

        // Un departments ke saare tests show karna
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

    // ✅ On form submit → save patient with multiple departments & tests
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Saare departments
        let selectedDepartments = Array.from(deptDropdown.selectedOptions).map(opt => {
            let dept = departmentsArray.find(d => d.id === opt.value);
            return dept ? dept.name : "";
        }).filter(Boolean);

        // Saare tests
        let selectedTests = Array.from(testDropdown.selectedOptions).map(opt => {
            for (let dept of departmentsArray) {
                let test = dept.tests.find(t => t.id === opt.value);
                if (test) return {
                    id: test.id,
                    name: test.name,
                    parameter: test.parameter,
                    unit: test.unit,
                    normalMin: test.normalMin,
                    normalMax: test.normalMax
                };
            }
        }).filter(Boolean);

        const patientData = {
            id: Date.now(),
            mrn: "MRN-" + Math.floor(Math.random() * 100000),
            sampleNo: document.getElementById("sampleNo").value,
            name: document.getElementById("patientName").value,
            age: document.getElementById("age").value,
            gender: document.getElementById("gender").value,
            departments: selectedDepartments,
            tests: selectedTests
        };

        // ✅ Save in pendingTests
        let pendingTests = JSON.parse(localStorage.getItem("pendingTests")) || [];
        pendingTests.push(patientData);
        localStorage.setItem("pendingTests", JSON.stringify(pendingTests));

        // ✅ Save for slip
        localStorage.setItem("lastRegisteredPatient", JSON.stringify(patientData));

        alert("Patient registered successfully ✅");
        window.location.href = "registration-slip.html";
    });
});
