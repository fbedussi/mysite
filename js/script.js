const $internalLinks = $('a[href^="#"]');
const $backButtons = $('.backIcon');
const $content = $('.content');
const $menuButton = $('.menuButton');
const $overlay = $('.overlay');
const $menu = $('.mainMenu');
const $body = $(document.body);

$menuButton.on('click', (e) => $body.toggleClass('menuOpen'));

$overlay.on('click', (e) => $body.removeClass('menuOpen'));

$internalLinks.on('click', (e) => {
  e.preventDefault();
  const $target = $(e.currentTarget.hash);
  $body.removeClass('menuOpen');
  const $img = $target
    .removeClass('hide')
    .find('img')
  ;

  if ($img.length) {
    $img.attr('src', $img.data('src'));
    $img.attr('srcset', $img.data('srcset'));
  }

  $target.nextAll('.is-open').removeClass('is-open');
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
    .focus()
  ;
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

var font300 = new FontFaceObserver('Source Sans Pro', {
  weight: 300
});

var font600 = new FontFaceObserver('Source Sans Pro', {
  weight: 600
});

font300.load().then(function () {
  $body.addClass('font300Loaded')
});

font600.load().then(function () {
  $body.addClass('font600Loaded')
});