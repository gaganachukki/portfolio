// js/counter.js
document.addEventListener('DOMContentLoaded', () => {
    // Number Counters
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // lower is slower technically via division

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(animateCounters, 20);
            } else {
                counter.innerText = target;
            }
        });
    };

    // Progress Bars
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const animateProgress = () => {
        progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    };

    // Use Intersection Observer to trigger when visible
    const observerOptions = {
        threshold: 0.5
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const progressObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                animateProgress();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const statsSection = document.querySelector('.hero-stats-container');
    if(statsSection) {
        statsObserver.observe(statsSection);
    }
    
    const skillsSection = document.querySelector('.skills');
    if(skillsSection) {
        progressObserver.observe(skillsSection);
    }
});
