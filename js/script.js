$(document).ready(function(){
   $('.menu__open-close, .menu__burger').click(function(event){
       $('.menu__open').toggleClass('active');
   });
});

const swiper = new Swiper('.s6__swiper-container', {
   spaceBetween: 30,

   pagination: {
     el: '.s6__swiper-pagination',
     clickable: true,
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.s6__swiper-button-next',
     prevEl: '.s6__swiper-button-prev',
   },
 });

 const swiperComments = new Swiper('.s8__swiper-container', {
   spaceBetween: 30,

   pagination: {
     el: '.s8__swiper-pagination',
     clickable: true,
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.s8__swiper-button-next',
     prevEl: '.s8__swiper-button-prev',
   },
 });