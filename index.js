const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  console.log('Hamburger clicked');
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});
ScrollReveal().reveal('.home-content,heading', {
  origin: 'top',
  distance: '50px',
  duration: 1000,
  easing: 'ease-in-out',
  reset: true
});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', {
  origin: 'bottom',
  distance: '50px',
  duration: 1200,
  easing: 'ease-in-out',
  reset: true
});
ScrollReveal().reveal('.home-contact h1, .about-img', {
  origin: 'left',
  distance: '60px',
  duration: 1300,
  easing: 'ease-in-out',
  reset: true
});
ScrollReveal().reveal('.home-contact, .about-content', {
  origin: 'right',
  distance: '60px',
  duration: 1300,
  easing: 'ease-in-out',
  reset: true
});
  ScrollReveal().reveal('.portfolio-container, .contact', {
    origin: 'left',
    distance: '60px',
    duration: 1300,
    easing: 'ease-in-out',
    reset: true
  });
function activateNavLink() {
  let fromTop = window.scrollY;
  let windowHeight = window.innerHeight;
  let isLinkActive = false;
  navLinks.forEach(link => {
    let section = document.querySelector(link.getAttribute('href'));
    if (fromTop >= section.offsetTop - windowHeight / 2 && fromTop < section.offsetTop + section.offsetHeight - windowHeight / 2) {
      link.classList.add('active');
      isLinkActive = true;
    } else {
      link.classList.remove('active');
    }
  });
  if (!isLinkActive) {
    navLinks.forEach(link => link.classList.remove('active'));
  }
}
window.addEventListener('scroll', activateNavLink);
let typed=new Typed('#typedText',{
  strings: ['Full-Stack developer','ML Engineer','Data Analytics Engineer'],
  typeSpeed: 70,
  loop: true,
})