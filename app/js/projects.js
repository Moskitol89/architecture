let filterButtons = document.querySelectorAll(".projects__filter-button");

filterButtons.forEach(function (element) {
    element.addEventListener("click", function () {
        for(let sibling of element.parentNode.children) {
            sibling.classList.remove("active");
        }
        element.classList.add("active");
    })
});

let masonry = new Masonry(".grid", {
    gutter: 30,
    columnWidth: ".grid-sizer",
    fitWidth: true
});


let projectsMixer = mixitup(".mixitup-container", {
    animation: {
        enable: false
    },
    callbacks: {
        onMixEnd: function () {
            masonry.layout();
        }
    }
});
// add active class for current link in header (2 - projects.html)
document.querySelectorAll(".header__link")[2].classList.add("active");

