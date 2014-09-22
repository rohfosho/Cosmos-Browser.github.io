/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

$(document).ready(function() {
  $('#starfield').particleground({
    dotColor: '#DDDDDD',
    lineColor: '#AAAAAA',
    particleRadius: 4,
    proximity: 75
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});