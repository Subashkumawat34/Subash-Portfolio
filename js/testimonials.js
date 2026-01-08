// ==================== Testimonials Carousel ====================

// Testimonial slider functionality
class TestimonialSlider {
    constructor() {
        this.track = document.querySelector('.testimonial-track');
        this.cards = document.querySelectorAll('.testimonial-card');
        this.dots = document.querySelectorAll('.dot');
        this.prevBtn = document.querySelector('.testimonial-arrow.prev');
        this.nextBtn = document.querySelector('.testimonial-arrow.next');

        this.currentSlide = 0;
        this.totalSlides = this.cards.length;
        this.autoPlayInterval = null;

        this.init();
    }

    init() {
        if (!this.track || this.totalSlides === 0) return;

        // Event listeners
        this.prevBtn?.addEventListener('click', () => this.prevSlide());
        this.nextBtn?.addEventListener('click', () => this.nextSlide());

        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        // Start autoplay
        this.startAutoPlay();

        // Pause on hover
        const container = document.querySelector('.testimonials-container');
        container?.addEventListener('mouseenter', () => this.stopAutoPlay());
        container?.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    goToSlide(index) {
        this.currentSlide = index;
        this.updateSlider();
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateSlider();
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.updateSlider();
    }

    updateSlider() {
        // Move track
        this.track.style.transform = `translateX(-${this.currentSlide * 100}%)`;

        // Update active card
        this.cards.forEach((card, index) => {
            card.classList.toggle('active', index === this.currentSlide);
        });

        // Update dots
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => this.nextSlide(), 5000); // Change every 5 seconds
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// Initialize on DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new TestimonialSlider());
} else {
    new TestimonialSlider();
}
