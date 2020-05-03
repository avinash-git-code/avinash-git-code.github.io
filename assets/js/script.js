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
});