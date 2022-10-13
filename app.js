$(document).ready(function() {
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');

    });

    $(window).on('scroll load', function() {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

    });










    /*$element.velocity({ 
        width: "500px",
        property2: value2
    }, {
        duration: 400,
        easing: "swing",
        queue: "",
        begin: undefined,
        progress: undefined,
        complete: undefined,
        display: undefined,
        visibility: undefined,
        loop: false,
        delay: false,
        mobileHA: true
    });*/



    //Smooth scrolling when clicking an anchor link



    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });





























    //smooth scrolling

    // $('a[href*="#"]').on('click', function(e) {
    //     e.preventDefalult();
    //     $('html, body').animate({
    //             scrollTop: $($(this).attr('href')).offset().top,



    //         },

    //         500,
    //         'linear'
    //     );


    // });


});





// Select all links with hashes