// script.js - AlphaMed Clinical Laboratory

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('labForm');
    const reportList = document.getElementById('reportList');
    const modal = new bootstrap.Modal(document.getElementById('reportModal'));
    const reportContent = document.getElementById('reportContent');
    const qrcodeDiv = document.getElementById('qrcode');
    const printBtn = document.getElementById('printReport');
    const clearAll = document.getElementById('clearAll');

    let currentReport = null;

    // Load all saved reports
    function loadReports() {
        reportList.innerHTML = '';
        const reports = JSON.parse(localStorage.getItem('alphaMedReports')) || [];
        reports.forEach((report, index) => {
            const div = document.createElement('div');
            div.className = 'card mb-2 shadow-sm';
            div.innerHTML = `
                <div class="card-body d-flex justify-content-between align-items-center">
                    <div>
                        <strong>${escapeHtml(report.patientName)}</strong> 
                        <span class="text-muted">— ${escapeHtml(report.sampleId)}</span>
                        <br>
                        <small class="text-secondary">${new Date(report.date).toLocaleString()}</small>
                    </div>
                    <button class="btn btn-sm btn-primary view-report" data-index="${index}">
                        View Report
                    </button>
                </div>
            `;
            reportList.appendChild(div);
        });

        // Attach view buttons
        document.querySelectorAll('.view-report').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = e.target.dataset.index;
                showReport(reports[idx]);
            });
        });
    }

    // Save new report
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const report = {
            patientName: document.getElementById('patientName').value.trim(),
            sampleId: document.getElementById('sampleId').value.trim(),
            result: document.getElementById('result').value.trim(),
            date: new Date().toISOString(),
            id: Date.now().toString()
        };

        const reports = JSON.parse(localStorage.getItem('alphaMedReports')) || [];
        reports.push(report);
        localStorage.setItem('alphaMedReports', JSON.stringify(reports));

        form.reset();
        loadReports();
        showReport(report); // Auto open report after save
    });

    // Show report in modal with QR code
    function showReport(report) {
        currentReport = report;
        const reportUrl = `${window.location.origin}${window.location.pathname}?report=${report.id}`;

        reportContent.innerHTML = `
            <div class="report-content">
                <div class="text-center mb-4">
                    <h3 class="mb-0">AlphaMed Clinical Laboratory</h3>
                    <p class="text-muted"><em>Quality Assurance Through Advance Technology</em></p>
                </div>
                <hr>
                <table class="table table-bordered table-sm">
                    <tr><th width="30%">Patient Name</th><td>${escapeHtml(report.patientName)}</td></tr>
                    <tr><th>Sample ID</th><td>${escapeHtml(report.sampleId)}</td></tr>
                    <tr><th>Test Date</th><td>${new Date(report.date).toLocaleString()}</td></tr>
                    <tr><th>Test Result</th><td>${escapeHtml(report.result).replace(/\n/g, '<br>')}</td></tr>
                </table>
                <div class="text-end mt-5">
                    <p class="mb-0"><strong>Authorized Signatory</strong></p>
                    <p class="text-muted small">Dr. AlphaMed Lab</p>
                </div>
            </div>
        `;

        // Generate QR Code
        qrcodeDiv.innerHTML = '';
        new QRCode(qrcodeDiv, {
            text: reportUrl,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

        modal.show();
    }

    // Print Report
    printBtn.addEventListener('click', () => {
        const printWin = window.open('', '', 'height=700,width=900');
        printWin.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Lab Report - ${currentReport.sampleId}</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
                <style>
                    body { font-family: 'Segoe UI', sans-serif; padding: 20px; background: #f9f9f9; }
                    .report-paper { 
                        background: white; 
                        padding: 40px; 
                        border: 1px solid #ddd; 
                        position: relative; 
                        min-height: 800px;
                        background-image: url('logo.png');
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: 220px;
                        opacity: 0.95;
                    }
                    .report-paper::before {
                        content: "";
                        position: absolute;
                        top: 0; left: 0; right: 0; bottom: 0;
                        background: url('logo.png') center/200px no-repeat;
                        opacity: 0.07;
                        z-index: 0;
                    }
                    .report-content { position: relative; z-index: 1; }
                    @page { margin: 0.5in; }
                    @media print {
                        body, .report-paper { background: white !important; }
                    }
                </style>
            </head>
            <body>
                <div class="report-paper">
                    ${reportContent.innerHTML}
                    <div class="text-center mt-4">
                        ${qrcodeDiv.innerHTML}
                    </div>
                </div>
            </body>
            </html>
        `);
        printWin.document.close();
        setTimeout(() => {
            printWin.focus();
            printWin.print();
            printWin.close();
        }, 500);
    });

    // Clear all reports
    clearAll.addEventListener('click', () => => {
        if (confirm('Are you sure? All reports will be deleted permanently.')) {
            localStorage.removeItem('alphaMedReports');
            loadReports();
        }
    });

    // Helper: Escape HTML to prevent XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Load reports on start
    loadReports();

    // Auto-open report if URL has ?report=id
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('report')) {
        const reports = JSON.parse(localStorage.getItem('alphaMedReports')) || [];
        const report = reports.find(r => r.id === urlParams.get('report'));
        if (report) showReport(report);
    }
});
