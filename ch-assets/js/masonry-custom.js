// Masonry Grid 
$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: 0,
  percentPosition: true
});


// init Masonry
var $grid = $('.grid').masonry({
  // options...
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});