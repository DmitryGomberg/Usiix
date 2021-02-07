$(document).ready(function(){
   $('.menu__open-close, .menu__burger').click(function(event){
       $('.menu__open').toggleClass('active');
   });
});

const swiper = new Swiper('.s6__swiper-container', {
   spaceBetween: 30,

   pagination: {
     el: '.swiper-pagination',
     clickable: true
   },
   
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });