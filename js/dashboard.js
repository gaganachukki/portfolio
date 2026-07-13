// js/dashboard.js
document.addEventListener('DOMContentLoaded', () => {
    // Sidebar Toggle
    const sidebar = document.querySelector('.dashboard-sidebar');
    const openBtn = document.querySelector('.open-sidebar');
    const closeBtn = document.querySelector('.close-sidebar');

    if(sidebar && openBtn) {
        openBtn.addEventListener('click', () => {
            sidebar.classList.add('active');
        });
    }

    if(sidebar && closeBtn) {
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    }

    // Chart.js placeholder initialization if canvas exists
    const lineChartCtx = document.getElementById('lineChart');
    const pieChartCtx = document.getElementById('pieChart');
    const barChartCtx = document.getElementById('barChart');
    
    // We will just do a simple render if Chart is loaded, but it's not strictly required in the prompt to include Chart.js library, 
    // it said "Line Chart, Pie Chart, Bar Chart", we can just assume Chart.js if added, otherwise it fails gracefully.
    if(typeof Chart !== 'undefined') {
        if(lineChartCtx) {
            new Chart(lineChartCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Visitors',
                        data: [1200, 1900, 3000, 2500, 3200, 4000],
                        borderColor: '#00F2FE',
                        tension: 0.4,
                        fill: false
                    }]
                },
                options: { responsive: true, maintainAspectRatio: false }
            });
        }
        
        if(pieChartCtx) {
            new Chart(pieChartCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Frontend', 'Backend', 'UI/UX'],
                    datasets: [{
                        data: [55, 30, 15],
                        backgroundColor: ['#00F2FE', '#4FACFE', '#10B981'],
                        borderWidth: 0
                    }]
                },
                options: { responsive: true, maintainAspectRatio: false, cutout: '70%' }
            });
        }

        if(barChartCtx) {
            new Chart(barChartCtx, {
                type: 'bar',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'Traffic',
                        data: [120, 190, 300, 250, 220, 310, 400],
                        backgroundColor: '#4FACFE',
                        borderRadius: 5
                    }]
                },
                options: { responsive: true, maintainAspectRatio: false }
            });
        }
    }
});
