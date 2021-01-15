let timer;
let windowWidth =
window.onresize = function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
            calcLeftForSlideName(document.querySelectorAll(".main-slider__slide.activated .slide-name--without-container"))
            calcRightForPagination(document.querySelector(".main-slider__pagination"));
            calcLeftForFeaturedWorks(document.querySelector(".main-slider__featured-works"));
        }
        , 250)
}
window.onload = function () {
    calcRightForPagination(document.querySelector(".main-slider__pagination"));
    calcLeftForFeaturedWorks(document.querySelector(".main-slider__featured-works"));
}
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
            if (yearsCount && !slide.classList.contains("activated")) {
                countAnimation(yearsCount, 11);
            }
            slide.classList.add("activated");
            calcLeftForSlideName(document.querySelectorAll(".main-slider__slide.activated .slide-name--without-container"))
        }
    }
});

let indexWorksSlider = new Swiper(".works-slider__container", {
    loop: true,
    autoplay: {
        delay: 5000
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function calcLeftForFeaturedWorks(element) {
    let windowWidth = window.innerWidth;
    let worksSlideTextBlockWidth = window.getComputedStyle(document.querySelector(".works-slider__slide-text"))
        .width.replaceAll("px", "");
    console.log(windowWidth + " " + worksSlideTextBlockWidth);
        element.style.left = (windowWidth - worksSlideTextBlockWidth) + 1 + "px";

}

function calcLeftForSlideName(elements) {
    let windowWidth = window.innerWidth;
    let containerWidth = window.getComputedStyle(document.querySelector(".container"))
        .width.replaceAll("px", "");
    if (containerWidth == windowWidth) {
        elements.forEach(e => e.style.left = "-30px");
    } else {
        elements.forEach(e => e.style.left = (windowWidth - containerWidth) / 2 - 30 + "px");
    }
}

function calcRightForPagination(element) {
    let windowWidth = window.innerWidth;
    let containerWidth = window.getComputedStyle(document.querySelector(".container"))
        .width.replaceAll("px", "");
    if (containerWidth == windowWidth) {
        element.style.right = "15px";
    } else {
        element.style.right = (windowWidth - containerWidth) / 2 + 15 + "px";
    }
}

//years counter
function countAnimation(htmlElement, maxNumber) {
    let start = 0;
    let intervalId = setInterval(function () {
        htmlElement.textContent = start;
        if (start === maxNumber) {
            clearInterval(intervalId);
        }
        start++;
    }, 100);
}