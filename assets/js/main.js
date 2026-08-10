/**
 * Main JavaScript for Ice Cream & Waffle Shop Template
 */

document.addEventListener('DOMContentLoaded', () => {

    // Auto-highlight active nav link based on current URL
    const currentUrl = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .dropdown-item').forEach(link => {
        link.classList.remove('active');
    });

    const matchingLinks = Array.from(document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .dropdown-item')).filter(link => link.getAttribute('href') === currentUrl);
    
    if (matchingLinks.length > 0) {
        matchingLinks.forEach(matchingLink => {
            matchingLink.classList.add('active');
            const dropdownParent = matchingLink.closest('.dropdown');
            if (dropdownParent) {
                const dropdownToggle = dropdownParent.querySelector('.dropdown-toggle');
                if (dropdownToggle) dropdownToggle.classList.add('active');
            }
        });
    }

    // 1. Sticky Header on Scroll
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Back to Top Button
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 3. Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check local storage for theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'dark-theme') {
            themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        let theme = 'light-theme';
        if (body.classList.contains('dark-theme')) {
            theme = 'dark-theme';
            themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
        
        localStorage.setItem('theme', theme);
    });

    // 4. RTL Toggle
    const rtlToggle = document.getElementById('rtl-toggle');
    
    // Check local storage for RTL preference
    const isRtl = localStorage.getItem('rtl') === 'true';
    if (isRtl) {
        body.setAttribute('dir', 'rtl');
    }

    if (rtlToggle) {
        rtlToggle.addEventListener('click', () => {
            const currentDir = body.getAttribute('dir');
            if (currentDir === 'rtl') {
                body.removeAttribute('dir');
                localStorage.setItem('rtl', 'false');
            } else {
                body.setAttribute('dir', 'rtl');
                localStorage.setItem('rtl', 'true');
            }
        });
    }
});
