AOS.init({ duration: 800 });

document.querySelectorAll('a[href="#form"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$("#cta-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: "linear"
});

$("#category-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 1000,
    cssEase: "linear"
});

$("#services-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $("#service_prev"),
    nextArrow: $("#service_next"),
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$(window).on('scroll', () => {
    if ($(this).scrollTop() >= 600) {
        $('#return-to-top').fadeIn(300);
    } else {
        $('#return-to-top').fadeOut(300);
    }
});

$('#return-to-top').on('click', () => {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});