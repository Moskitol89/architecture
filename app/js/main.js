$(function () {
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
        on: {
            slideChangeTransitionStart: function () {
                let slide;
                slide = document.querySelector(".main-slider__slide.swiper-slide-active");
                let yearsCount = slide.querySelector(".services__count-number");
                if(yearsCount && !slide.classList.contains("activated")) {
                    countAnimation(yearsCount, 11);
                }
                slide.classList.add("activated");
            }
        }
    });

});
//years counter
function countAnimation(htmlElement, maxNumber) {
    let start = 0;
    let intervalId = setInterval( function () {
        htmlElement.textContent = start;
        if(start === maxNumber) {
            clearInterval(intervalId);
        }
        start++;
    }, 100);
}