const internalLink = [].slice.call(document.querySelectorAll('a[href^="#"]'));
const backButtons = [].slice.call(document.querySelectorAll('.backIcon'));
const content = document.querySelector('.content');
const menuButton = document.querySelector('.menuButton');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.mainMenu');

menuButton.addEventListener('click', (e) => document.body.classList.toggle('menuOpen'));

overlay.addEventListener('click', (e) => document.body.classList.remove('menuOpen'));


internalLink.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(e.currentTarget.hash);
    document.body.classList.remove('menuOpen');
    target.focus();
    target.classList.remove('hide');
    setTimeout(() => target.classList.add('is-open'), 10);
  })  
});

backButtons.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      const parentSlide = e.currentTarget.parentElement;
      parentSlide.classList.remove('is-open');
      //TODO: mange focus
      setTimeout(() => parentSlide.classList.add('hide'), 500);
    })  
  });