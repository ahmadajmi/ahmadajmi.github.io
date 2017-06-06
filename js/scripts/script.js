$(document).ready(function() {

  'use strict';

  // Responsive videos

  $('.c-content, .c-note-card').fitVids();

  // AnchorJS

  anchors.add('.c-content h3, .c-content h4');

  // Off Canvas menu

  var isOffCanvasExpanded = false;

  $('.js-off-canvas-toggle').click(function(e) {
    if (!isOffCanvasExpanded) {
       isOffCanvasExpanded = true;
      $(this).attr('aria-expanded', true);
    } else {
      isOffCanvasExpanded = false;
      $(this).attr('aria-expanded', false);
    }

    $('.js-off-canvas-container, .js-off-canvas-content').toggleClass('is-active');
  });

  // Images Fade In

  $('.js-fadein').viewportChecker({
    classToAdd: 'is-inview',
    offset: 100,
    removeClassAfterAnimation: true
  });
});