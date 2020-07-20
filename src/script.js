const $internalLinks = $('a[href^="#"]');
const $backButtons = $('.backIcon');
const $content = $('.content');
const $menuButton = $('.menuButton');
const $overlay = $('.overlay');
const $menu = $('.mainMenu');
const $body = $(document.body);
const transitionDuration = 500;

function openSlide($target) {
  $body.removeClass('menuOpen');
  const $img = $target
    .find('img')
  ;
  if ($img.length) {
    const img = $img.get(0);
    img.src = img.dataset.src;
    if (img.dataset.srcset) {
      img.srcset = img.dataset.srcset;
    }
  }

  $target.removeClass('hide');

  const $nextOpen = $target
    .nextAll('.is-open')
    .removeClass('is-open')
  ;
  
  setTimeout(() => $target.addClass('is-open'), 50);
  setTimeout(() => {
    $target.focus();
    $nextOpen.addClass('hide');
  }, transitionDuration);
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
    .prevAll('.is-open')
    .last()
  ;
  window.location.hash = $prevSlide.get(0).id;
  setTimeout(() => $parentSlide.addClass('hide'), 500);
});

$body
  .on('keyup', (e) => {
    if (e.keyCode === 9) {
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
