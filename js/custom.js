$('#featured').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    navText: ["Next", "Previous"],
    autoplay: true,    
    autoplaySpeed: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

$('.clintbox').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    autoplay: true,    
    autoplaySpeed: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3.5
        }
    }
})



$(function(){
    $('#datepicker').datepicker();
  });

  $(function(){
    $('#datepicker2').datepicker();
  });