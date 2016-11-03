/**
 * Created by reza on 11/3/16.
 */

var $div = '<div class="content delete"></div>';
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

var img_array = ['img/above-adventure-aerial-air.jpg', 'img/black-and-white-city-skyline-buildings.jpg'];
var t = 0;
setInterval(function () {
    t ++;
    $('.big-img').attr('src', img_array[t % 2]);
}, 2000);

$('.plus').click(function () {
    $('.holder').append($div);
    $('.content').addClass('border');
});

$('.delete').click(function () {
    $(this).hide();
});