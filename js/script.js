const $internalLinks = $('a[href^="#"]');
const $backButtons = $('.backIcon');
const $content = $('.content');
const $menuButton = $('.menuButton');
const $overlay = $('.overlay');
const $menu = $('.mainMenu');
const $body = $(document.body);

function openSlide($target) {
  $(document.body).removeClass('menuOpen');
  const $img = $target
    .removeClass('hide')
    .find('img')
  ;
  if ($img.length) {
    $img.elements[0].src = $img.elements[0].dataset.src;
    $img.elements[0].srcset = $img.elements[0].dataset.srcset;
  }
  $('.is-open').removeClass('is-open');
  setTimeout(() => $target.addClass('is-open'), 10);
  setTimeout(() => $target.focus(), 500);
}

$menuButton.on('click', (e) => $body.toggleClass('menuOpen'));

$overlay.on('click', (e) => $body.removeClass('menuOpen'));

//Open slide at landging
if (window.location.hash.length) {
  openSlide($(window.location.hash));
}

$(window).on("hashchange", function() {
  var $target;
  if (window.location.hash.length) {
    $target = $(window.location.hash);
  } else {
    $target = $('#home');
  }
  openSlide($target);
});

$internalLinks.on('click', (e) => {
  e.preventDefault();
  window.location.hash = e.currentTarget.hash; 
});

$backButtons.on('click', (e) => {
  e.preventDefault();
  const $parentSlide = $(e.currentTarget.parentElement);
  const $prevSlide = $parentSlide
    .removeClass('is-open')
    .prev('.is-open')
  ;
  window.location.hash = $prevSlide.elements[0].id;
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