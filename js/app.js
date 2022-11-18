$(".menu-toggler").click(function(){
    $(".navbar-nav").toggleClass("active");
}
);

$(window).scroll(function(){
    if($(this).scrollTop() > 0){
        $(".navbar").addClass("scrolled");
    } else{
        $(".navbar").removeClass("scrolled"); 
    }


});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1,
    smartSpeed:1000,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
 
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
    
    
