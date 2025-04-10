// kumawatking6848@gmail.com
// E66C336662050B07039A832B930D0E193849
// smtp.elasticemail.com
// 2525

/* CSS for logo size and smooth transition */

window.addEventListener("load", () => {
  VANTA.BIRDS({
    el: "#vanta-bg", // Corrected selector
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundAlpha: 0.0, // Optional: Make background transparent
  });
});

const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const form = document.querySelector("form");

//==================== Menu Scroll =======================
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("bx-x");
});

// Close menu when clicking a menu item
document.querySelectorAll("header nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
  });
});

//================== Activity of scroll reveal =======================
ScrollReveal({
  reset: true,
  distance: "2rem",
  duration: 2000,
  delay: 120,
  mobile: false,
});

ScrollReveal().reveal(".left-side", { origin: "left" });
ScrollReveal().reveal(".right-side", { origin: "right" });
ScrollReveal().reveal(".top-side", { origin: "top" });
ScrollReveal().reveal(".bottom-side", { origin: "bottom" });

//======================= Typed.js ===========================
const typed = new Typed(".text-animation span", {
  strings: [
    "Frontend Developer",
    "Backend Developer",
    "Mern Stack Developer",
    "Software Developer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const fullname_Input = document.getElementById("fullName");
const email_Input = document.getElementById("email");
const phone_Input = document.getElementById("phone");
const subject_Input = document.getElementById("subject");
const message_Input = document.getElementById("message");

//===================  Email Sender Handler Function ===================

function sendEmail() {
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  //console.log({ fullname, email, phone, subject, message });

  const body = `
                <b>Fullname : </b>${fullName}
                <br/>
                <b>Email : </b>${email}
                <br/>
                <b>Phone : </b>${phone}
                <br/>
                <b>Subject : </b>${subject}
                <br/>
                <b>Message : </b>${message}
            `;

  Email.send({
     SecureToken: "40b0323c-46a8-4596-a89b-ac42652648b8",
     Host: "smtp.elasticemail.com", // Use EmailJS or a backend for security
    Username: "kumawatking6848@gmail.com",
    Password: "E66C336662050B07039A832B930D0E193849",
     To: "kumawatking6848@gmail.com",
     From: "kumawatking6848@gmail.com",

    Subject: subject,
    Body: body,
  }).then((message) => {
    if (message === "OK") {
      Toastify({
        text: "Message sent successfully!------> ",
        duration: 1000,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(45deg,rgb(5, 150, 138),rgb(4, 138, 10))",
          fontSize: "1.5rem",
          borderRadius: "20px",
        },
      }).showToast();

      setTimeout(() => document.querySelector("form").reset(), 1000);
    }
  });
}

function toastMessage(msg) {
  Toastify({
    text: msg,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(45deg,rgb(202, 19, 19),rgb(156, 13, 13))",
      fontSize: "1.5rem",
      borderRadius: "20px",
    },
  }).showToast();
}

function validateName() {
  const name = document.getElementById("fullName").value;
  return /^[a-zA-Z\s-]+$/.test(name);
}

function checkEmail() {
  const email = document.getElementById("email").value;
  var emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegx.test(email);
}

function checkPhone() {
  const phone = document.getElementById("phone").value;
  var phoneNum = /^[0-9]{10}$/;
  return phoneNum.test(phone);
}

function validateSubject() {
  const subject = document.getElementById("subject").value;
  return subject.trim() !== "";
}

function validateMessage() {
  const message = document.getElementById("message").value;
  return message.trim() !== "";
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validateName())
    return toastMessage("Please enter your valid full Name!!");
  if (!checkEmail()) return toastMessage("Please enter a valid email!!");
  if (!checkPhone()) return toastMessage("Please enter a valid phone number!!");
  if (!validateSubject()) return toastMessage("Please enter your subject!!");
  if (!validateMessage()) return toastMessage("Please enter your message!!");

  sendEmail();
});
