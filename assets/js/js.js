$(".testimonial").owlCarousel({
    items: 1,
    autoplay:true,
    loop : true,
    autoplayHoverPause: true,
    dots:true
})
$('.partners').owlCarousel({
    items: 6,
    margin:20,
    autoplay:true,
    loop:true,
    autoplayTimeout:4000,
    dots:true,
    nav:true,
    responsive : {
        0 : {
            items:2
        },
        600 : {
            items:4
        },
        900: {
            items:5
        }
    }
});

$('.doctor-carousel').owlCarousel({
    // items:2,
    loop:true,
    dots:true,
    nav:true,
    margin :20,
    responsive:{
        0: {
            items:2
        },
        600: {
            items:3
        },
        900: {
            items:4
        }
    }
});

// popup javascript 
(function($) {
    $.fn.showsidebar = function(sel) {
        $(this).click(function() {
            $(sel).addClass('show');
        });
        return this;
    };

    $.fn.hidesidebar = function(sel) {
        $(this).click(function() {
            $(sel).removeClass('show');
        });
        return this;
    };

    $.fn.showpopup = function(t) {
        const sel = $(this);
        setTimeout(function() {
            sel.addClass('show');
        }, t);
    };
})(jQuery);

$(document).ready(function() {
    $('#appointment').showsidebar('.popup');

    $('#showpopup').showsidebar('.popup');

    $('.popup-close').click(function() {
        $('.popup').removeClass('show');
    });

    $('.popup').showpopup(2000);
});

// navbar
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#navbar').outerHeight();

$(window).scroll(function(event){
   var st = $(this).scrollTop();
   
   // Make sure they scroll more than delta
   if(Math.abs(lastScrollTop - st) <= delta)
       return;
   
   // If scrolled down and past the navbar, hide navbar
   if (st > lastScrollTop && st > navbarHeight){
       // Scroll Down
       $('#navbar').css('top', -navbarHeight);
   } else {
       // Scroll Up
       if(st + $(window).height() < $(document).height()) {
           $('#navbar').css('top', 0);
       }
   }
   
   lastScrollTop = st;
});


