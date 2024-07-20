const guide = $('.guide-carousel')
$(".guide-carousel").owlCarousel({
    items: 2,
    margin:20,
    autoplay:true,
    loop : true,
    autoplayHoverPause: true,
    dots:true
});
$('#product-prev').click(function () {
    guide.trigger('prev.owl.carousel');
});
$('#product-next').click(function() {
    guide.trigger('next.owl.carousel');
});

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

