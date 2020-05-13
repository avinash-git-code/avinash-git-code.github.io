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

    $('.cat-option').click(function(){
        $(this).next('ul').slideToggle();
        // if($(this).hasClass('open')){
        //     $('.cat-section h2').removeClass('open');
        //     $('.fa-plus').show();
        //     $('.fa-minus').hide();
        //     $('.cat-section ul').slideUp();
        // }else{
        //     $('.cat-section h2').addClass('open');
        //     $('.fa-plus').hide();
        //     $('.fa-minus').show();
        //     $('.cat-section ul').slideDown();
        // }
    });

    $('.all-video-link').click(function(){
        if($(this).parents('ul').hasClass('show-row-wise')){
            $(this).parents('ul').removeClass('show-row-wise');
            $(this).html('All video link <i class="fa fa-arrow-right"></i>');
        }else{
            $(this).parents('ul').addClass('show-row-wise');
            $(this).html('Collapse <i class="fa fa-arrow-right"></i>');
        }
        // $(this).parents('ul').addClass('show-row-wise');
    })

    $('.prod-cat-all-list').click(function(){
        if($(this).parents('ul').hasClass('two-col-wise')){
            $(this).parents('ul').removeClass('two-col-wise');
            $(this).html('All video link <i class="fa fa-arrow-right"></i>');
        }else{
            $(this).parents('ul').addClass('two-col-wise');
            $(this).html('Collapse <i class="fa fa-arrow-right"></i>');
        }
    
    })

    if( $(window).width() < 768 ){
        $(".slider").slick({
            infinite: true,
            // arrows: false,
            dots: false,
            autoplay: false,
            speed: 9000,
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
    }

   
    

    var isMobile = {
        Android: function() {
        return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
        };
        $(document).on("click", '.whatsapp', function() {
        if( isMobile.any() ) {
        var text = $(this).attr("data-text");
        var url = $(this).attr("data-link");
        var message = encodeURIComponent(text) + " - " + encodeURIComponent(url);
        var whatsapp_url = "whatsapp://send?text=" + message;
        window.location.href = whatsapp_url;
        } else {
        alert("Please share this article in mobile device");
        }
        });

       

});



//   $(document).ready(function() {
//      $('.whatsapp').on("click", function(e) {
//         if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//             var article = $(this).attr("data-text");
//             var weburl = $(this).attr("data-link");
//             var whats_app_message = encodeURIComponent(document.URL);
//             var whatsapp_url = "whatsapp://send?text="+whats_app_message;
//             window.location.href= whatsapp_url;
//         }else{
//              alert('You Are Not On A Mobile Device. Please Use This Button To Share On Mobile');
//         }
//      });
//   });
