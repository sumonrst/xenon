
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