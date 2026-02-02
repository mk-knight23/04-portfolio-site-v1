/**
 * Portfolio Backend — Editorial Aesthetic
 * Minimal JavaScript for progressive enhancement
 */

(function() {
    'use strict';

    // ============================================
    // MOBILE NAVIGATION
    // ============================================
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            const isExpanded = navLinks.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isExpanded);

            // Animate hamburger to X
            const spans = navToggle.querySelectorAll('span');
            if (isExpanded) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close mobile menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // ============================================
    // NAVIGATION SCROLL EFFECTS
    // ============================================
    const nav = document.getElementById('nav');
    let lastScroll = 0;

    function handleScroll() {
        const currentScroll = window.pageYOffset;

        // Add shadow on scroll
        if (currentScroll > 10) {
            nav.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
        } else {
            nav.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    }

    // Throttled scroll handler
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ============================================
    // ACTIVE NAV LINK HIGHLIGHTING
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    const navLinkElements = document.querySelectorAll('.nav-link');

    function highlightNavLink() {
        const scrollPos = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinkElements.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                        link.style.color = 'var(--color-text)';
                        link.style.borderBottomColor = 'var(--color-accent)';
                    } else {
                        link.style.color = '';
                        link.style.borderBottomColor = '';
                    }
                });
            }
        });
    }

    // Throttled scroll handler for nav highlighting
    let navTicking = false;
    window.addEventListener('scroll', function() {
        if (!navTicking) {
            window.requestAnimationFrame(function() {
                highlightNavLink();
                navTicking = false;
            });
            navTicking = true;
        }
    });

    // ============================================
    // PROJECT CARDS INTERSECTION ANIMATION
    // ============================================
    const projectCards = document.querySelectorAll('.project-card');

    if ('IntersectionObserver' in window) {
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    cardObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        projectCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
            cardObserver.observe(card);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        projectCards.forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'none';
        });
    }

    // ============================================
    // TABLE ROW HOVER EFFECT
    // ============================================
    const tableRows = document.querySelectorAll('.projects-table tbody tr');

    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'var(--color-bg-muted)';
        });

        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });

    // ============================================
    // STATS COUNTER ANIMATION
    // ============================================
    const stats = document.querySelectorAll('.hero-stat-number');

    function animateStats() {
        stats.forEach(stat => {
            const target = parseInt(stat.textContent, 10);
            if (isNaN(target)) return;

            const duration = 1500;
            const start = performance.now();
            const startValue = 0;

            function update(currentTime) {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);

                // Ease out cubic
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(startValue + (target - startValue) * easeOut);

                stat.textContent = current + (stat.textContent.includes('+') ? '+' : '');

                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            }

            requestAnimationFrame(update);
        });
    }

    // Trigger stats animation when hero is visible
    if ('IntersectionObserver' in window) {
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    heroObserver.disconnect();
                }
            });
        }, { threshold: 0.5 });

        const hero = document.querySelector('.hero');
        if (hero) {
            heroObserver.observe(hero);
        }
    }

    // ============================================
    // KEYBOARD NAVIGATION ENHANCEMENTS
    // ============================================
    document.addEventListener('keydown', function(e) {
        // Press Escape to close mobile menu
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.focus();
        }
    });

    // ============================================
    // EXTERNAL LINKS HANDLING
    // ============================================
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        // Add rel="noopener" for security if not present
        if (!link.getAttribute('rel')) {
            link.setAttribute('rel', 'noopener');
        }

        // Optional: Add visual indicator for external links
        // link.innerHTML += ' <span aria-hidden="true">→</span>';
    });

    // ============================================
    // PERFORMANCE: LAZY LOAD IMAGES (if any added later)
    // ============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ============================================
    // CONSOLE GREETING
    // ============================================
    console.log('%cKazi Musharraf', 'font-size: 24px; font-weight: bold; color: #0d9488;');
    console.log('%cBackend Systems Architect', 'font-size: 14px; color: #57534e;');
    console.log('%cView the source: https://github.com/mk-knight23', 'font-size: 12px; color: #78716c;');

})();
