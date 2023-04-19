
  
  const buttonEl=document.querySelector('.button');
  const overlayEL=document.querySelector('.overlay');
  const crossEl =document.querySelector('.cross');
/*включение попап*/
  buttonEl.addEventListener('click', function (e) {overlayEL.classList.add('visible')});
/*выключение крестиком*/
crossEl.addEventListener('click', function closepopap() {overlayEL.classList.remove('visible')});
/*выключение эскепом*/
document.addEventListener('keydown', function Escape(event) {if (event.key === 'Escape') {closepopap();}});
/*выключение оверлеем*/
overlayEL.addEventListener('click', function Overlay(event) {if (event.target === overlayEL) {closepopap(); }});

const burgerEl=document.querySelector('.button-burger')
const menuEL=document.querySelector('.header')
burgerEl.addEventListener('click', function openburger() {menuEL.classList.add('visible-burger')});
const crossredEl=document.querySelector('.crossred')
crossredEl.addEventListener('click', function closeburger() {menuEL.classList.remove('visible-burger')});