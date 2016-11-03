/**
 * Created by reza on 11/3/16.
 */

$('#text').css('background-color','blue');

var my_text = $('#my_text');

var w = my_text.width();
var cnt = 1;


$('.shape').click(function () {
    console.log($(this).width());
});

$('#text').click(function () {
    console.log($(this).html());
    // cnt++;
    // my_text.css('width', w * cnt);
    // $('#my_text').html($('input').val());
});

$('.thumb').click(function () {
    $('.big-img').attr('src', $(this).attr('src'));
});