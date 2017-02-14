

$(document).ready(function() {

    // Smooth Scroll
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
          }, 500);
            return false;
          }
        }
      });
    });

    // Read More Toggle
    $(function() {
        // Read more
        $('.read-more-toggle').on('click', function() {

            var $textBlock = $(this).parent().parent().find('.read-more');
            var $button = $(this);

            $textBlock.toggleClass('visible');
            $button.toggleClass('open');

            if ($textBlock.hasClass('visible')) {
                $button.html('Read Less');
            } else {
                $button.html('Read More');
            }

        });
    });

    // Scroll Nav
    $(function() {


        var MQL = 1170;
        var $window = $(window);
        var $navBar = $('.navbar-custom');

        if ($window.width() > MQL) {
            $window.on('scroll', function() {
                if ($window.scrollTop() > 0) {
                    $navBar.addClass('is-visible is-fixed');
                } else {
                    $navBar.removeClass('is-visible is-fixed');
                }
            });
        }
        // if ($(window).width() > MQL) {

            // var headerHeight = $('.navbar-custom').height();
            // $(window).on('scroll', {
            //         previousTop: 0
            //     },
            //     function() {
            //         var currentTop = $(window).scrollTop();
            //         //check if user is scrolling up
            //         if (currentTop < this.previousTop) {
            //             //if scrolling up...
            //             if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
            //                 $('.navbar-custom').addClass('is-visible');
            //             } else {
            //                 $('.navbar-custom').removeClass('is-visible is-fixed');
            //             }
            //         } else if (currentTop > this.previousTop) {
            //             //if scrolling down...
            //             $('.navbar-custom').removeClass('is-visible');
            //             if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
            //         }
            //         this.previousTop = currentTop;
            //     });
        // }


    });




});
