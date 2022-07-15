$(document).ready(function(){
let burger = $('.burger')
let menu_wrapper = $('.menu_wrapper')
let body = $('body')
let burger_open = $('.burger_open')

burger.click(function(){
    menu_wrapper.toggleClass('menu_open')
    burger.toggleClass('transform_rotate')
    body.toggleClass('overflow_hidden')

})

});

