// report.js
export function generateRegistrationSlip(patient) {
    const settings = JSON.parse(localStorage.getItem('labSettings'));
    const qrDiv = document.createElement('div');
    new QRCode(qrDiv, {
        text: JSON.stringify(patient),
        width: 128,
        height: 128
    });
    const qrCanvas = qrDiv.querySelector('canvas');
    const currentDateTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi', dateStyle: 'long', timeStyle: 'short' });

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.addImage(settings.logo, 'PNG', 10, 10, 50, 50);
    doc.text(settings.name, 70, 20);
    doc.text(settings.tagline, 70, 30);
    doc.text(`CLIA #${settings.cliaNumber}`, 70, 40);
    doc.text(settings.hipaaNotice, 10, 50, { maxWidth: 190 });
    doc.text(`Generated on: ${currentDateTime}`, 10, 60);
    doc.text(`Patient Name: ${patient.name}`, 10, 70);
    doc.text(`Age: ${patient.age}, Gender: ${patient.gender}`, 10, 80);
    doc.text(`Address: ${patient.address}`, 10, 90);
    doc.text(`Phone: ${patient.phone}`, 10, 100);
    doc.text(`Registered: ${patient.registeredDate}`, 10, 110);
    doc.text(`Appointment: ${new Date(patient.appointment).toLocaleString('en-US', { timeZone: 'Asia/Karachi', dateStyle: 'medium', timeStyle: 'short' })}`, 10, 120);
    patient.departments.forEach((dept, index) => {
        const deptName = JSON.parse(localStorage.getItem('departments')).find(d => d.id == dept.deptId).name;
        doc.text(deptName, 10, 140 + index * 20);
        dept.tests.forEach(t => {
            const testName = JSON.parse(localStorage.getItem('tests'))[dept.deptId].find(test => test.id == t.id).name;
            doc.text(`- ${testName}`, 15, 150 + index * 20);
        });
    });
    doc.addImage(qrCanvas.toDataURL('image/png'), 'PNG', 150, 10, 50, 50);
    doc.save(`registration_slip_${patient.id}.pdf`);
}

export function viewReport(patientId) {
    const patient = JSON.parse(localStorage.getItem('patients')).find(p => p.id === patientId);
    const settings = JSON.parse(localStorage.getItem('labSettings'));
    const currentDateTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi', dateStyle: 'long', timeStyle: 'short' });
    const appointmentTime = new Date(patient.appointment).toLocaleString('en-US', { timeZone: 'Asia/Karachi', dateStyle: 'medium', timeStyle: 'short' });
    const reportWindow = window.open('', '_blank');
    let html = `
        <div style="position:relative;">
            <div class="report-watermark"></div>
            <img src="${settings.logo}" style="width:100px;">
            <h1>${settings.name}</h1>
            <p>${settings.tagline}</p>
            <p>CLIA #${settings.cliaNumber} | CAP #${settings.capNumber}</p>
            <p>${settings.hipaaNotice}</p>
            <p>Generated on: ${currentDateTime}</p>
            <h2>Patient Report - ID: ${patient.id}</h2>
            <p>Name: ${patient.name} | Age: ${patient.age} | Gender: ${patient.gender}</p>
            <p>Address: ${patient.address} | Phone: ${patient.phone}</p>
            <p>Registered: ${patient.registeredDate}</p>
            <p>Appointment: ${appointmentTime} | Status: ${patient.status}</p>
            <h3>Results</h3>
    `;
    patient.departments.forEach(dept => {
        const deptName = JSON.parse(localStorage.getItem('departments')).find(d => d.id == dept.deptId).name;
        html += `<h4>${deptName}</h4><table><thead><tr><th>Test</th><th>Result</th><th>Normal Male</th><th>Normal Female</th></tr></thead><tbody>`;
        dept.tests.forEach(t => {
            const test = JSON.parse(localStorage.getItem('tests'))[dept.deptId].find(test => test.id == t.id);
            html += `<tr><td>${test.name}</td><td>${t.result || 'Pending'}</td><td>${test.normalMale}</td><td>${test.normalFemale}</td></tr>`;
        });
        html += `</tbody></table>`;
    });
    html += `<div id="qr"></div></div>`;
    reportWindow.document.body.innerHTML = html;
    new QRCode(reportWindow.document.getElementById('qr'), JSON.stringify(patient));
    reportWindow.print();
}
