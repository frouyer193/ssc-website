// Protect social media links from bots
document.querySelectorAll('[data-link]').forEach(link => {
  link.href = atob(link.getAttribute('data-link'));
});




