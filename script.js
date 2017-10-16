const $internalLinks = $('a[href^="#"]');
const $backButtons = $('.backIcon');
const $content = $('.content');
const $menuButton = $('.menuButton');
const $overlay = $('.overlay');
const $menu = $('.mainMenu');

$menuButton.on('click', (e) => document.body.classList.toggle('menuOpen'));

$overlay.on('click', (e) => document.body.classList.remove('menuOpen'));


$internalLinks.on('click', (e) => {
  e.preventDefault();
  const $target = $(e.currentTarget.hash);
  $(document.body).removeClass('menuOpen');
  $target.removeClass('hide');
  setTimeout(() => $target.addClass('is-open'), 10);
  setTimeout(() => $target.focus(), 500);
});

$backButtons.on('click', (e) => {
  e.preventDefault();
  const $parentSlide = $(e.currentTarget.parentElement);
  var $last = $parentSlide
    .removeClass('is-open')
    .prevAll('.is-open')
    .last()
    //.focus()
  ;
  console.log($last);
  $last.focus();
  setTimeout(() => $parentSlide.addClass('hide'), 500);
});