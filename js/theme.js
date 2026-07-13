// js/theme.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const htmlElement = document.documentElement;
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    
    // Apply saved theme
    if(savedTheme === 'light') {
        htmlElement.setAttribute('data-theme', 'light');
        if(themeToggle) {
            themeToggle.innerHTML = '<i class="ri-moon-line"></i>';
        }
    } else {
        htmlElement.removeAttribute('data-theme');
        if(themeToggle) {
            themeToggle.innerHTML = '<i class="ri-sun-line"></i>';
        }
    }
    
    // Toggle Theme
    if(themeToggle) {
        themeToggle.addEventListener('click', () => {
            if(htmlElement.getAttribute('data-theme') === 'light') {
                // Switch to dark
                htmlElement.removeAttribute('data-theme');
                localStorage.setItem('portfolio-theme', 'dark');
                themeToggle.innerHTML = '<i class="ri-sun-line"></i>';
            } else {
                // Switch to light
                htmlElement.setAttribute('data-theme', 'light');
                localStorage.setItem('portfolio-theme', 'light');
                themeToggle.innerHTML = '<i class="ri-moon-line"></i>';
            }
        });
    }
});
