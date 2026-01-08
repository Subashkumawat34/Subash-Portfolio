// ==================== Theme Toggle (Dark/Light Mode) ====================

// Theme toggle functionality with localStorage persistence
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';

// Initialize theme on page load
function initTheme() {
    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
}

// Update theme icon based on current theme
function updateThemeIcon(theme) {
    if (theme === 'light') {
        themeIcon.classList.remove('bx-moon');
        themeIcon.classList.add('bx-sun');
    } else {
        themeIcon.classList.remove('bx-sun');
        themeIcon.classList.add('bx-moon');
    }
}

// Toggle theme
function toggleTheme() {
    const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);

    // Add a subtle animation class
    html.classList.add('theme-transitioning');
    setTimeout(() => {
        html.classList.remove('theme-transitioning');
    }, 300);
}

// Event listeners
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Initialize on load
initTheme();
