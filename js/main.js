$(function(){

    $('.slide-recipe__slider-cheese, .slide-recipe__sliders-oatmeal, .slide-recipe__slider-egg, .slide-recipe__sliders-other, .slide-recipe__sliders-dinner, .slide-recipe__sliders-snack').slick({
        slidesToShow: 1,
        adaptiveHeight: true,
        dots: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 601,
              settings: {
                slidesToShow: 1,
                
              }
            },
        ]
      });
    

      $('.recommendation__food-inner').slick({
        slidesToShow: 1,
        adaptiveHeight: true,
        dots: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 601,
              settings: {
                slidesToShow: 1,
                
              }
            },
        ]
      });

      $('.menu-week1__inner, .menu-week2__inner, .menu-week3__inner').slick({
        slidesToShow: 1,
        adaptiveHeight: true,
        dots: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                
              }
            },
        ]
      });

      
   
});