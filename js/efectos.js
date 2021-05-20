$(document).ready(function(){

 
    // efecto menu
    $('.menu a').each(function(indice){
        $(this).css({
            'top':'-200px'
        });
        $(this).animate({
            top:'0'
        }, 2000 + (indice*500));
    }); 

    if($(window).width()>800){
        $('header .textos').css({
            opacity:0,
            marginTop:0
        });
        $('header .textos').animate({
            opacity:1,
            marginTop:'-52px'
        },1500);
    }

    //Scroll elementos menu xd

    var acercaDe=$('#acercaDe').offset().top,
        menu=$('#skills').offset().top,
        galeria=$('#galeria').offset().top,
        ubicacion=$('#ubicacion').offset().top

    // scrollto
    const btnScroll = document.querySelector("#btnScroll");

    btnScroll.addEventListener('click',()=>{
        $("html,body").animate({scrollTop:0},"slow");
    });

    window.addEventListener("scroll", () => {
    if (window.pageYOffset > 400) {
        btnScroll.classList.add("active");
    } else {
        btnScroll.classList.remove("active");
        }
    })
       
   

    $('#btnAcercade').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:acercaDe-100
        },500);
    });
    $('#btnMenu').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:menu-60
        },500);
    });
    $('#btnGaleria').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:galeria-75
        },500);
    });
    $('#btnUbicacion').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:ubicacion
        },500);
    });
})