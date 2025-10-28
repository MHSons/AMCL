document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('labForm');
    const reportList = document.getElementById('reportList');
    const modal = new bootstrap.Modal(document.getElementById('reportModal'));
    const reportContent = document.getElementById('reportContent');
    const qrcodeDiv = document.getElementById('qrcode');
    const printBtn = document.getElementById('printReport');
    const clearAll = document.getElementById('clearAll');

    let currentReport = null;

    // Load reports
    function loadReports() {
        reportList.innerHTML = '';
        const reports = JSON.parse(localStorage.getItem('alphaMedReports')) || [];
        reports.forEach((report, index) => {
            const div = document.createElement('div');
            div.className = 'card mb-2';
            div.innerHTML = `
                <div class="card-body d-flex justify-content-between align-items-center">
                    <div>
                        <strong>${report.patientName}</strong> - ${report.sampleId}
                        <br><small>${new Date(report.date).toLocaleString()}</small>
                    </div>
                    <button class="btn btn-sm btn-primary view-report" data-index="${index}">
                        View Report
                    </button>
                </div>
            `;
            reportList.appendChild(div);
        });

        // View button
        document.querySelectorAll('.view-report').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = e.target.dataset.index;
                showReport(reports[idx]);
            });
        });
    }

    // Save form
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const report = {
            patientName: document.getElementById('patientName').value,
            sampleId: document.getElementById('sampleId').value,
            result: document.getElementById('result').value,
            date: new Date().toISOString(),
            id: Date.now().toString()
        };

        const reports = JSON.parse(localStorage.getItem('alphaMedReports')) || [];
        reports.push(report);
        localStorage.setItem('alphaMedReports', JSON.stringify(reports));

        form.reset();
        loadReports();
        showReport(report); // Auto show after save
    });

    // Show report in modal
    function showReport(report) {
        currentReport = report;
        const reportUrl = `${window.location.origin}${window.location.pathname}?report=${report.id}`;

        reportContent.innerHTML = `
            <div class="report-content">
                <div class="text-center mb-4">
                    <h3>AlphaMed Clinical Laboratory</h3>
                    <p><em>Quality Assurance Through Advance Technology</em></p>
                </div>
                <hr>
                <table class="table table-bordered">
                    <tr><th>Patient Name</th><td>${report.patientName}</td></tr>
                    <tr><th>Sample ID</th><td>${report.sampleId}</td></tr>
                    <tr><th>Test Date</th><td>${new Date(report.date).toLocaleString()}</td></tr>
                    <tr><th>Test Result</th><td>${report.result.replace(/\n/g, '<br>')}</td></tr>
                </table>
                <p class="text-end mt-4"><strong>Authorized Signatory</strong></p>
            </div>
        `;

        // Clear old QR
        qrcodeDiv.innerHTML = '';
        new QRCode(qrcodeDiv, {
            text: reportUrl,
            width: 128,
            height: 128,
            colorDark: "#000",
            colorLight: "#fff"
        });

        modal.show();
    }

    // Print
    printBtn.addEventListener('click', () => {
        const printWindow = window.open('', '', 'height=700,width=800');
        printWindow.document.write('<html><head><title>Lab Report</title>');
        printWindow.document.write('<link rel="stylesheet" href="style.css">');
        printWindow.document.write('</head><body>');
        printWindow.document.write(document.querySelector('.report-paper').innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    });

    // Clear all
    clearAll.addEventListener('click', () => {
        if (confirm('Delete all reports?')) {
            localStorage.removeItem('alphaMedReports');
            loadReports();
        }
    });

    // Load on start
    loadReports();

    // Check URL for report
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('report')) {
        const reports = JSON.parse(localStorage.getItem('alphaMedReports')) || [];
        const report = reports.find(r => r.id === urlParams.get('report'));
        if (report) showReport(report);
    }
});
