 // Toggle sidebar for mobile
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('active');
        }

        // Close sidebar when clicking outside on mobiles
        document.addEventListener('click', function(event) {
            const sidebar = document.getElementById('sidebar');
            const toggle = document.querySelector('.mobile-toggle');
            
            if (window.innerWidth <= 992) {
                if (!sidebar.contains(event.target) && !toggle.contains(event.target)) {
                    sidebar.classList.remove('active');
                }
            }
        });

        // Active nav link handling
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Appointment actions
        document.querySelectorAll('.btn-action').forEach(button => {
            button.addEventListener('click', function() {
                const action = this.textContent.trim();
                
                // Show alert for demo purposes
                if (action.includes('Start Consultation')) {
                    alert('Starting video consultation...');
                } else if (action.includes('View Records')) {
                    alert('Loading patient medical records...');
                } else if (action.includes('Reschedule')) {
                    alert('Opening reschedule dialog...');
                } else if (action.includes('Cancel')) {
                    if (confirm('Are you sure you want to cancel this appointment?')) {
                        this.closest('.appointment-card').style.opacity = '0.5';
                        alert('Appointment cancelled');
                    }
                } else if (action.includes('Confirm')) {
                    this.closest('.appointment-card').querySelector('.status-pending').className = 'status-badge status-confirmed';
                    this.closest('.appointment-card').querySelector('.status-badge').textContent = 'Confirmed';
                    alert('Appointment confirmed');
                }
            });
        });

        // Quick action buttons
        document.querySelectorAll('.action-btn').forEach(button => {
            button.addEventListener('click', function() {
                const action = this.querySelector('span').textContent;
                alert(`Opening ${action} form...`);
            });
        });

        // Notification button
        document.querySelector('.notification-btn').addEventListener('click', function() {
            alert('You have 3 new notifications');
        });

         // Profile button
        document.querySelector('.profile-btn').addEventListener('click', function() {
            alert('Opening profile settings...');
        });

        // Animate stats on load
        window.addEventListener('load', function() {
            document.querySelectorAll('.stat-value').forEach(stat => {
                const target = parseInt(stat.textContent);
                let current = 0;
                const increment = target / 50;
                
                const timer = setInterval(() => {
                    current += increment;ss
                    if (current >= target) {
                        stat.textContent = target;
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(current);
                    }
                }, 20);
            });
        });
