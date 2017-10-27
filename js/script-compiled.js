'use strict';

var $internalLinks = $('a[href^="#"]');
var $backButtons = $('.backIcon');
var $content = $('.content');
var $menuButton = $('.menuButton');
var $overlay = $('.overlay');
var $menu = $('.mainMenu');
var $body = $(document.body);

$menuButton.on('click', function (e) {
  return $body.toggleClass('menuOpen');
});

$overlay.on('click', function (e) {
  return $body.removeClass('menuOpen');
});

$internalLinks.on('click', function (e) {
  e.preventDefault();
  var $target = $(e.currentTarget.hash);
  $body.removeClass('menuOpen');
  var $img = $target.removeClass('hide').find('img');

  if ($img.length) {
    $img.attr('src', $img.data('src'));
    $img.attr('srcset', $img.data('srcset'));
  }

  $target.nextAll('.is-open').removeClass('is-open');
  setTimeout(function () {
    return $target.addClass('is-open');
  }, 10);
  setTimeout(function () {
    return $target.focus();
  }, 500);
});

$backButtons.on('click', function (e) {
  e.preventDefault();
  var $parentSlide = $(e.currentTarget.parentElement);
  var $last = $parentSlide.removeClass('is-open').prevAll('.is-open').last().focus();
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
