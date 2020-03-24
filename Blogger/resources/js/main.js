$(document).ready(function(){

    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');

    /**CLick event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    // owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout: 1500,
    });
})

