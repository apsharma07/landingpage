// JavaScript to toggle the mobile menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  console.log('Hamburger clicked');
  navLinks.classList.toggle('active');
});
