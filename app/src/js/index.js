import MobileMenu from './modules/MobileMenu';
import DynamicNav from './modules/DynamicNav';
import ScrollReveal from 'scrollreveal';

const mobileMenu = new MobileMenu();
const dynamicNav = new DynamicNav();

const options = {
  delay: 100,
  duration: 2000,
  distance: '100px',
}

let sr = ScrollReveal(options);

sr.reveal('.scroll-reveal-delay', { origin: 'right', delay: 800, viewOffset: { right: -400 } })
sr.reveal('.scroll-reveal-left', { origin: 'left', interval: 500 });
sr.reveal('.scroll-reveal-right', { origin: 'right', interval: 500 });
sr.reveal('.scroll-reveal-top', { interval: 300 });