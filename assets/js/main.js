$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:83,
        dots:false,
        nav: true,
        navText:['<img class="" src="./assets/image/ArrowCircleLeft.png" alt="">','<img class="" src="./assets/image/ArrowCircleRight.png" alt="">'],
        responsive:{
            0:{
                items:1,
                nav: true
            },
            1400:{
                items:3,
                nav: true
            }
        }
    })
})
