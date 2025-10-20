// config.js
const config = {
    appName: 'AlphaMed Clinical Laboratory',
    appVersion: '1.0.0',
    timeZone: 'Asia/Karachi', // PKT for Pakistan
    apiUrl: '', // If backend is added, e.g., 'https://api.alphamedlab.com'
    defaultLogoBase64: 'data:image/png;base64,[BASE64_LOGO_HERE]', // Replace with actual base64 of logo.png
    maxPatients: 1000, // Limit for localStorage performance
    hipaaCompliant: true // Flag for compliance checks
};

export default config;
