 // Sidebar Toggle
        const menuToggle = document.getElementById('menuToggle');
        const sidebar = document.getElementById('sidebar');
        
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });
        
        // Navigation
        const navItems = document.querySelectorAll('.nav-item');
        const contentSections = document.querySelectorAll('.content-section');
        
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const sectionId = item.getAttribute('data-section');
                
                // Remove active class from all nav items
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
                
                // Hide all content sections
                contentSections.forEach(section => {
                    section.classList.remove('active');
                });
                
                // Show selected section with animation
                const activeSection = document.getElementById(sectionId);
                activeSection.classList.add('active', 'animate-fade-in');
                
                // Remove animation class after animation completes
                setTimeout(() => {
                    activeSection.classList.remove('animate-fade-in');
                }, 500);
            });
        });
        
        // Charts
        document.addEventListener('DOMContentLoaded', function() {
            // Appointments Chart
            const appointmentsCtx = document.getElementById('appointmentsChart');
            if (appointmentsCtx) {
                new Chart(appointmentsCtx, {
                    type: 'line',
                    data: {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                        datasets: [{
                            label: 'Appointments',
                            data: [65, 78, 90, 81, 95, 108, 115],
                            borderColor: 'rgb(13, 110, 253)',
                            backgroundColor: 'rgba(13, 110, 253, 0.1)',
                            tension: 0.4,
                            fill: true
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            }

             // Status Chart
            const statusCtx = document.getElementById('statusChart');
            if (statusCtx) {
                new Chart(statusCtx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Confirmed', 'Pending', 'Cancelled', 'Completed'],
                        datasets: [{
                            data: [145, 45, 25, 30],
                            backgroundColor: [
                                'rgb(25, 135, 84)',
                                'rgb(255, 193, 7)',
                                'rgb(220, 53, 69)',
                                'rgb(13, 110, 253)'
                            ]
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }
                });
            }
            
            // Revenue Chart
            const revenueCtx = document.getElementById('revenueChart');
            if (revenueCtx) {
                new Chart(revenueCtx, {
                    type: 'bar',
                    data: {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                        datasets: [{
                            label: 'Revenue ($)',
                            data: [42000, 45000, 43000, 48000, 51000, 48350],
                            backgroundColor: 'rgba(13, 110, 253, 0.8)',
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false
                            }
                        }
                    }
                });
            }
            
            // Department Chart
            const departmentCtx = document.getElementById('departmentChart');
            if (departmentCtx) {
                new Chart(departmentCtx, {
                    type: 'radar',
                    data: {
                        labels: ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Dermatology'],
                        datasets: [{
                            label: 'Patient Count',
                            data: [234, 178, 312, 256, 189],
                            backgroundColor: 'rgba(13, 110, 253, 0.2)',
                            borderColor: 'rgb(13, 110, 253)',
                            pointBackgroundColor: 'rgb(13, 110, 253)'
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });
            }
        });

         // Toast Notifications (example)
        function showToast(message, type = 'success') {
            // You can implement a toast notification library here
            console.log(`${type}: ${message}`);
        }
        
        // Form validation (basic example)
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                showToast('Form submitted successfully!');
            });
        });