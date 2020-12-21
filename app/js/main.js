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
                currentLink();
            }
        }
    });
//функия для изменения цвета активной ссылки в панеле навигации
    function currentLink() {
        let currentActiveSlide = indexMainSlider.realIndex;
        let allLinks =  document.querySelectorAll(".header__link");
        for(let i = 0; i < allLinks.length; i++) {
            if(i != currentActiveSlide) {
                allLinks[i].classList.remove("active");
            } else {
                allLinks[i].classList.add("active");
            }
        }
    }

});