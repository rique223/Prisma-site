if (window.matchMedia("(min-width:768px)").matches) {
    $('.owl-carousel').owlCarousel({
        dots: false,
        nav: true,
        margin: 10,
        loop: true,
        autoWidth: true,
        items: 1,
        navText: ["<img src='./img/ico-left.png'>", "<img src='./img/ico-right.png'>"]
    })
} else {
    $('.owl-carousel').owlCarousel({
        dots: false,
        nav: false,
        margin: 10,
        loop: true,
        autoWidth: false,
        items: 1
    })
}