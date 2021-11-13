/*********************************************************************************

	Template Name: Keystroke Creative Agency Bootstrap4 Html5 Template
	Note: This is main js.

**********************************************************************************/

  
document.addEventListener("DOMContentLoaded", function(event) {
$(function() {

    $('.portfolio .owl-carousel').owlCarousel({
        loop:true,
        nav: false,
        dots: false,
        margin: 0,
        mouseDrag:false,
        autoplay:true,
        autoplayTimeout:2000,
        smartSpeed:500,
        items: 4,
        responsiveClass:true,
        responsive:{
            0:{
                margin: 0,
                smartSpeed:750,
            },
            320:{
                margin: 0,
                smartSpeed:750,
                items: 2,
            },
            550:{
                margin: 0,
                smartSpeed:750,
                items: 3,
            },
            768:{
                margin: 0,
                smartSpeed:750,
                items: 4,
            }
        }
    });

    $('.team .owl-carousel').owlCarousel({
        loop:true,
        nav: true,
        navText: ["<img src='./assets/images/icons/arrow.png'>","<img src='./assets/images/icons/arrow.png'>"],
        dots: true,
        dotsContainer: '#carousel-custom-dots',
        margin: 20,
        mouseDrag:false,
        autoplay:true,
        autoplayHoverPause: true,
        smartSpeed:500,
        items: 8,
        responsiveClass:true,
        responsive:{
            0:{
                margin: 0,
                items: 1,
                smartSpeed:750,
                dotsContainer: '#carousel-custom-dots2',
            },
            400:{
                margin: 5,
                items: 1,
                dotsContainer: '#carousel-custom-dots2',
                smartSpeed:750,
            },
            550:{
                margin: 10,
                items: 6
            },
            768:{
                margin: 10
            },
            992:{
                margin: 10
            },
            1200:{
                margin: 10
            },
            1450:{
                margin: 30
            }
        }
    });

    $('.owl2').owlCarousel({
        loop:true,
        nav: true,
        dots: false,
        navText: ["<img src='./assets/images/icons/arrow.png'>","<img src='./assets/images/icons/arrow.png'>"],
        margin: 30,
        mouseDrag:false,
        autoplay:true,
        autoplayHoverPause: true,
        smartSpeed:500,
        items: 1,
        responsiveClass:true,
        responsive:{
            0:{
                margin: 0,
                items: 1,
                smartSpeed:750,
                autoplayTimeout: 7000,
            },
            400:{
                margin: 5,
                items: 1,
                smartSpeed:750,
                autoplayTimeout: 7000,
            }
        }
    });

    $('.owl3').owlCarousel({
        loop:true,
        nav: true,
        dots: false,
        navText: ["<img src='./assets/images/icons/arrow.png'>","<img src='./assets/images/icons/arrow.png'>"],
        margin: 30,
        mouseDrag:false,
        autoplay:true,
        autoplayHoverPause: true,
        smartSpeed:500,
        items: 1,
        responsiveClass:true,
        responsive:{
            0:{
                margin: 0,
                items: 1,
                smartSpeed:750,
            },
            400:{
                margin: 5,
                items: 1,
                smartSpeed:750,
            }
        }
    });

    var owl = $('.owl-carousel');
    var owl2 = $('.owl2');
    var owl3 = $('.owl3');

    jQuery('#carousel-custom-dots').on('click', 'button', function(e) {
        owl.trigger('to.owl.carousel', [jQuery(this).index(), 300]);
    });
    
    $('.owl-dot').hover(
        function () {
            owl.trigger('stop.owl.autoplay');
        }, function() {
            owl.trigger('play.owl.autoplay');
        }
    );
    
    $(".owl-item").on("touchstart", function(){
        owl.trigger('stop.owl.autoplay');
    });

    $(".owl2 .owl-item").on("touchstart", function(){
        owl2.trigger('stop.owl.autoplay');
    });

    $(".owl3 .owl-item").on("touchstart", function(){
        owl3.trigger('stop.owl.autoplay');
    });
});


function hideAndVisible(blockName) {
    let html;
    switch (blockName) {
    case 'odessa':
            html = '<div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Alexander.jpg" alt="Alexander"></div><div class="info"><div class="h6">Alexander</div><span>Team Lead / Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Yelizaveta_Team_Lead.jpg" alt="Yelizaveta"></div><div class="info"><div class="h6">Yelizaveta</div><span>Team Lead / Motion Desinger</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Yelizaveta.jpg" alt="Yelizaveta"></div><div class="info"><div class="h6">Yelizaveta</div><span>Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Victoriia.jpg" alt="Victoriia"></div><div class="info"><div class="h6">Victoriia</div><span>Illustrator</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Elena.jpg" alt="Elena"></div><div class="info"><div class="h6">Elena</div><span>Illustrator</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Stepan.jpg" alt="Stepan"></div><div class="info"><div class="h6">Stepan</div><span>Sound Designer</span></div></div>';
            break;
    case 'sumy':
            html = '<div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Lilia.jpg" alt="Lilia"></div><div class="info"><div class="h6">Lilia</div><span>Illustrator</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Vlad.jpg" alt="Vlad"></div><div class="info"><div class="h6">Vlad</div><span>Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Denis.jpg" alt="Denis"></div><div class="info"><div class="h6">Denis</div><span>Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Vladimir.jpg" alt="Vladimir"></div><div class="info"><div class="h6">Vladimir</div><span>Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Anna.jpg" alt="Anna"></div><div class="info"><div class="h6">Anna</div><span>Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Taras.jpg" alt="Taras"></div><div class="info"><div class="h6">Taras</div><span>Graphic Designer</span></div></div>';
            break;
    case 'zhytomyr':
            html = '<div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Dima.jpg" alt="Dima Buriachenko"></div><div class="info"><div class="h6">Dima</div><span>Founder</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Sergey.jpg" alt="Sergey"></div><div class="info"><div class="h6">Sergey</div><span>CEO</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Nataliia.jpg" alt="Nataliia"></div><div class="info"><div class="h6">Nataliia</div><span>Team Lead / Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Darina.jpg" alt="Darina"></div><div class="info"><div class="h6">Darina</div><span>Team Lead / Illustrator</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Artur.jpg" alt="Artur"></div><div class="info"><div class="h6">Artur</div><span>Motion Desinger</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Talli.jpg" alt="Talli"></div><div class="info"><div class="h6">Talli</div><span>Illustrator</span></div></div>';
            break;
    default:
            html= '';
            html = '<div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Dima.jpg" alt="Dima Buriachenko"></div><div class="info"><div class="h6">Dima</div><span>Founder</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Sergey.jpg" alt="Sergey"></div><div class="info"><div class="h6">Sergey</div><span>CEO</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Nataliia.jpg" alt="Nataliia"></div><div class="info"><div class="h6">Nataliia</div><span>Team Lead / Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Darina.jpg" alt="Darina"></div><div class="info"><div class="h6">Darina</div><span>Team Lead / Illustrator</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Artur.jpg" alt="Artur"></div><div class="info"><div class="h6">Artur</div><span>Motion Desinger</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Talli.jpg" alt="Talli"></div><div class="info"><div class="h6">Talli</div><span>Illustrator</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Lilia.jpg" alt="Lilia"></div><div class="info"><div class="h6">Lilia</div><span>Illustrator</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Vlad.jpg" alt="Vlad"></div><div class="info"><div class="h6">Vlad</div><span>Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Denis.jpg" alt="Denis"></div><div class="info"><div class="h6">Denis</div><span>Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Vladimir.jpg" alt="Vladimir"></div><div class="info"><div class="h6">Vladimir</div><span>Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Anna.jpg" alt="Anna"></div><div class="info"><div class="h6">Anna</div><span>Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Taras.jpg" alt="Taras"></div><div class="info"><div class="h6">Taras</div><span>Graphic Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Alexander2.jpg" alt="Alexander"></div><div class="info"><div class="h6">Alexander</div><span>Team Lead / Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Yelizaveta_Team_Lead2.jpg" alt="Yelizaveta"></div><div class="info"><div class="h6">Yelizaveta</div><span>Team Lead / Motion Desinger</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Yelizaveta2.jpg" alt="Yelizaveta"></div><div class="info"><div class="h6">Yelizaveta</div><span>Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Victoriia2.jpg" alt="Victoriia"></div><div class="info"><div class="h6">Victoriia</div><span>Illustrator</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Elena2.jpg" alt="Elena"></div><div class="info"><div class="h6">Elena</div><span>Illustrator</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="assets/images/team/Stepan2.jpg" alt="Stepan"></div><div class="info"><div class="h6">Stepan</div><span>Sound Designer</span></div></div>';
            break;
    
    }
    $('.team .owl-carousel').trigger('replace.owl.carousel', html).trigger('refresh.owl.carousel');         

} 
});