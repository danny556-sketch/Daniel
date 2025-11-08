// Typed.js animation for the home screen text
new Typed(".text", {
  strings: ["Frontend Developer","Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// QR Code Generation Removed

// Active link switching on scroll
const sections = document.querySelectorAll('section, .services-section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        };
    });
};
// Deactivate ALL links ONCE per scroll-check
navLinks.forEach(links => {
    links.classList.remove('active');
});

// Then, find and activate the correct link ONCE
let activeLink = document.querySelector('header nav a[href*=' + id + ']');
if (activeLink) {
    activeLink.classList.add('active');
}