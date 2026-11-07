/* ===================================================================
   DOLCE CHORAL TRAINING GROUP – CONCERT WEBSITE
   Interactive Handlers & Navigation
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ---- 1. Mobile Navigation Drawer Toggle ----
    const navToggle = document.getElementById('navToggle');
    const primaryNav = document.getElementById('primaryNav');

    if (navToggle && primaryNav) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('open');
            primaryNav.classList.toggle('open');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (primaryNav.classList.contains('open') && !navToggle.contains(e.target) && !primaryNav.contains(e.target)) {
                navToggle.classList.remove('open');
                primaryNav.classList.remove('open');
            }
        });
    }

    // ---- 2. Header Scroll Glass Blur Elevation ----
    const header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // ---- 3. Smooth In-Page Anchor Scrolling for Lyrics Quick-Jump ----
    document.querySelectorAll('.jump-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    e.preventDefault();
                    targetEl.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
