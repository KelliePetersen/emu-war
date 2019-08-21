import MobileMenu from './modules/MobileMenu';
import DynamicNav from './modules/DynamicNav'; 
import BackToTop from './modules/BackToTop';
import RevealonScroll from './modules/RevealonScroll';

const mobileMenu = new MobileMenu();
const dynamicNav = new DynamicNav();
const backToTop = new BackToTop();
const revealonScroll = new RevealonScroll();

revealonScroll.sr.reveal(".hero__text", { distance: "10px" });
revealonScroll.sr.reveal(".hero__quote", { distance: "10px", delay: 1500 });
revealonScroll.sr.reveal(".hero__tribute", { distance: "10px", delay: 1500 });

if (document.documentElement.clientWidth > 1279 && document.documentElement.clientHeight > 800) {
  revealonScroll.sr.reveal(".intro__image", {
    origin: "right",
    delay: 600,
    viewOffset: { right: -400 }
  });
  revealonScroll.sr.reveal(".final-battle__image", {
    origin: "right",
    delay: 600,
    viewOffset: { bottom: -300 }
  });
  revealonScroll.sr.reveal(".scroll-reveal-left", { origin: "left", interval: 300 });
  revealonScroll.sr.reveal(".scroll-reveal-right", { origin: "right", interval: 300 });
  revealonScroll.sr.reveal(".scroll-reveal-top", { interval: 300 });
}