// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

$(document).ready(function() {
    // Move the arrow so it points to the first project card.
    $('div.arrow-select').each(function() { $(this).css('margin-left', pos(0) + 'px'); });
});

$('div.project').click(function() {
        console.log('clicked');
        // $(this).css('margin-left', pos($(this).index()) + 'px');
});

// CARD - the card selected [0, num_projects)
var pos = function(card) {
    return 208 * card + 100;
};
