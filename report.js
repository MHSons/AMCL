// report.js
import config from './config.js';

export function generateRegistrationSlip(patient) {
    const settings = JSON.parse(localStorage.getItem('labSettings') || '{}');
    const qrDiv = document.createElement('div');
    new QRCode(qrDiv, {
        text: JSON.stringify(patient),
        width: 128,
        height: 128,
        colorDark: '#000000',
        colorLight: '#ffffff'
    });
    const qrCanvas = qrDiv.querySelector('canvas');
    const currentDateTime = new Date().toLocaleString('en-US', { 
        timeZone: config.timeZone, 
        dateStyle: 'long', 
        timeStyle: 'short' 
    });

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.addImage(settings.logo || config.defaultLogoBase64, 'PNG', 10, 10, 50, 50);
    doc.setFontSize(12);
    doc.text(settings.name || config.appName, 70, 20);
    doc.text(settings.tagline || 'Quality Assurance Through Advanced Technology', 70, 30);
    doc.text(`CLIA #${settings.cliaNumber || 'N/A'}`, 70, 40);
    doc.text(settings.hipaaNotice || 'This report contains PHI under HIPAA.', 10, 50, { maxWidth: 190 });
    doc.text(`Generated on: ${currentDateTime}`, 10, 60);
    doc.text(`Patient Name: ${patient.name}`, 10, 70);
    doc.text(`Age: ${patient.age}, Gender: ${patient.gender}`, 10, 80);
    doc.text(`Address: ${patient.address}`, 10, 90);
    doc.text(`Phone: ${patient.phone}`, 10, 100);
    doc.text(`Registered: ${new Date(patient.registeredDate).toLocaleString('en-US', { timeZone: config.timeZone, dateStyle: 'medium' })}`, 10, 110);
    doc.text(`Appointment: ${new Date(patient.appointment).toLocaleString('en-US', { timeZone: config.timeZone, dateStyle: 'medium', timeStyle: 'short' })}`, 10, 120);

    let yOffset = 140;
    patient.departments.forEach((dept, index) => {
        const deptName = JSON.parse(localStorage.getItem('departments') || '[]').find(d => d.id == dept.deptId)?.name || 'Unknown';
        doc.text(deptName, 10, yOffset);
        dept.tests.forEach((t, testIndex) => {
            const testName = JSON.parse(localStorage.getItem('tests') || '{}')[dept.deptId]?.find(test => test.id == t.id)?.name || 'Unknown';
            doc.text(`- ${testName}`, 15, yOffset + 10 + testIndex * 10);
        });
        yOffset += (dept.tests.length + 1) * 10;
    });

    doc.addImage(qrCanvas.toDataURL('image/png'), 'PNG', 150, 10, 50, 50);
    doc.save(`registration_slip_${patient.id}.pdf`);
}

export function viewReport(patientId) {
    const patient = JSON.parse(localStorage.getItem('patients') || '[]').find(p => p.id === patientId);
    if (!patient) return;

    const settings = JSON.parse(localStorage.getItem('labSettings') || '{}');
    const currentDateTime = new Date().toLocaleString('en-US', { 
        timeZone: config.timeZone, 
        dateStyle: 'long', 
        timeStyle: 'short' 
    });
    const appointmentTime = new Date(patient.appointment).toLocaleString('en-US', { 
        timeZone: config.timeZone, 
        dateStyle: 'medium', 
        timeStyle: 'short' 
    });

    const reportWindow = window.open('', '_blank');
    reportWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Patient Report - ${patient.name}</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .watermark { position: absolute; opacity: 0.1; z-index: -1; }
                table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                th { background-color: #f2f2f2; }
            </style>
        </head>
        <body>
            <div style="position: relative;">
                <img src="${settings.logo || config.defaultLogoBase64}" alt="Logo" class="watermark" style="width: 200px; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                <h1>${settings.name || config.appName}</h1>
                <p>${settings.tagline || 'Quality Assurance Through Advanced Technology'}</p>
                <p>CLIA #${settings.cliaNumber || 'N/A'} | CAP #${settings.capNumber || 'N/A'}</p>
                <p>${settings.hipaaNotice || 'This report contains PHI under HIPAA.'}</p>
                <p>Generated on: ${currentDateTime}</p>
                <h2>Patient Report - ID: ${patient.id}</h2>
                <p>Name: ${patient.name} | Age: ${patient.age} | Gender: ${patient.gender}</p>
                <p>Address: ${patient.address} | Phone: ${patient.phone}</p>
                <p>Registered: ${new Date(patient.registeredDate).toLocaleString('en-US', { timeZone: config.timeZone, dateStyle: 'medium' })}</p>
                <p>Appointment: ${appointmentTime} | Status: ${patient.status}</p>
                <h3>Results</h3>
    `);

    patient.departments.forEach(dept => {
        const deptName = JSON.parse(localStorage.getItem('departments') || '[]').find(d => d.id == dept.deptId)?.name || 'Unknown';
        reportWindow.document.write(`<h4>${deptName}</h4><table><thead><tr><th>Test</th><th>Result</th><th>Normal Male</th><th>Normal Female</th></tr></thead><tbody>`);
        dept.tests.forEach(t => {
            const test = JSON.parse(localStorage.getItem('tests') || '{}')[dept.deptId]?.find(test => test.id == t.id) || { name: 'Unknown', normalMale: 'N/A', normalFemale: 'N/A' };
            reportWindow.document.write(`<tr><td>${test.name}</td><td>${t.result || 'Pending'}</td><td>${test.normalMale}</td><td>${test.normalFemale}</td></tr>`);
        });
        reportWindow.document.write(`</tbody></table>`);
    });

    reportWindow.document.write(`
                <div id="qr" style="margin-top: 20px;"></div>
            </div>
        </body>
        </html>
    `);
    new QRCode(reportWindow.document.getElementById('qr'), JSON.stringify(patient));
    reportWindow.print();
    reportWindow.document.close();
}
