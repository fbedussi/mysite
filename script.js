const $internalLinks = $('a[href^="#"]');
const $backButtons = $('.backIcon');
const $content = $('.content');
const $menuButton = $('.menuButton');
const $overlay = $('.overlay');
const $menu = $('.mainMenu');
const $body = $(document.body);

$menuButton.on('click', (e) => document.body.classList.toggle('menuOpen'));

$overlay.on('click', (e) => document.body.classList.remove('menuOpen'));


$internalLinks.on('click', (e) => {
  e.preventDefault();
  const $target = $(e.currentTarget.hash);
  $(document.body).removeClass('menuOpen');
  const $img = $target
    .removeClass('hide')
    .find('img')
  ;
  if ($img.length) {
    $img.elements[0].src = $img.elements[0].dataset.src;
  }
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

$body
  .on('keyup', (e) => {
    if (e.keyCode = 9) {
      $body.addClass('keyboardNavigation')
    }
  })
  .on('click', () => $body.removeClass('keyboardNavigation'))
;