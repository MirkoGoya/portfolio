// ============================================
// ATTESA CARICAMENTO PAGINA
// ============================================
document.addEventListener('DOMContentLoaded', () => {

    // ============================================
    // NAVBAR — effetto blur allo scroll
    // ============================================
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ============================================
    // MENU MOBILE — apertura/chiusura
    // ============================================
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Chiudi menu quando clicchi un link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });

    // ============================================
    // GSAP — animazione entrata HERO
    // ============================================
    const heroTl = gsap.timeline({ delay: 0.2 });

    heroTl
        .to('.hero-eyebrow', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
        })
        .to('.hero-title', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.4')
        .to('.hero-subtitle', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5')
        .to('.hero-content .btn-primary', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.4');

    // ============================================
    // GSAP — stato iniziale elementi hero
    // (partono invisibili e scendono dall'alto)
    // ============================================
    gsap.set('.hero-eyebrow', { opacity: 0, y: -20 });
    gsap.set('.hero-title', { opacity: 0, y: 30 });
    gsap.set('.hero-subtitle', { opacity: 0, y: 20 });
    gsap.set('.hero-content .btn-primary', { opacity: 0, y: 20 });

    // ============================================
    // GSAP SCROLL — animazioni al scroll
    // ============================================
    gsap.registerPlugin(ScrollTrigger);

    // Animazione sezione Chi Sono
    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
        },
        opacity: 0,
        x: -60,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
        },
        opacity: 0,
        x: 60,
        duration: 1,
        ease: 'power3.out'
    });

    // Animazione skill cards — entrano una dopo l'altra
    gsap.from('.skill-card', {
        scrollTrigger: {
            trigger: '#skills',
            start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out'
    });

    // Animazione progetto
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '#projects',
            start: 'top 80%',
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out'
    });

    // Animazione timeline
    gsap.from('.timeline-item', {
        scrollTrigger: {
            trigger: '#experience',
            start: 'top 80%',
        },
        opacity: 0,
        x: -40,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Animazione contatti
    gsap.from('#contact h2, .contact-sub, .contact-links', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });

});