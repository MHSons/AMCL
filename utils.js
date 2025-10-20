// utils.js
function sendEmailNotification(patientName, appointmentTime) {
    // Simulated email notification (requires backend integration in real scenario)
    const emailData = {
        to: "admin@alphamedlab.com",
        subject: `Appointment Reminder for ${patientName}`,
        body: `Dear Admin,\n\nAn appointment is scheduled for ${patientName} at ${new Date(appointmentTime).toLocaleString('en-US', { timeZone: 'Asia/Karachi' })}. Please ensure preparation.\n\nRegards,\nAlphaMed System`
    };
    console.log("Email Notification Sent:", emailData);
    // In a real app, use an API like EmailJS or backend service here
    alert(`Notification sent for ${patientName}'s appointment.`);
}

function validateFormData(name, age, phone) {
    const nameRegex = /^[a-zA-Z\s]+$/;
    const ageRegex = /^(?:[1-9]|[1-9][0-9]|1[0-1][0-9]|120)$/; // 1-120 years
    const phoneRegex = /^\+?[\d\s-]{10,15}$/; // Basic phone validation

    if (!nameRegex.test(name)) return "Invalid name (letters and spaces only).";
    if (!ageRegex.test(age)) return "Invalid age (1-120 years).";
    if (!phoneRegex.test(phone)) return "Invalid phone number.";

    return null; // No errors
}

function generatePatientID() {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 5);
    return `PAT-${timestamp}-${random}`.toUpperCase();
}

function exportPatientData(patient) {
    const dataStr = `Patient ID: ${patient.id}\nName: ${patient.name}\nAge: ${patient.age}\nGender: ${patient.gender}\nAddress: ${patient.address}\nPhone: ${patient.phone}\nAppointment: ${patient.appointment}\nStatus: ${patient.status}\n`;
    const blob = new Blob([dataStr], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${patient.id}_data.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
}

export { sendEmailNotification, validateFormData, generatePatientID, exportPatientData };
