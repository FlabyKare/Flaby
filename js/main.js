$(document).ready(function(){
let burger = $('.burger')
let menu_wrapper = $('.menu_wrapper')
let body = $('body')
let body_cont = $('.body_container')

burger.click(function(){
    menu_wrapper.toggleClass('menu_open')
    burger.toggleClass('transform_rotate')
    body.toggleClass('overflow_hidden')
    body_cont.toggleClass('d-none')

})

});

