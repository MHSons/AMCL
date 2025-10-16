document.addEventListener("DOMContentLoaded", () => {

  // Cache DOM elements
  const deptDropdown = document.getElementById("department");
  const testDropdown = document.getElementById("test");
  const registerForm = document.getElementById("registerForm");

  // ✅ Load departments dynamically (if available)
  if (Array.isArray(window.departmentsArray)) {
    departmentsArray.forEach(dept => {
      const option = document.createElement("option");
      option.value = dept.id;
      option.textContent = dept.name;
      deptDropdown.appendChild(option);
    });
  } else {
    console.warn("⚠️ departmentsArray is not defined or invalid.");
  }

  // ✅ Handle department change → show relevant tests
  deptDropdown.addEventListener("change", () => {
    testDropdown.innerHTML = '<option value="">-- Select Test(s) --</option>';

    // Get all selected department IDs
    const selectedDepts = Array.from(deptDropdown.selectedOptions).map(opt => opt.value);

    selectedDepts.forEach(deptId => {
      const selectedDept = departmentsArray.find(d => d.id === deptId);
      if (selectedDept?.tests?.length) {
        selectedDept.tests.forEach(test => {
          const option = document.createElement("option");
          option.value = test.id;
          option.textContent = `${test.name} (${selectedDept.name})`; // clearer labeling
          testDropdown.appendChild(option);
        });
      }
    });
  });

  // ✅ Handle form submission
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validation — required fields
    const sampleNo = document.getElementById("sampleNo").value.trim();
    const name = document.getElementById("patientName").value.trim();
    const age = document.getElementById("age").value.trim();
    const gender = document.getElementById("gender").value;

    if (!sampleNo || !name || !age || !gender) {
      alert("⚠️ Please fill all required fields before submitting.");
      return;
    }

    // Collect selected departments
    const selectedDepartments = Array.from(deptDropdown.selectedOptions)
      .map(opt => {
        const dept = departmentsArray.find(d => d.id === opt.value);
        return dept ? dept.name : "";
      })
      .filter(Boolean);

    // Collect selected tests
    const selectedTests = Array.from(testDropdown.selectedOptions)
      .map(opt => {
        for (const dept of departmentsArray) {
          const test = dept.tests.find(t => t.id === opt.value);
          if (test) {
            return {
              id: test.id,
              name: test.name,
              parameter: test.parameter,
              unit: test.unit,
              normalMin: test.normalMin,
              normalMax: test.normalMax
            };
          }
        }
      })
      .filter(Boolean);

    if (selectedTests.length === 0) {
      alert("⚠️ Please select at least one test.");
      return;
    }

    // ✅ Construct patient data object
    const patientData = {
      id: Date.now(),
      mrn: "MRN-" + Math.floor(Math.random() * 100000),
      sampleNo,
      name,
      age,
      gender,
      departments: selectedDepartments,
      tests: selectedTests,
      registeredAt: new Date().toISOString()
    };

    // ✅ Save in pendingTests
    const pendingTests = JSON.parse(localStorage.getItem("pendingTests")) || [];
    pendingTests.push(patientData);
    localStorage.setItem("pendingTests", JSON.stringify(pendingTests));

    // ✅ Save for registration slip
    localStorage.setItem("lastRegisteredPatient", JSON.stringify(patientData));

    // ✅ Confirmation + redirect
    alert("✅ Patient registered successfully!");
    window.location.href = "registration-slip.html";
  });
});
