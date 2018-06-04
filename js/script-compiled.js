'use strict';

var $internalLinks = $('a[href^="#"]');
var $backButtons = $('.backIcon');
var $content = $('.content');
var $menuButton = $('.menuButton');
var $overlay = $('.overlay');
var $menu = $('.mainMenu');
var $body = $(document.body);
var transitionDuration = 500;

function openSlide($target) {
  $body.removeClass('menuOpen');
  var $img = $target.find('img');
  if ($img.length) {
    var img = $img.get(0);
    img.src = img.dataset.src;
    if (img.dataset.srcset) {
      img.srcset = img.dataset.srcset;
    }
  }

  $target.removeClass('hide');

  var $nextOpen = $target.nextAll('.is-open').removeClass('is-open');

  setTimeout(function () {
    return $target.addClass('is-open');
  }, 50);
  setTimeout(function () {
    $target.focus();
    $nextOpen.addClass('hide');
  }, transitionDuration);
}

$menuButton.on('click', function (e) {
  return $body.toggleClass('menuOpen');
});

$overlay.on('click', function (e) {
  return $body.removeClass('menuOpen');
});

//Open slide at landging
if (window.location.hash.length) {
  openSlide($(window.location.hash));
}

$(window).on("hashchange", function () {
  var $target;
  if (window.location.hash.length) {
    $target = $(window.location.hash);
  } else {
    $target = $('#home');
  }
  openSlide($target);
});

$internalLinks.on('click', function (e) {
  e.preventDefault();
  window.location.hash = e.currentTarget.hash;
});

$backButtons.on('click', function (e) {
  e.preventDefault();
  var $parentSlide = $(e.currentTarget.parentElement);
  var $prevSlide = $parentSlide.removeClass('is-open').prevAll('.is-open').last();
  window.location.hash = $prevSlide.get(0).id;
  setTimeout(function () {
    return $parentSlide.addClass('hide');
  }, 500);
});

$body.on('keyup', function (e) {
  if (e.keyCode === 9) {
    $body.addClass('keyboardNavigation');
  }
}).on('click', function () {
  return $body.removeClass('keyboardNavigation');
});

var font300 = new FontFaceObserver('Source Sans Pro', {
  weight: 300
});

var font600 = new FontFaceObserver('Source Sans Pro', {
  weight: 600
});

font300.load().then(function () {
  $body.addClass('font300Loaded');
});

font600.load().then(function () {
  $body.addClass('font600Loaded');
});
