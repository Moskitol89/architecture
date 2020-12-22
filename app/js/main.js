$(function(){
    let indexMainSlider = new Swiper(".main-slider__container", {
        direction: "vertical",
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
        },
        on : {
            slideChangeTransitionStart: function () {
                document.querySelector(".main-slider__slide.swiper-slide-active")
                    .classList.add("activated");
            }
        }
    });

});