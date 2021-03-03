let timer;
let windowWidth = window.innerWidth;
window.onresize = function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
            windowWidth = window.innerWidth;
            calcLeftForSlideName(document.querySelectorAll(".main-slider__slide.activated .slide-name--without-container"))
            calcRightForPagination(document.querySelector(".main-slider__pagination"));
            calcLeftForTitles(document.querySelectorAll(".main-slider__title"));
            if (windowWidth <= 1120) {
                indexPageAdaptive(true);
            }
        }
        , 250)
}
window.onload = function () {
    calcRightForPagination(document.querySelector(".main-slider__pagination"));
    calcLeftForTitles(document.querySelectorAll(".main-slider__title"));
    if(windowWidth <= 1120) {
        indexPageAdaptive(true);
    }
}
let indexMainSlider = new Swiper(".main-slider__container", {
    simulateTouch: false,
    // setWrapperSize: true,
    freeMode: true,
    // autoHeight: true,
    direction: "vertical",
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    breakpoints: {
      1200: {
          freeMode: false,
          // autoHeight: false,
      },
        700: {

        }
    },
    on: {
        activeIndexChange: function () {
            setTimeout(()=> {
                let slide;
                slide = document.querySelector(".main-slider__slide.swiper-slide-active");
                let yearsCount = slide.querySelector(".services__count-number");
                if (yearsCount && !slide.classList.contains("activated")) {
                    countAnimation(yearsCount, 11);
                }
                slide.classList.add("activated");
                calcLeftForSlideName(document.querySelectorAll(".main-slider__slide.activated .slide-name--without-container"));
            },50);
        }
    }
});

let indexInnerSlider = new Swiper(".inner-slider__container", {
    loop: true,
    autoplay: {
        delay: 7000
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


let indexTestimonialsSlider = new Swiper(".testimonials-slider__container", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 62,
    pagination: {
        el: '.testimonials-slider__pagination',
        clickable: true,
    },
    breakpoints: {
        900: {
            slidesPerView: 2,
            slidesPerGroup: 2
        }
    }
});

function calcLeftForTitles(elements) {
    windowWidth = window.innerWidth;
    let leftDistanceToBlock = document.querySelector(".inner-slider__slide-text").offsetLeft;
    for (let element of elements) {
        element.style.left = (leftDistanceToBlock) + 1 + "px";
    }
}

function calcLeftForSlideName(elements) {
    windowWidth = window.innerWidth;
    let containerWidth = window.getComputedStyle(document.querySelector(".container"))
        .width.replaceAll("px", "");
    if (containerWidth == windowWidth) {
        elements.forEach(e => e.style.left = "-30px");
    } else {
        elements.forEach(e => e.style.left = (windowWidth - containerWidth) / 2 - 30 + "px");
    }
}

function calcRightForPagination(element) {
    windowWidth = window.innerWidth;
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
            document.querySelector(".services__count-plus").classList.add("count-done");
        }
        start++;
    }, 100);
}

//menu button animation
document.querySelector(".header__btn-menu").addEventListener("click", function () {
    if (this.classList.contains("clicked")) {
        this.classList.remove("clicked");
        document.querySelector(".header__nav").classList.remove("show");
        document.querySelector("header").classList.remove("btn-clicked");
    } else {
        this.classList.add("clicked");
        document.querySelector("header").classList.add("btn-clicked");
        document.querySelector(".header__nav").classList.add("show");
    }
});
//override in-line height for swiper slides
function indexPageAdaptive(windowSizeLessThan1120) {
    if(windowSizeLessThan1120){
        document.querySelectorAll(".swiper-slide--autoheight")
            .forEach(el => el.style.height = "auto");
    }
}
