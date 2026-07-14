// js/validation.js
document.addEventListener('DOMContentLoaded', () => {
    
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const setStatus = (element, status) => {
        const parent = element.parentElement;
        if(status === 'error') {
            parent.classList.add('error');
            parent.classList.remove('success');
        } else if(status === 'success') {
            parent.classList.add('success');
            parent.classList.remove('error');
        } else {
            parent.classList.remove('success', 'error');
        }
    };

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            if(name.value.trim() === '') { setStatus(name, 'error'); isValid = false; } else { setStatus(name, 'success'); }
            if(!validateEmail(email.value)) { setStatus(email, 'error'); isValid = false; } else { setStatus(email, 'success'); }
            if(subject.value.trim() === '') { setStatus(subject, 'error'); isValid = false; } else { setStatus(subject, 'success'); }
            if(message.value.trim() === '') { setStatus(message, 'error'); isValid = false; } else { setStatus(message, 'success'); }
            
            if(isValid) {
                // Simulate sending
                const btn = contactForm.querySelector('button');
                const originalText = btn.innerHTML;
                btn.innerHTML = 'Sending... <i class="ri-loader-4-line ri-spin"></i>';
                
                setTimeout(() => {
                    btn.innerHTML = 'Message Sent! <i class="ri-check-line"></i>';
                    btn.classList.replace('btn-primary', 'btn-outline');
                    contactForm.reset();
                    
                    document.querySelectorAll('.form-group').forEach(group => group.classList.remove('success'));
                    
                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.classList.replace('btn-outline', 'btn-primary');
                    }, 3000);
                }, 1500);
            }
        });
    }

    // Login Form
    const loginForm = document.getElementById('loginForm');
    if(loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            
            if(!validateEmail(email.value)) { setStatus(email, 'error'); isValid = false; } else { setStatus(email, 'success'); }
            if(password.value.trim() === '') { setStatus(password, 'error'); isValid = false; } else { setStatus(password, 'success'); }
            
            if(isValid) {
                localStorage.setItem('userEmail', email.value);
                const activeRole = document.querySelector('.role-btn.active');
                if(activeRole && activeRole.id === 'role-admin') {
                    localStorage.setItem('userRole', 'Admin');
                    window.location.href = 'admindashboard.html';
                } else {
                    localStorage.setItem('userRole', 'User');
                    window.location.href = 'userdashboard.html';
                }
            }
        });
    }

    // Register Form
    const registerForm = document.getElementById('registerForm');
    if(registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const password = document.getElementById('password');
            const confirmPassword = document.getElementById('confirmPassword');
            const terms = document.getElementById('terms');
            
            if(name.value.trim() === '') { setStatus(name, 'error'); isValid = false; } else { setStatus(name, 'success'); }
            if(!validateEmail(email.value)) { setStatus(email, 'error'); isValid = false; } else { setStatus(email, 'success'); }
            
            const phoneRegex = /^[0-9]+$/;
            if(!phoneRegex.test(phone.value.trim())) { setStatus(phone, 'error'); isValid = false; } else { setStatus(phone, 'success'); }
            
            if(password.value.length < 6) { setStatus(password, 'error'); isValid = false; } else { setStatus(password, 'success'); }
            
            if(confirmPassword.value !== password.value || confirmPassword.value === '') { 
                setStatus(confirmPassword, 'error'); isValid = false; 
            } else { setStatus(confirmPassword, 'success'); }
            
            if(!terms.checked) {
                alert('You must agree to the Terms & Conditions');
                isValid = false;
            }
            
            if(isValid) {
                localStorage.setItem('userEmail', email.value);
                const activeRole = document.querySelector('.role-btn.active');
                if(activeRole && activeRole.id === 'role-admin') {
                    localStorage.setItem('userRole', 'Admin');
                    window.location.href = 'admindashboard.html';
                } else {
                    localStorage.setItem('userRole', 'User');
                    window.location.href = 'userdashboard.html';
                }
            }
        });
    }
});
