"use strict";

window.addEventListener("DOMContentLoaded",()=>{
    const menu = document.querySelector('.header__mobile'),
          burder = document.querySelector('.header__burger'),
          close = document.querySelector('.header__mobile-close')
        
    burder.addEventListener('click', ()=>{
        menu.classList.toggle('active');
    })
    close.addEventListener('click', ()=>{
        menu.classList.toggle('active');
    })

})
$(document).ready(function(){
    $('.banner__slider').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        arrows: false,
        draggable:false,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 8000,
    })
});