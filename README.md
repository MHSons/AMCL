# AlphaMed Clinical Laboratory Management System

## Overview
This is a web-based laboratory management system for AlphaMed Clinical Laboratory. It includes features for patient registration, test management, result entry, and report generation with QR codes and PDF exports.

## Features
- Role-based access (Admin, MLT, Reception)
- Patient registration with appointment scheduling
- Test selection and result entry
- PDF reports with QR codes
- Appointment reminders
- Admin settings for departments, tests, and users

## Installation
1. Clone the repository: `git clone <your-repo-url>`
2. Open `index.html` in a web browser.
3. Ensure `logo.png` is in the root directory and its base64 is added to `script.js`.

## Usage
- Login with:
  - Admin: username `admin`, password `admin123`
  - MLT: username `mlt`, password `mlt123`
  - Reception: username `reception`, password `rec123`
- Register patients, enter results, or manage settings based on your role.

## Dependencies
- QRCode.js: For QR code generation
- jsPDF: For PDF generation
- CryptoJS: For password hashing

## License
[Add license if applicable, e.g., MIT]

## Contributors
- [Your Name]
