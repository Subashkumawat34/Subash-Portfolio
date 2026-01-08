// ==================== Loading Screen ====================

// Percentage counter animation
function animateCounter() {
    const counter = document.getElementById('loader-count');
    let count = 0;
    const target = 100;
    const duration = 1200; // 1.2 seconds for counting
    const increment = target / (duration / 16); // 60fps

    const updateCounter = () => {
        count += increment;
        if (count < target) {
            counter.textContent = Math.floor(count);
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target;
        }
    };

    requestAnimationFrame(updateCounter);
}

// Hide loader after page loads
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');

    // Start counter animation immediately
    animateCounter();

    // Wait for animations to complete (1.5 seconds total - much faster!)
    setTimeout(() => {
        loader.classList.add('fade-out');

        // Remove from DOM after fade out
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1500); // Reduced from 2800ms to 1500ms
});

// Fallback: hide loader after max 3 seconds even if page hasn't fully loaded
setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader && !loader.classList.contains('fade-out')) {
        loader.classList.add('fade-out');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
}, 3000); // Reduced from 5000ms to 3000ms

