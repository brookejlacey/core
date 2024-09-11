document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Fade-in animation for sections
    gsap.utils.toArray('.container').forEach((section, i) => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(section, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            },
            once: true
        });
    });

    // Lead generation popup
    const ctaButton = document.getElementById('cta-button');
    const leadGenPopup = document.getElementById('lead-gen-popup');
    const closePopup = document.getElementById('close-popup');
    const leadGenForm = document.getElementById('lead-gen-form');

    ctaButton.addEventListener('click', () => {
        leadGenPopup.classList.remove('hidden');
        gsap.from(leadGenPopup.querySelector('.bg-white'), {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    closePopup.addEventListener('click', () => {
        gsap.to(leadGenPopup.querySelector('.bg-white'), {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => {
                leadGenPopup.classList.add('hidden');
            }
        });
    });

    leadGenForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        // For this example, we'll just log it to the console
        const formData = new FormData(leadGenForm);
        console.log('Form submitted:', Object.fromEntries(formData));
        
        // Show a success message
        alert('Thank you for your interest! We\'ll be in touch soon.');
        
        // Close the popup
        closePopup.click();
    });

    // Animate infographic section
    gsap.from('#infographic .rounded-full', {
        scrollTrigger: {
            trigger: '#infographic',
            start: 'top 80%'
        },
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: 'back.out(1.7)'
    });

    // Animate value propositions
    gsap.from('#value-props .flex', {
        scrollTrigger: {
            trigger: '#value-props',
            start: 'top 80%'
        },
        x: -50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out'
    });

    // Animate tech overview icons
    gsap.from('#tech-overview .fas', {
        scrollTrigger: {
            trigger: '#tech-overview',
            start: 'top 80%'
        },
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: 'back.out(1.7)'
    });

    // Animate hero section
    gsap.from('#hero h1, #hero p, #hero a', {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out'
    });
});
