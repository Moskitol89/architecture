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
    horizontalOrder: true
});


let mixer = mixitup(".mixitup-container", {
    animation: {
        enable: false
    },
    callbacks: {
        onMixEnd: function () {
            masonry.layout();
            // masonry.reloadItems();
        }
    }
});

