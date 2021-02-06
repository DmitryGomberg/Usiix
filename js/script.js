$(document).ready(function(){
   $('.menu__open-close, .menu__burger').click(function(event){
       $('.menu__open').toggleClass('active');
       $('body').toggleClass('lock');
   });
});