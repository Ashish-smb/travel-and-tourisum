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


// search tab menu
const btns = $('.hero-area ul li a');
const tabs = $('.hero-area .menu-tab > div');
btns.click(function() {
    btns.removeClass('active');
    $(this).addClass('active');
    tabs.removeClass('active');
    $($(this).data('tab')).addClass('active');
});

// menu-tab
const btn = $('.tab-menu .tab-menu-links a');
const tab = $('.tab-menu .menu-tab > div ');
btn.click(function() {
    btn.removeClass('active');
    $(this).addClass('active');
    tab.removeClass('active');
    $($(this).data('menu')).addClass('active');    
});
