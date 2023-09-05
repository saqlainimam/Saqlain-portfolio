
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }


        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').addClass("show");
        }
    });

    // slide-up script 
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        //removing smooth scroll
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        //appling again smooth scroll
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/nvaebar script 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn ion-icon').toggleClass("active");
    });

    //typing animation script
    var typed = new Typed(".typing",{
        strings: ["Developer", "Desginer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2",{
        strings: ["Developer", "Desginer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script 
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                item: 1,
                nav: false
            },
            600:{
                item: 2,
                nav: false
            },
            1000:{
                item: 3,
                nav: false
            }
        }
    });    
});

