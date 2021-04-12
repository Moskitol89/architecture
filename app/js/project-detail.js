// add active class for current link in header (2 - projects.html)
document.querySelectorAll(".header__link")[2].classList.add("active");

const swiper = new Swiper('.project-detail__swiper-container', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    initialSlide: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});