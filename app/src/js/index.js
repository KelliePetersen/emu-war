import MobileMenu from './modules/MobileMenu';
import DynamicNav from './modules/DynamicNav'; 
import BackToTop from './modules/BackToTop';

const mobileMenu = new MobileMenu();
const dynamicNav = new DynamicNav();
const backToTop = new BackToTop();

const options = {
  delay: 100,
  duration: 1000,
  distance: "100px",
  easing: "ease-in-out"
};

let sr = ScrollReveal(options);

if (document.documentElement.clientWidth > 719) {
  sr.reveal(".hero__text", { distance: "10px" });
  sr.reveal(".hero__quote", { distance: "10px", delay: 1500 });
  sr.reveal(".hero__tribute", { distance: "10px", delay: 1500 });
}

if (document.documentElement.clientWidth > 1279 && document.documentElement.clientHeight > 800) {
  sr.reveal(".intro__image", {
    origin: "right",
    delay: 600,
    viewOffset: { right: -400 }
  });
  sr.reveal(".final-battle__image", {
    origin: "right",
    delay: 600,
    viewOffset: { bottom: -300 }
  });
  sr.reveal(".scroll-reveal-left", { origin: "left", interval: 300 });
  sr.reveal(".scroll-reveal-right", { origin: "right", interval: 300 });
  sr.reveal(".scroll-reveal-top", { interval: 300 });
}