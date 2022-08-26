$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 300,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<i class="slick-prev fa-solid fa-chevron-left"></i>',
        nextArrow: '<i class="slick-next fa-solid fa-chevron-right"></i>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true,
                arrows: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
});