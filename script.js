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

    const logoutButton = document.querySelector('.logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            window.location.href = '../html/index.html';
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

    const sidebarItems = document.querySelectorAll(".items > div, .bottom > div");

    sidebarItems.forEach(item => {
        item.addEventListener("mouseover", function() {
            const img = item.querySelector("img");
            if (img) {
                const src = img.getAttribute("src");
                img.setAttribute("src", src.replace(".png", "-green.png"));
            }
        });

        item.addEventListener("mouseout", function() {
            const img = item.querySelector("img");
            if (img) {
                const src = img.getAttribute("src");
                img.setAttribute("src", src.replace("-green.png", ".png"));
            }
        });
        
    });

    var editButton = document.getElementById('edit-button');
    if (editButton) {
        var textContents = document.querySelectorAll('.text-content');
        var isEditing = false;
    
        editButton.addEventListener('click', function() {
            isEditing = !isEditing;
    
            if (isEditing) {
                editButton.src = '../images/save.png';
                textContents.forEach(function(element) {
                    element.setAttribute('contenteditable', 'true');
                });
            } else {
                editButton.src = '../images/edit.png';
                textContents.forEach(function(element) {
                    element.setAttribute('contenteditable', 'false');
                });
            }
    });
    }
   

});


document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.nav-bar a');

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default behavior of the link

            var targetId = this.getAttribute('href'); // Get the target section ID from the href attribute
            var targetSection = document.querySelector(targetId); // Find the corresponding section

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section smoothly
                targetSection.style.animation = 'scroll 1s'; // Apply animation to the section
            }
        });
    });
});
