/**
 * Starfieellldss
 * @author Chen Ye
 * based on particlefield from @mrjnicol
 *
 * Note:  Dot color doesn't do anything right now because I am a dirty haxxor
 */

$(document).ready(function() {
  $('#starfield').particleground({
    dotColor: '#DDDDDD',
    lineColor: 'rgba(255, 255, 255, .2)',
    particleRadius: 4,
    proximity: 75,
    minRadiusPct: .5,
    maxRadiusPct: 2.2,
    minOpacity: .5,
    maxOpacity: .8
  });
});