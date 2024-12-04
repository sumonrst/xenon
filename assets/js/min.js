
$(document).ready(function() {
    $('.project-popup').magnificPopup({
        type:'image',
        gallery: {
            enabled: true,
        },
    });

    /*  counter area */ 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    /* Testimonial area */ 
    $('.testimonial').slick({
        arrows: false,
        dots: true,
    });
});




$(window).on("scroll", function() {
    if($(window).scrollTop() > 200) {
        $(".navbar").addClass("sticky");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".navbar").removeClass("sticky");
    }
});