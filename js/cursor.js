// ==================== Custom Cursor Trail ====================

// Check if device supports custom cursor (not touch)
const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

if (!isTouchDevice) {
    // Create cursor elements
    const cursor = document.createElement('div');
    const cursorDot = document.createElement('div');

    cursor.className = 'custom-cursor';
    cursorDot.className = 'custom-cursor-dot';

    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);

    // Cursor position
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor animation
    function animateCursor() {
        // Smooth follow with easing
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        dotX += (mouseX - dotX) * 0.3;
        dotY += (mouseY - dotY) * 0.3;

        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
        cursorDot.style.left = `${dotX}px`;
        cursorDot.style.top = `${dotY}px`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Cursor interactions
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .portfolio-box, .tech-item, .skill-item');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            cursorDot.classList.add('cursor-hover');
        });

        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            cursorDot.classList.remove('cursor-hover');
        });
    });

    // Hide custom cursor when mouse leaves window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorDot.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        cursorDot.style.opacity = '1';
    });
}
