// js/slider.js
document.addEventListener('DOMContentLoaded', () => {
    // Simple custom slider logic for testimonials
    const sliders = document.querySelectorAll('.slider-container');
    
    sliders.forEach(slider => {
        const track = slider.querySelector('.slider-track');
        const slides = slider.querySelectorAll('.slide');
        const nextBtn = slider.querySelector('.slider-next');
        const prevBtn = slider.querySelector('.slider-prev');
        const dotsContainer = slider.querySelector('.slider-dots');
        
        if(!track || slides.length === 0) return;
        
        let currentIndex = 0;
        const totalSlides = slides.length;
        
        // Create dots
        if(dotsContainer) {
            for(let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if(i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(i));
                dotsContainer.appendChild(dot);
            }
        }
        
        const dots = slider.querySelectorAll('.dot');
        
        const updateSlider = () => {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            if(dots.length > 0) {
                dots.forEach(dot => dot.classList.remove('active'));
                dots[currentIndex].classList.add('active');
            }
        };
        
        const goToSlide = (index) => {
            currentIndex = index;
            updateSlider();
        };
        
        if(nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
                updateSlider();
            });
        }
        
        if(prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
                updateSlider();
            });
        }
        
        // Auto slide
        let slideInterval = setInterval(() => {
            currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
            updateSlider();
        }, 5000);
        
        slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
        slider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(() => {
                currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
                updateSlider();
            }, 5000);
        });
    });
});
