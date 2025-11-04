        // Mobile Navigation Toggle
        document.getElementById('navToggle').addEventListener('click', function() {
            document.getElementById('mainNav').classList.toggle('active');
        });

        // Tab Functionality
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabPanels = document.querySelectorAll('.tab-panel');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and panels
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanels.forEach(panel => panel.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Show corresponding panel
                const tabId = button.getAttribute('data-tab');
                document.getElementById(`${tabId}-tab`).classList.add('active');
                
                // Animate job items when tab changes
                setTimeout(() => {
                    animateJobItems();
                }, 300);
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    document.getElementById('mainNav').classList.remove('active');
                }
            });
        });

        // Scroll Animation
        function checkVisibility() {
            const sections = document.querySelectorAll('section');
            const statCards = document.querySelectorAll('.stat-card');
            const serviceCards = document.querySelectorAll('.service-card');
            const focusItems = document.querySelectorAll('.focus-item');
            const timelineItems = document.querySelectorAll('.timeline-item');
            
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (sectionTop < windowHeight * 0.85) {
                    section.classList.add('visible');
                }
            });
            
            statCards.forEach((card, index) => {
                const cardTop = card.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (cardTop < windowHeight * 0.85) {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 100);
                }
            });
            
            serviceCards.forEach((card, index) => {
                const cardTop = card.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (cardTop < windowHeight * 0.85) {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 100);
                }
            });
            
            focusItems.forEach((item, index) => {
                const itemTop = item.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (itemTop < windowHeight * 0.85) {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 100);
                }
            });
            
            timelineItems.forEach((item, index) => {
                const itemTop = item.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (itemTop < windowHeight * 0.85) {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 150);
                }
            });
            
            animateJobItems();
        }
        
        function animateJobItems() {
            const jobItems = document.querySelectorAll('.job-item');
            
            jobItems.forEach((item, index) => {
                const itemTop = item.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (itemTop < windowHeight * 0.85) {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 100);
                }
            });
        }
        
        // Initial check on page load
        window.addEventListener('load', checkVisibility);
        
        // Check on scroll
        window.addEventListener('scroll', checkVisibility);