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
    $img.attr('src', $img.data('src'));
    $img.attr('srcset', $img.data('srcset'));
  }

  $target.removeClass('hide').nextAll('.is-open:not(#home)').removeClass('is-open');

  setTimeout(function () {
    return $target.addClass('is-open');
  }, 50);
  setTimeout(function () {
    return $target.focus();
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
  var $prevSlide = $parentSlide.removeClass('is-open').prevAll('.is-open').first();
  window.location.hash = $prevSlide.attr('id');
  setTimeout(function () {
    return $parentSlide.addClass('hide');
  }, 500);
});

$body.on('keyup', function (e) {
  if (e.keyCode = 9) {
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
