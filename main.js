// Protect social media links from bots
document.querySelectorAll('[data-link]').forEach(link => {
  link.href = atob(link.getAttribute('data-link'));
});

// Mobile Menu Toggle
const hamburgerMenu = document.getElementById('hamburger-menu');
const mainNav = document.getElementById('main-nav');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburgerMenu) {
  hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    mainNav.classList.toggle('active');
  });

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburgerMenu.classList.remove('active');
      mainNav.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) {
      hamburgerMenu.classList.remove('active');
      mainNav.classList.remove('active');
    }
  });
}
