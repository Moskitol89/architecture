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