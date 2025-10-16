
/* Central script for Lab Website - handles login, user management, report generation, QR, WhatsApp link */
(function(){
  const whatsappNumber = "923018067880"; // +92 301 8067880
  // Update WhatsApp links on pages
  const waLinks = document.querySelectorAll('#waLink, #waFloat');
  waLinks.forEach(a=>{
    if(a) a.href = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent("Hello, I need assistance with lab services.");
  });

  // Simple user store in localStorage
  const defaultUsers = [
    {username:"admin", password:"admin123", role:"admin", name:"Admin User"},
    {username:"reception", password:"rec123", role:"reception", name:"Receptionist"},
    {username:"tech", password:"tech123", role:"technician", name:"Lab Tech"}
  ];
  function getUsers(){
    const raw = localStorage.getItem("lab_users");
    if(!raw){ localStorage.setItem("lab_users", JSON.stringify(defaultUsers)); return defaultUsers.slice(); }
    try { return JSON.parse(raw); } catch(e){ localStorage.setItem("lab_users", JSON.stringify(defaultUsers)); return defaultUsers.slice(); }
  }
  function saveUsers(u){ localStorage.setItem("lab_users", JSON.stringify(u)); }

  // If on login page
  const loginForm = document.getElementById("loginForm");
  if(loginForm){
    loginForm.addEventListener("submit", function(e){
      e.preventDefault();
      const u = document.getElementById("username").value.trim();
      const p = document.getElementById("password").value;
      const role = document.getElementById("role").value;
      const users = getUsers();
      const found = users.find(x=> x.username===u && x.password===p && x.role===role);
      if(found){
        // store session
        localStorage.setItem("lab_session", JSON.stringify({username:found.username, role:found.role, name:found.name, loggedAt: new Date().toISOString()}));
        // redirect to admin or reception based on role
        if(found.role==="admin") window.location.href = "admin.html";
        else if(found.role==="reception") window.location.href = "reception.html";
        else if(found.role==="technician") window.location.href = "technician.html";
        else window.location.href = "index.html";
      } else {
        alert("Invalid credentials or role. Use admin/admin123 for admin (change after first login).");
      }
    });
  }

  // Protect pages: require login
  const protectedPages = ["admin.html","reception.html","technician.html","manage_users.html","settings.html","add_test_result.html","report.html"];
  const current = window.location.pathname.split("/").pop();
  if(protectedPages.includes(current)){
    const sessionRaw = localStorage.getItem("lab_session");
    if(!sessionRaw){
      // Not logged in, redirect to login
      window.location.href = "login.html";
    } else {
      try{
        const session = JSON.parse(sessionRaw);
        // simple role check for admin pages
        if(current === "admin.html" || current === "manage_users.html" || current==="settings.html"){
          if(session.role !== "admin"){
            alert("Access denied. Admins only.");
            window.location.href = "login.html";
          }
        }
        // personalize page
        const el = document.getElementById("currentUser");
        if(el) el.textContent = session.name || session.username;
      }catch(e){
        window.location.href = "login.html";
      }
    }
  }

  // Manage Users page logic
  if(window.location.pathname.endsWith("manage_users.html")){
    const users = getUsers();
    const tbody = document.getElementById("usersTbody");
    function render(){
      const ulist = getUsers();
      tbody.innerHTML = "";
      ulist.forEach((u, idx)=>{
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${u.username}</td><td>${u.name||""}</td><td>${u.role}</td>
          <td><button data-idx="${idx}" class="edit">Edit</button> <button data-idx="${idx}" class="del">Delete</button></td>`;
        tbody.appendChild(tr);
      });
      Array.from(tbody.querySelectorAll(".del")).forEach(btn=>{
        btn.addEventListener("click", e=>{
          if(!confirm("Delete user?")) return;
          const idx = Number(btn.dataset.idx);
          const list = getUsers();
          list.splice(idx,1);
          saveUsers(list); render();
        });
      });
      Array.from(tbody.querySelectorAll(".edit")).forEach(btn=>{
        btn.addEventListener("click", e=>{
          const idx = Number(btn.dataset.idx);
          const list = getUsers();
          const u = list[idx];
          const newName = prompt("Full name:", u.name||"") || u.name;
          const newPass = prompt("New password (leave blank to keep):", "") || u.password;
          const newRole = prompt("Role (admin/reception/technician/doctor):", u.role) || u.role;
          u.name = newName; u.password = newPass; u.role = newRole;
          saveUsers(list); render();
        });
      });
    }
    document.getElementById("addUser").addEventListener("submit", function(e){
      e.preventDefault();
      const username = document.getElementById("newUsername").value.trim();
      const password = document.getElementById("newPassword").value;
      const role = document.getElementById("newRole").value;
      const name = document.getElementById("newName").value;
      const list = getUsers();
      if(list.find(x=>x.username===username)){ alert("Username exists"); return; }
      list.push({username, password, role, name});
      saveUsers(list);
      document.getElementById("addUser").reset();
      render();
    });
    render();
  }

  // Report page logic: read data from sessionStorage 'last_report'
  if(window.location.pathname.endsWith("report.html")){
    const raw = sessionStorage.getItem("last_report");
    let data = null;
    try{ data = raw ? JSON.parse(raw) : null; }catch(e){ data = null; }
    if(!data){
      document.getElementById("patientInfo").innerHTML = "<em>No report data found. Create report from 'Add Test Result' first.</em>";
    } else {
      document.getElementById("patientInfo").innerHTML = `<strong>Patient:</strong> ${data.patientName} &nbsp; | &nbsp; <strong>ID:</strong> ${data.patientId} &nbsp; | &nbsp; <strong>Date:</strong> ${data.date}`;
      document.getElementById("authName").textContent = data.technician || "";
      const tbody = document.querySelector("#resultsTable tbody");
      tbody.innerHTML = "";
      (data.results || []).forEach(r=>{
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${r.testName}</td><td>${r.value}</td><td>${r.units||""}</td><td>${r.range || ""}</td>`;
        tbody.appendChild(tr);
      });
      // generate QR with patient + report id
      const qrText = `Report:${data.reportId} Patient:${data.patientId} Name:${data.patientName}`;
      const qrArea = document.getElementById("qrArea");
      QRCode.toDataURL(qrText).then(url=>{
        qrArea.innerHTML = `<img src="${url}" style="width:96px;height:96px"><div style="font-size:0.75em">Scan to verify</div>`;
      });
    }
  }

  // Add Test Result page: auto ranges and save report to sessionStorage
  if(window.location.pathname.endsWith("add_test_result.html")){
    // provide sample tests and ranges
    const testsCatalog = [
      {id:"hb", name:"Hemoglobin", units:"g/dL", normalMin:13.5, normalMax:17.5},
      {id:"rbc", name:"RBC Count", units:"10^6/uL", normalMin:4.5, normalMax:6.0},
      {id:"wbc", name:"WBC Count", units:"/uL", normalMin:4000, normalMax:11000},
      {id:"plt", name:"Platelet Count", units:"/uL", normalMin:150000, normalMax:450000},
      {id:"glucose", name:"Glucose (Fasting)", units:"mg/dL", normalMin:70, normalMax:99}
    ];
    const sel = document.getElementById("testSelect");
    if(sel){
      testsCatalog.forEach(t=> sel.appendChild(new Option(t.name, t.id)));
      const resultsTbody = document.getElementById("resultsList");
      function addRowForTest(testId){
        const t = testsCatalog.find(x=>x.id===testId);
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${t.name}</td>
          <td><input class="value" placeholder="Result"></td>
          <td>${t.units}</td>
          <td>${t.normalMin} - ${t.normalMax}</td>
          <td><button class="remove">Remove</button></td>`;
        resultsTbody.appendChild(tr);
        tr.querySelector(".remove").addEventListener("click", ()=> tr.remove());
      }
      document.getElementById("addTestBtn").addEventListener("click", ()=>{
        addRowForTest(sel.value);
      });

      document.getElementById("saveReport").addEventListener("submit", function(e){
        e.preventDefault();
        const patientName = document.getElementById("patientName").value.trim();
        const patientId = document.getElementById("patientId").value.trim();
        const tech = (JSON.parse(localStorage.getItem("lab_session")||"{}")).name || "Unknown";
        const rows = Array.from(resultsTbody.querySelectorAll("tr"));
        const results = rows.map(r=>{
          const tname = r.children[0].textContent;
          const val = r.querySelector(".value").value;
          const units = r.children[2].textContent;
          const range = r.children[3].textContent;
          return {testName: tname, value: val, units, range};
        });
        const report = { reportId: "R"+Date.now(), patientName, patientId, date: new Date().toLocaleString(), technician: tech, results };
        sessionStorage.setItem("last_report", JSON.stringify(report));
        alert("Report saved. Opening report page.");
        window.open("report.html","_self");
      });
    }
  }

  // Simple logout link
  const logoutEl = document.getElementById("logout");
  if(logoutEl){
    logoutEl.addEventListener("click", function(e){
      e.preventDefault();
      localStorage.removeItem("lab_session");
      window.location.href = "login.html";
    });
  }

})();
