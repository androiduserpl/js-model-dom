//finkcja document.ready() wersja skrócona
$(function(){
    'use strict';
    
    //zmienne:
    var slider = $('#slider');
    var slideshow = $('.slide-show');
    var slideCount = $('.single-slide').length;
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;
    
    slideshow.css('width', slideCount*100 + '%');
    
    
});