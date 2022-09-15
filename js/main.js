(function ($) {

    "use strict"


    ////////////////////////////////////////////////////
    //  Scroll To Top Js

    function smoothSctollTop() {

        $('.smooth-scroll a').on('click', function (event) {

            var target = $(this.getAttribute('href'));

            if (target.length) {

                event.preventDefault();

                $('html, body').stop().animate({

                    scrollTop: target.offset().top - 0

                }, 1500);

            }

        });

    }

    smoothSctollTop();



    // Show or hide the sticky footer button

    $(window).on('scroll', function (event) {

        if ($(this).scrollTop() > 600) {

            $('#scroll').fadeIn(200)

        } else {

            $('#scroll').fadeOut(200)

        }

    });


    //Animate the scroll to yop

    $('#scroll').on('click', function (event) {

        event.preventDefault();



        $('html, body').animate({

            scrollTop: 0,

        }, 1500);

    });




    ////////////////////////////////////////////////////

    //  Project Slider Js


    $('.project-slider-active').owlCarousel({

        loop: true,

        margin: 20,

        autoplay: false,

        autoplayTimeout: 3000,

        smartSpeed: 500,

        items: 6,

        navText: ['<button><i class="fal fa-angle-left"></i></button>', '<button><i class="fal fa-angle-right"></i></button>'],

        nav: true,

        dots: false,

        responsive: {

            0: {

                items: 1

            },

            767: {

                items: 2

            },

            992: {

                items: 2

            },

            1200: {

                items: 3

            },

            1600: {

                items: 4

            }

        }

    });


    ////////////////////////////////////////////////////

    //  Post Box Slider Js

    $('.postbox-gallery').owlCarousel({

        loop: true,

        margin: 0,

        autoplay: false,

        autoplayTimeout: 3000,

        smartSpeed: 500,

        items: 6,

        navText: ['<button><i class="fas fa-arrow-left"></i></button>', '<button><i class="fas fa-arrow-right"></i></button>'],

        nav: true,

        dots: false,

        responsive: {

            0: {

                items: 1

            },

            767: {

                items: 1

            },

            992: {

                items: 1

            }

        }

    });



    ////////////////////////////////////////////////////

    //  Post Box Slider Js

    $('.testimonial-slider-2-active').owlCarousel({

        loop: true,

        margin: 30,

        autoplay: false,

        autoplayTimeout: 3000,

        smartSpeed: 500,

        items: 6,

        navText: ['<button><i class="fas fa-angle-left"></i></button>', '<button><i class="fas fa-angle-right"></i></button>'],

        nav: true,

        dots: false,

        responsive: {

            0: {
                items: 1
            },

            767: {

                items: 1

            },

            992: {
                items: 2
            }
        }
    });




    ////////////////////////////////////////////////////

    // Sidebar Js


    $(".info-toggle-btn").click(function () {
        $(".info-area").addClass("info-opened");
    });

    $(".info-close-icon").click(function () {
        $(".info-area").removeClass("info-opened");
    });

    $(".info-toggle-btn").click(function () {
        $(".body-overlay").addClass("opened");
    });

    $(".info-close-icon").click(function () {
        $(".body-overlay").removeClass("opened");
    });




    /* ===== Counter Up Plugin ==== */

    $('.counter').counterUp({
        delay: 2,
        time: 500
    });

    $('.counters').counterUp({
        delay: 2,
        time: 500
    });

    $(".has-dropdown>a").click(function (e) {
        e.preventDefault();

        $(this).parent().siblings(".has-dropdown").children("ul").slideUp(200);
        $(this).next().slideToggle(200);
    });



    //SMOOTH SCROLL
    $('.main-menu li a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = $(this.hash);

        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 60
            }, 2000);
        }
    });





    $('.portfolio-active').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        infinite: true,
        centerMode: true,
        centerPadding: "-100px",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                }
    },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });


    /* // One Page Nav
     var top_offset = $('.header-area').height() - 10;
     $('.main-menu nav ul').onePageNav({
         currentClass: 'active',
         scrollOffset: top_offset,
     });*/

    // mainSlider

    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 10000,
            dots: true,
            fade: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        dots: false,
                        arrows: false
                    }
                }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();


    // owlCarousel
    $('.owl-sagor').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    })




    $(".client-slider-active").owlCarousel({
        items: 5,
        dots: false,
        loop: true,
        autoplay: true,
        margin: 70,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            },
            1600: {
                items: 5
            }
        },

    });

    //footer top award slider

    $(".award-slider-active").owlCarousel({
        items: 5,
        dots: false,
        loop: true,
        margin: 30,
        responsive: {

            0: {
                items: 2
            },
            767: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1092: {
                items: 4
            },
            1600: {
                iems: 5
            }
        },

    });

    ////////////////////////////////////////////////////

    // 0. Testimonial Slider 3 Js

    $('.test-slider').owlCarousel({

        loop: true,

        margin: 0,

        autoplay: false,

        autoplayTimeout: 3000,

        smartSpeed: 500,

        items: 6,
        navText: ['<button><i class="fas fa-long-arrow-alt-left"></i></button>', '<button><i class="fas fa-long-arrow-alt-left"></i></button>'],

        nav: true,

        dots: false,

        responsive: {

            0: {

                items: 1

            },

            767: {

                items: 1

            },

            992: {

                items: 1

            }

        }

    });





    //testimonial slider 

    $(".testimonial-slider").owlCarousel({
        items: 3,
        margin: 35,
        loop: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            },

        },
    });


    /* magnificPopup img view */

    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });




    ////////////////////////////////////////////////////

    //  Masonary Js

    var $grid = $('.grid').imagesLoaded(function () {

        // init Isotope

        var $grid = $('.grid').isotope({

            itemSelector: '.grid-item',

            percentPosition: true,

            masonry: {

                // use outer width of grid-sizer for columnWidth

                columnWidth: '.grid-item',

            }

        });

    });

    // filter items on button click

    $('.masonary-menu').on('click', 'button', function () {

        var filterValue = $(this).attr('data-filter');

        $grid.isotope({
            filter: filterValue
        });

    });



    //for menu active class

    $('.masonary-menu button').on('click', function (event) {

        $(this).siblings('.active').removeClass('active');

        $(this).addClass('active');

        event.preventDefault();

    });


    // filter items on button click
    $('.portfolio-menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    //for menu active class
    $('.portfolio-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });


    // WOW active
    new WOW().init();


    //data background

    $("[data-background]").each(function () {

        $(this).css("background-image", "url(" + $(this).attr("data-background") + " ) ")
    });


})(jQuery);




// ********** fixed navbar ************


const navbar = document.getElementById("nav");

const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;

    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
    /*  //setup back to top link
      
      if (scrollHeight > 500) {
        topLink.classList.add("show-link");
      }
        
        else {
        topLink.classList.remove("show-link");
      }*/

});




// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
