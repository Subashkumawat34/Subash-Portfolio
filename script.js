// Enhanced Portfolio JavaScript with Modern Interactions

/* ==================== Scroll Header Enhancement ==================== */
const header = document.getElementById('header');
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

/* ==================== Menu Toggle ==================== */
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('bx-x');
});

// Close menu when clicking a menu item
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  }
});

/* ==================== Active Menu Highlighting ==================== */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 150) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

/* ==================== Smooth Scroll ==================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

/* ==================== Scroll Reveal Animations ==================== */
/* DISABLED TO ENSURE CONTENT VISIBILITY - Can be re-enabled after testing */
/*
ScrollReveal({
  reset: false,
  distance: '60px',
  duration: 1500,
  delay: 150,
  mobile: true,
  opacity: null, // Don't hide elements initially
  easing: 'ease-out',
  viewFactor: 0.2
});

ScrollReveal().reveal('.left-side', { 
  origin: 'left',
  interval: 200
});

ScrollReveal().reveal('.right-side', { 
  origin: 'right',
  interval: 200
});

ScrollReveal().reveal('.top-side', { 
  origin: 'top',
  interval: 200
});

ScrollReveal().reveal('.bottom-side', { 
  origin: 'bottom',
  interval: 200
});

ScrollReveal().reveal('.heading', { 
  origin: 'top',
  distance: '30px',
  scale: 0.9
});

ScrollReveal().reveal('.timeline-item', { 
  origin: 'bottom',
  interval: 300,
  scale: 0.95
});

ScrollReveal().reveal('.portfolio-box', { 
  origin: 'bottom',
  interval: 200,
  scale: 0.9
});

ScrollReveal().reveal('.tech-item', { 
  origin: 'bottom',
  interval: 150,
  scale: 0.95
});
*/

/* ==================== Typed.js Animation ==================== */
const typed = new Typed('.text-animation span', {
  strings: [
    'Frontend Developer',
    'Backend Developer',
    'MERN Stack Developer',
    'Software Developer'
  ],
  typeSpeed: 80,
  backSpeed: 60,
  backDelay: 1500,
  loop: true,
  showCursor: true,
  cursorChar: '|'
});

/* ==================== Form Validation & Submission ==================== */
const form = document.querySelector('form');

// Input elements
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

// Validation functions
function validateName() {
  const name = fullNameInput.value.trim();
  return name.length >= 2 && /^[a-zA-Z\s-]+$/.test(name);
}

function validateEmail() {
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone() {
  const phone = phoneInput.value.trim();
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone);
}

function validateSubject() {
  return subjectInput.value.trim().length >= 3;
}

function validateMessage() {
  return messageInput.value.trim().length >= 10;
}

// Real-time validation feedback
function addValidationFeedback(input, isValid) {
  if (isValid) {
    input.style.borderColor = 'rgba(34, 197, 94, 0.5)';
  } else if (input.value.length > 0) {
    input.style.borderColor = 'rgba(239, 68, 68, 0.5)';
  } else {
    input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
  }
}

fullNameInput.addEventListener('blur', () => {
  addValidationFeedback(fullNameInput, validateName());
});

emailInput.addEventListener('blur', () => {
  addValidationFeedback(emailInput, validateEmail());
});

phoneInput.addEventListener('blur', () => {
  addValidationFeedback(phoneInput, validatePhone());
});

subjectInput.addEventListener('blur', () => {
  addValidationFeedback(subjectInput, validateSubject());
});

messageInput.addEventListener('blur', () => {
  addValidationFeedback(messageInput, validateMessage());
});

// Toast notification function
function showToast(message, type = 'success') {
  const backgroundColor = type === 'success'
    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';

  Toastify({
    text: message,
    duration: 3000,
    close: true,
    gravity: 'top',
    position: 'center',
    stopOnFocus: true,
    style: {
      background: backgroundColor,
      fontSize: '1.6rem',
      borderRadius: '1rem',
      padding: '1.5rem 2.5rem',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
    }
  }).showToast();
}

// Email sending function
function sendEmail() {
  const fullName = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const subject = subjectInput.value.trim();
  const message = messageInput.value.trim();

  const emailBody = `
    <div style="font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5;">
      <div style="background: white; padding: 30px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #667eea; border-bottom: 3px solid #667eea; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <p style="margin: 20px 0;"><strong>Full Name:</strong> ${fullName}</p>
        <p style="margin: 20px 0;"><strong>Email:</strong> ${email}</p>
        <p style="margin: 20px 0;"><strong>Phone:</strong> ${phone}</p>
        <p style="margin: 20px 0;"><strong>Subject:</strong> ${subject}</p>
        <p style="margin: 20px 0;"><strong>Message:</strong></p>
        <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #667eea; margin: 10px 0;">
          ${message}
        </p>
      </div>
    </div>
  `;

  Email.send({
    SecureToken: "40b0323c-46a8-4596-a89b-ac42652648b8",
    To: "kumawatking6848@gmail.com",
    From: "kumawatking6848@gmail.com",
    Subject: `Portfolio Contact: ${subject}`,
    Body: emailBody
  }).then(response => {
    if (response === 'OK') {
      showToast('✨ Message sent successfully! I\'ll get back to you soon.', 'success');

      // Reset form with animation
      setTimeout(() => {
        form.reset();
        // Reset border colors
        [fullNameInput, emailInput, phoneInput, subjectInput, messageInput].forEach(input => {
          input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });
      }, 1000);
    } else {
      showToast('⚠️ Failed to send message. Please try again.', 'error');
    }
  }).catch(error => {
    console.error('Email error:', error);
    showToast('⚠️ An error occurred. Please try again later.', 'error');
  });
}

// Form submission handler
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validate all fields
  if (!validateName()) {
    showToast('⚠️ Please enter a valid full name (letters only)', 'error');
    fullNameInput.focus();
    return;
  }

  if (!validateEmail()) {
    showToast('⚠️ Please enter a valid email address', 'error');
    emailInput.focus();
    return;
  }

  if (!validatePhone()) {
    showToast('⚠️ Please enter a valid 10-digit phone number', 'error');
    phoneInput.focus();
    return;
  }

  if (!validateSubject()) {
    showToast('⚠️ Please enter a subject (minimum 3 characters)', 'error');
    subjectInput.focus();
    return;
  }

  if (!validateMessage()) {
    showToast('⚠️ Please enter a message (minimum 10 characters)', 'error');
    messageInput.focus();
    return;
  }

  // All validations passed, send email
  sendEmail();
});

/* ==================== Loading Animation ==================== */
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
});

/* ==================== Enhanced Cursor Effect (Optional) ==================== */
// You can uncomment this section for a custom cursor trail effect
/*
const cursor = document.createElement('div');
cursor.classList.add('cursor-dot');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
*/

/* ==================== Console Message ==================== */
console.log(
  '%c🚀 Welcome to Subhash Kumawat\'s Portfolio! ',
  'color: #667eea; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);'
);
console.log(
  '%cInterested in the code? Check out my GitHub: https://github.com/Subashkumawat34',
  'color: #00f2fe; font-size: 14px;'
);

/* ==================== Parallax Effect for Background ==================== */
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const parallaxElements = document.querySelectorAll('.home-img img');

  parallaxElements.forEach(element => {
    const speed = 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});
