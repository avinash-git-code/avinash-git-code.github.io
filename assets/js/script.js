$(document).ready(function(){
    $('.menu-icon').click(function(){
        if($(this).hasClass('open')){
            $('.menu-icon').removeClass('open');
            $('.fa-bars').show();
            $('.fa-times').hide();
            $('.mobile-menu').slideUp();
        }else{
            $('.menu-icon').addClass('open');
            $('.fa-bars').hide();
            $('.fa-times').show();
            $('.mobile-menu').slideDown();
            
        }
    });

    $('.cat-section h2').click(function(){
        if($(this).hasClass('open')){
            $('.cat-section h2').removeClass('open');
            $('.fa-plus').show();
            $('.fa-minus').hide();
            $('.cat-section ul').slideUp();
        }else{
            $('.cat-section h2').addClass('open');
            $('.fa-plus').hide();
            $('.fa-minus').show();
            $('.cat-section ul').slideDown();
        }
    });

});