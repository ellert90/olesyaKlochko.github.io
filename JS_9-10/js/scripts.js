$(function() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });


      $('.basic').fancySelect();

      var $link = $('#sub');
      $link.hover(
            function(){
                $(this).children('.submenu').stop().slideDown(500);
            },
            function(){
                $(this).children('.submenu').stop().slideUp(500);
            });

            $("#color-animate").click(function(){
                    $(this).animate({
                           backgroundColor: "pink"
                      }, 500 );
                    });

                    var $subLink = $('.submenu>li');
                    $subLink.hover(
                          function(){
                              $(this).stop().animate({
                            		backgroundColor:"pink",
                              }, 200 );
                          },
                          function(){
                            $(this).stop().animate({
                              backgroundColor:"#90d1db",
                            }, 200 );
                          });

            $('.jquery-input').styler();


    });
