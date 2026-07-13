// js/portfolio.js
document.addEventListener('DOMContentLoaded', () => {
    // Portfolio Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            projectItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if(filterValue === 'all' || itemCategory.includes(filterValue)) {
                    item.classList.remove('hide');
                    item.classList.add('show');
                } else {
                    item.classList.add('hide');
                    item.classList.remove('show');
                }
            });
        });
    });

    // Modal Logic
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close-modal');
    const viewBtns = document.querySelectorAll('.view-demo');
    
    if(modal && closeBtn) {
        viewBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const card = btn.closest('.project-card');
                const imgSource = card.querySelector('img').src;
                const title = card.querySelector('h3').innerText;
                const desc = card.querySelector('p').innerText;
                
                document.getElementById('modalImg').src = imgSource;
                document.getElementById('modalTitle').innerText = title;
                document.getElementById('modalDesc').innerText = desc;
                
                modal.classList.add('active');
                document.body.classList.add('no-scroll');
            });
        });
        
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
        
        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                modal.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    }
});
