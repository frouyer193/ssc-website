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

// Section Map and Scroll Down
const sections = ['home', 'events', 'join-us', 'contact'];
const sectionMap = document.getElementById('section-map');

// Add scroll up arrow
const upArrow = document.createElement('div');
upArrow.className = 'scroll-up-map';
upArrow.innerHTML = '<i class="fas fa-chevron-up"></i>';
upArrow.addEventListener('click', () => {
  const active = document.querySelector('.section-indicator.active');
  if (active) {
    const currentIndex = sections.indexOf(active.dataset.section);
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      document.getElementById(sections[prevIndex]).scrollIntoView({ behavior: 'smooth' });
    }
  }
});
sectionMap.appendChild(upArrow);

// Create indicators
sections.forEach(id => {
  const indicator = document.createElement('div');
  indicator.className = 'section-indicator';
  indicator.dataset.section = id;
  indicator.addEventListener('click', () => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  });
  sectionMap.appendChild(indicator);
});

// Add scroll down arrow
const arrow = document.createElement('div');
arrow.className = 'scroll-down-map';
arrow.innerHTML = '<i class="fas fa-chevron-down"></i>';
arrow.addEventListener('click', () => {
  const active = document.querySelector('.section-indicator.active');
  if (active) {
    const currentIndex = sections.indexOf(active.dataset.section);
    const nextIndex = currentIndex + 1;
    if (nextIndex < sections.length) {
      document.getElementById(sections[nextIndex]).scrollIntoView({ behavior: 'smooth' });
    }
  }
});
sectionMap.appendChild(arrow);

// Update active indicator on scroll
function updateActiveIndicator() {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  sections.forEach((id, index) => {
    const section = document.getElementById(id);
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top + scrollY;
    const sectionBottom = sectionTop + rect.height;

    if (scrollY >= sectionTop - windowHeight / 2 && scrollY < sectionBottom - windowHeight / 2) {
      document.querySelectorAll('.section-indicator').forEach(ind => ind.classList.remove('active'));
      document.querySelector(`.section-indicator[data-section="${id}"]`).classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveIndicator);
updateActiveIndicator(); // Initial call
