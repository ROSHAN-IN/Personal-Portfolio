
console.log("Welcome to Roshan's Portfolio Website!");

/* Contact Form Validation */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill all the fields.";
        formMessage.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        formMessage.textContent = "Please enter a valid email.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Form validated successfully! Demo only.";
    formMessage.style.color = "green";

    contactForm.reset();
});

/* Dark Mode and Light Mode */

const themeToggle = document.getElementById("themeToggle");

// Check previously selected theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️ Light Mode";
}

// Change theme when button is clicked
themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }

});

/* Mobile Navigation */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

/* Active Navigation Link */

const navItems = document.querySelectorAll("#navLinks a");
const sections = document.querySelectorAll("section[id]");

function updateActiveLink() {
    let currentSection = "home";

    sections.forEach(function(section) {
        if (window.scrollY + 180 >= section.offsetTop) {
            currentSection = section.id;
        }
    });

    navItems.forEach(function(link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();

/* Close Mobile Menu After Clicking Link */

navItems.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});
