// ==================== Skills Progress Animation ====================

// Animate skill circles on scroll
function animateSkills() {
    const skillCircles = document.querySelectorAll('.skill-circle');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const circle = entry.target;
                const progressCircle = circle.querySelector('.progress-circle');
                const percentageValue = circle.querySelector('.percentage-value');
                const targetPercent = parseInt(circle.getAttribute('data-percent'));

                // Calculate stroke-dashoffset
                const circumference = 2 * Math.PI * 60; // r=60
                const offset = circumference - (targetPercent / 100) * circumference;

                // Animate the circle
                setTimeout(() => {
                    progressCircle.style.strokeDashoffset = offset;
                }, 100);

                // Animate the percentage counter
                let currentPercent = 0;
                const duration = 2000; // 2 seconds
                const increment = targetPercent / (duration / 16); // ~60 fps

                const counter = setInterval(() => {
                    currentPercent += increment;
                    if (currentPercent >= targetPercent) {
                        currentPercent = targetPercent;
                        clearInterval(counter);
                    }
                    percentageValue.textContent = Math.floor(currentPercent);
                }, 16);

                // Unobserve after animation starts
                observer.unobserve(circle);
            }
        });
    }, {
        threshold: 0.5
    });

    skillCircles.forEach(circle => observer.observe(circle));
}

// Initialize on DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateSkills);
} else {
    animateSkills();
}
