document.addEventListener("DOMContentLoaded", function () {
  const deptDropdown = document.getElementById("department");
  const testDropdown = document.getElementById("test");
  const registerForm = document.getElementById("registerForm");
  const messageDiv = document.createElement("div");
  messageDiv.id = "message";
  messageDiv.className = "message";
  registerForm.prepend(messageDiv);

  // Load departments dynamically
  if (!departmentsArray || !Array.isArray(departmentsArray)) {
    showMessage("Error: Department data not available!");
    return;
  }

  departmentsArray.forEach(dept => {
    let option = document.createElement("option");
    option.value = dept.id;
    option.textContent = dept.name;
    deptDropdown.appendChild(option);
  });

  // On department change → load tests
  deptDropdown.addEventListener("change", function () {
    testDropdown.innerHTML = '<option value="">-- Select Test(s) --</option>';
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

  // On form submit → save patient with multiple departments & tests
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let selectedDepartments = Array.from(deptDropdown.selectedOptions).map(opt => {
      let dept = departmentsArray.find(d => d.id === opt.value);
      return dept ? dept.name : "";
    }).filter(Boolean);

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

    // Validation
    if (!selectedDepartments.length || !selectedTests.length) {
      showMessage("Please select at least one department and test!");
      return;
    }

    const patientData = {
      id: Date.now(),
      mrn: "MRN-" + Date.now() + Math.floor(Math.random() * 1000), // Improved MRN
      sampleNo: document.getElementById("sampleNo").value.trim(),
      name: document.getElementById("patientName").value.trim(),
      age: document.getElementById("age").value.trim(),
      gender: document.getElementById("gender").value,
      departments: selectedDepartments,
      tests: selectedTests,
      labName: JSON.parse(localStorage.getItem("labSettings") || "{}").labName || "Unknown Lab"
    };

    // Additional validation
    if (!patientData.sampleNo || !patientData.name) {
      showMessage("Please fill in all required fields!");
      return;
    }
    if (!/^\d+$/.test(patientData.age) || patientData.age <= 0) {
      showMessage("Please enter a valid age!");
      return;
    }

    try {
      // Save in pendingTests
      let pendingTests = JSON.parse(localStorage.getItem("pendingTests") || "[]");
      pendingTests.push(patientData);
      localStorage.setItem("pendingTests", JSON.stringify(pendingTests));

      // Save for slip
      localStorage.setItem("lastRegisteredPatient", JSON.stringify(patientData));

      showMessage("Patient registered successfully!", false);
      registerForm.reset();
      testDropdown.innerHTML = '<option value="">-- Select Test(s) --</option>';
      setTimeout(() => window.location.href = "registration-slip.html", 1000);
    } catch (e) {
      showMessage("Error saving patient data!");
    }
  });

  function showMessage(text, isError = true) {
    messageDiv.style.color = isError ? "red" : "green";
    messageDiv.textContent = text;
    messageDiv.setAttribute("aria-live", "polite");
    setTimeout(() => messageDiv.textContent = "", 3000);
  }
});
