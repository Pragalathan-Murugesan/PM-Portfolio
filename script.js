// Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}
// Close menu after clicking a link (mobile only)
const navItems = document.querySelectorAll("#nav-links a");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove("open");
    }
  });
});

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach((r) => {
    const rect = r.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      r.classList.add("visible");
    }
  });
});

// Initial reveal for elements already in viewport
revealOnLoad();
function revealOnLoad() {
  reveals.forEach((r) => {
    const rect = r.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      r.classList.add("visible");
    }
  });
}

// Typed Effect
const words = [
  "IoT Connectivity",
  "Cloud-Native Microservices",
  "Secure REST APIs",
  "Real-Time Data Streaming",
  "Healthcare System Automation",
];
let i = 0,
  j = 0,
  current = "",
  isDeleting = false;

function type() {
  current = words[i];
  const el = document.getElementById("typed-text");
  if (!el) return;

  el.textContent = current.substring(0, j);
  j = isDeleting ? j - 1 : j + 1;

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1400);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 45 : 85);
  }
}
type();

// IoT Circuit Flow Animation
const iotContainer = document.getElementById("iot-animation");
if (iotContainer) {
  iotContainer.innerHTML = `
  <svg viewBox="0 0 1000 600" preserveAspectRatio="none">
    <polyline class="circuit-line" points="0,300 200,300 300,200 500,200 650,350 900,350 1000,200"></polyline>
    <polyline class="circuit-line" points="100,500 300,450 500,480 700,420 900,500"></polyline>
    <polyline class="circuit-line" points="50,100 200,150 400,120 650,180 850,130 1000,180"></polyline>
  </svg>`;
}
