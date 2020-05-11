
let hero = document.querySelector('.hero');
let slider = document.querySelector('.slider');
let logo = document.querySelector('#logo');
let hamburger = document.querySelector('.hamburger');
let headLine = document.querySelector('.headLine');

let tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
  .fromTo(hero, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut })
  .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut},"-=1.2")
  .fromTo(logo, 1.2, {opacity: 0, x:30},{opacity:1,x:0 },"-=0.1")
  .fromTo(hamburger, 1.2, {opacity: 0, x:30},{opacity:1,x:0 },"-=0.1")
  .fromTo(headLine, 1.2, {opacity: 0, x:30},{opacity:1,x:0 },"-=0.1");