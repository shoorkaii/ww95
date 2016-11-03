/**
 * Created by reza on 11/3/16.
 */

$('#text').css('background-color','blue');

var my_text = $('#my_text');

var w = my_text.width();
var cnt = 1;

$('#text').click(function () {
    cnt++;
    my_text.css('width', w * cnt);
    // $('#my_text').html($('input').val());

});