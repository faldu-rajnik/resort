import $ from 'jquery' 

$(".bar,.close_icn").click(function() {
    $("nav").slideToggle("slow");
});
(function() {
    "use strict";
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }
    window.addEventListener('load', () => {
        let portfolioContainer = select('.portfolio-container');
        if (portfolioContainer) {
            let portfolioIsotope = new Isotope(portfolioContainer, {
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows'
            });

            let portfolioFilters = select('#portfolio-flters li', true);

            on('click', '#portfolio-flters li', function(e) {
                e.preventDefault();
                portfolioFilters.forEach(function(el) {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');

                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
                portfolioIsotope.on('arrangeComplete', function() {});
            }, true);
        }

    });
    const portfolioLightbox = GLightbox({
        selector: '.portfolio-lightbox'
    });
})()
$(window).on("load", function() {
    $('.appriciate_grid').slick({
        centerMode: true,
        slidesToShow: 4,
        responsive: [{
                breakpoint: 1920,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.btm_slider').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true
    });
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("nav ul li a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - $('.header_container').height()
      }, 500, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        //window.location.hash = hash;
      });
    } // End if
  });

  $('.header_container').height()
$('header').css('padding-top',$('.header_container').height())
});
$("#form_question").validate({
     submitHandler: function(form) {
        $('.success_msg').show();
        setTimeout(function() {
        $('.success_msg').hide();
    }, 2000);
        $('.form_grp input').val('');
        $('textarea').val('');
    },
  rules: {
    full_name: "required",
    email: {
      required: true,
      email: true
    },
    message: {
      required: true
    },
  }
  });

// $(document).ready(function(){
//     $(window).scroll(function(){
//         if($(window).scrollTop() > $(window).height()){
//             $(".header_container").css({"background-color":"transparent"});   
//         }
//         else{
//             $(".header_container").css({"background-color":"black"});
//         }

//     })
// })

$(document).ready(function(){       
        var scroll_pos = 0;
        $(document).scroll(function() {
            scroll_pos = $(this).scrollTop();
            if(scroll_pos > $('.header_container').height()) {
                $(".header_container").css('background-color', '#000000cc');
            } 
            else if(scroll_pos < $('.header_container').height())
            {
              $(".header_container").css('background-color', 'transparent');  
            }
        });
    });