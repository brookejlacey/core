document.addEventListener('DOMContentLoaded', () => {
    // ... (previous code remains unchanged)

    // Testimonials Carousel
    const testimonialsCarousel = document.getElementById('testimonials-carousel');
    const prevButton = document.getElementById('prev-testimonial');
    const nextButton = document.getElementById('next-testimonial');
    const testimonials = testimonialsCarousel.querySelectorAll('.flex-shrink-0');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        gsap.to(testimonialsCarousel.querySelector('.flex'), {
            x: -index * 100 + '%',
            duration: 0.5,
            ease: 'power2.inOut'
        });
    }

    prevButton.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    nextButton.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    // Animate testimonials
    gsap.from('#testimonials .bg-white', {
        scrollTrigger: {
            trigger: '#testimonials',
            start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: 'power2.out'
    });

    // ... (rest of the code remains unchanged)
});
