let timer;
window.onresize = function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
            calcLeftForSlideName(document.querySelectorAll(".main-slider__slide.activated .slide-name--without-container"))
            calcLeftForPagination(document.querySelector(".main-slider__pagination"));
        }
        , 250)
}
window.onload = function () {
    calcLeftForPagination(document.querySelector(".main-slider__pagination"));
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
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


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

function calcLeftForPagination(element) {
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