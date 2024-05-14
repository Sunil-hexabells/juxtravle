$('#descSilderHero').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    dots: false,
    nav: true,
    navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
    responsive:{
        // 600:{
        //     items:1
        // }
    }
});

$('.custom-nav-tab .nav-link').on('click', function(){
    var position = $(this).position();
    console.log(position);
    var width = $(this).width();
    console.log(width);
    $('.custom-nav-tab .glider').css({
        "left": + position.left,
        "width": width,
    });
});

var activeTab = $('.custom-nav-tab .nav-link.active');
if($('.custom-nav-tab')[0]){
    var initialPosition = activeTab.position();
    console.log(initialPosition);
    var initialWidth = activeTab.width();
    $('.custom-nav-tab .glider').css({
        "left": + initialPosition.left,
        "width": initialWidth,
    });
}
