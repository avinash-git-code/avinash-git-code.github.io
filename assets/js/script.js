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

    $(".slider").slick({
        infinite: true,
        // arrows: false,
        dots: false,
        autoplay: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 18 18" role="img" aria-label="Previous" focusable="false" style="height: 19px; width: 19px; display: block; fill: rgb(255, 255, 255);"><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fill-rule="evenodd"></path></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 18 18" role="img" aria-label="Next" focusable="false" style="height: 19px; width: 19px; display: block; fill: rgb(255, 255, 255);"><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fill-rule="evenodd"></path></svg></button>'

      });
      
       //ticking machine
          var percentTime;
          var tick;
          var time = 1;
          var progressBarIndex = 0;
      
          $('.progressBarContainer .progressBar').each(function(index) {
              var progress = "<div class='inProgress inProgress" + index + "'></div>";
              $(this).html(progress);
          });
      
          function startProgressbar() {
              resetProgressbar();
              percentTime = 0;
              tick = setInterval(interval, 10);
          }
      
          function interval() {
              if (($('.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
                  progressBarIndex = $('.slider .slick-track div[aria-hidden="false"]').data("slickIndex");
                  startProgressbar();
              } else {
                  percentTime += 1 / (time + 5);
                  $('.inProgress' + progressBarIndex).css({
                      width: percentTime + "%"
                  });
                  if (percentTime >= 100) {
                      $('.single-item').slick('slickNext');
                      progressBarIndex++;
                      if (progressBarIndex > 2) {
                          progressBarIndex = 0;
                      }
                      startProgressbar();
                  }
              }
          }
      
          function resetProgressbar() {
              $('.inProgress').css({
                  width: 0 + '%'
              });
              clearInterval(tick);
          }
          startProgressbar();
          // End ticking machine
      
          $('.progressBarContainer div').click(function () {
              clearInterval(tick);
              var goToThisIndex = $(this).find("span").data("slickIndex");
              $('.single-item').slick('slickGoTo', goToThisIndex, false);
              startProgressbar();
          });

});