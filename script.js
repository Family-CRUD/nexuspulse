document.addEventListener('DOMContentLoaded', function () {
    // patient-records page
    const cancelButton = document.querySelector('.cancel-button');
    if (cancelButton) {
        cancelButton.addEventListener('click', () => {
            window.location.href = '../html/patient-records.html';
        });
    }

    const viewButtons = document.querySelectorAll('.view');
    viewButtons.forEach((button) => {
        button.addEventListener('click', () => {
            window.location.href = '../html/view-patient.html';
        });
    });

    const backButton = document.querySelector('.back-icon');
    if (backButton) {
        backButton.addEventListener('click', () => {
            window.location.href = '../html/patient-records.html';
        });
    }

    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('click', () => {
            window.location.href = '../html/login.html';
        });
    }

    const dashboard = document.querySelector('.dashboard');
    if (dashboard) {
        dashboard.addEventListener('click', () => {
            window.location.href = '../html/dashboard.html';
        });
    }

    const records = document.querySelector('.records');
    if (records) {
        records.addEventListener('click', () => {
            window.location.href = '../html/patient-records.html';
        });
    }

    // Login page
    const loginButton = document.querySelector('.login-button');
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            window.location.href = '../html/dashboard.html';
        });
    }

    // Landing page
    const connectButton = document.querySelector('.connect-button');
    if (connectButton) {
        connectButton.addEventListener('click', () => {
            window.location.href = '../html/register.html';
        });
    }

    // View patient page
    const addPatientButton = document.querySelector('.add-patient-button');
    if (addPatientButton) {
        addPatientButton.addEventListener('click', () => {
            window.location.href = '../html/add-new-patient.html';
        });
    }
});
