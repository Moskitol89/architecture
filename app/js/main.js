$(function(){
    let indexMainSlider = new Swiper(".main-slider__container", {
        direction: "vertical",
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});