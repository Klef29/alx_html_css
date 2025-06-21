document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.getElementById('nav-links');
  const hamburgerToggle = document.getElementById('hamburger-toggle');

  hamburgerToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburgerToggle.classList.toggle('show-close');
  });
});
