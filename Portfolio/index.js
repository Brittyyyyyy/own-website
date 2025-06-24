  // Simple animation trigger
        document.addEventListener('DOMContentLoaded', function() {
            const animateElements = document.querySelectorAll('.animate');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            animateElements.forEach(element => {
                element.style.opacity = 0;
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(element);
            });
        });

         // Animation trigger - same as About section
        document.addEventListener('DOMContentLoaded', function() {
            const animateElements = document.querySelectorAll('.animate');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                        
                        // Animate skill bars
                        if (entry.target.classList.contains('skill-item')) {
                            const bar = entry.target.querySelector('.skill-bar');
                            const width = bar.style.width;
                            bar.style.width = '0';
                            setTimeout(() => {
                                bar.style.width = width;
                            }, 100);
                        }
                    }
                });
            }, { threshold: 0.1 });
            
            animateElements.forEach(element => {
                element.style.opacity = 0;
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(element);
            });
        });
          // Enhanced intersection observer with smooth animations
        document.addEventListener('DOMContentLoaded', function() {
            const animateElements = document.querySelectorAll('[data-animate]');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const delay = entry.target.style.transitionDelay || '0s';
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, parseFloat(delay) * 1000);
                    }
                });
            }, { 
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            });
            
            animateElements.forEach(element => {
                observer.observe(element);
            });
            
            // Add subtle hover effects
            const experienceCards = document.querySelectorAll('.experience-card');
            experienceCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        });
        
           // Enhanced intersection observer with smooth animations
        document.addEventListener('DOMContentLoaded', function() {
            const animateElements = document.querySelectorAll('[data-animate]');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const delay = entry.target.style.transitionDelay || '0s';
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, parseFloat(delay) * 1000);
                    }
                });
            }, { 
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            });
            
            animateElements.forEach(element => {
                observer.observe(element);
            });
            
            // Add hover effect to project cards
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(-8px)';
                });
            });
        });

  // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');
        
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Scroll behavior
        const navbar = document.getElementById('navbar');
        let lastScrollPosition = 0;
        let isScrolling;
        
        window.addEventListener('scroll', () => {
            const currentScrollPosition = window.pageYOffset;
            
            // Clear our timeout throughout the scroll
            window.clearTimeout(isScrolling);
            
            // Determine scroll direction
            if (currentScrollPosition > lastScrollPosition) {
                // Scrolling down - hide navbar
                navbar.classList.add('header-hidden');
            } else {
                // Scrolling up - show navbar
                navbar.classList.remove('header-hidden');
            }
            
            // Set timeout to run after scrolling stops
            isScrolling = setTimeout(() => {
                // After scroll stops - show navbar
                navbar.classList.remove('header-hidden');
            }, 100);
            
            lastScrollPosition = currentScrollPosition;
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.navmenu a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    menuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });


        const navigation = document.querySelectorAll("#navbar");

        const navigationHeight = navigation.offsetHeight;

        document.documentElement.style.setProperty(
            "--scroll-padding", navigationHeight + "px"

        );