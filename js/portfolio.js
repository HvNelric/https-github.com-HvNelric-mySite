$(document).ready( function() {
    var selectNav = $('nav');
    var selectPlus = $('#bg-plus');
    var selecGraphH2 = $('.row-graph-h2');
    var goImg ;
    var $elem;
    var $window;
    var docViewTop;
    var docViewBottom;
    var elemTop;
    var elemBottom;
    var leScroll = 0;

    var detecNb = [
        '.number01',
        '.number02',
        '.number03',
        '.number04'
    ];
    
    // anim démarrage
    $('#keyart-1').fadeIn(3000).removeClass('hide');
    
    $('p.slogan').delay(500).fadeIn(500).animate({ 
        top: "-=100", opacity: "1" 
    }, 1000, "easeOutCirc");
    
    $('p.slogan2').delay(700).fadeIn(500).animate({ 
        top: "-=150", opacity: "1"
    }, 1000, "easeOutCirc");

    // scroll bas et haut NAV
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > leScroll) {
            selectNav.slideUp(200, "easeOutExpo");
        } else {
            selectNav.slideDown(200, "easeOutCirc");
        }
        leScroll = st;
    });

    // parallax h2
    function docParallax1() {
        var scrollPos = $(this).scrollTop();
        $('.row-fe-h2').css({
            'background-position': '50% ' + (-scrollPos/6) + "px"
        });
    }

    function docParallax2() {
        var scrollPos2 = $(this).scrollTop();
        selecGraphH2.css({
            'background-position': '50% ' + (-scrollPos2 / 14) + "px"
        });
    }

    $(window).on('scroll', docParallax1);
    $(window).on('scroll', docParallax2);

    // hover IMG chagement bg des numéro
    $('.img01').hover(function () {
        $(this).animate({ 'opacity': '0.4' }, 250, "easeOutQuad");
        $('.number01').animate({ "width": "500" }, 50, "easeInExpo");
        },
        function () {
            $('.number01').animate({ "width": "200" }, 150, "easeOutExpo");
            $(this).animate({ 'opacity': '1' }, 250, "easeOutQuad");
        }

    );
   

    $('.img02').hover(function () {
        $(this).animate({ 'opacity': '0.4' }, 250);
        $('.number02').animate({"width": "500"}, 150, "easeOutExpo");
        },
        function () {
            $('.number02').animate({ "width": "200" }, 150, "easeOutExpo");
            $(this).animate({ 'opacity': '1' }, 250, "easeOutQuad");
        }
    );
    

    $('.img03').hover(function () {
        $(this).animate({ 'opacity': '0.4' }, 250, "easeOutQuad");
        $('.number03').animate({ "width": "500" }, 50, "easeInExpo");
        },
        function () {
            $('.number03').animate({ "width": "200" }, 150, "easeOutExpo");
            $(this).animate({ 'opacity': '1' }, 250, "easeOutQuad");
        }
    );
    

    $('.img04').hover(function () {
        $(this).animate({ 'opacity': '0.4' }, 250);
        $('.number04').animate({ "width": "500" }, 150, "easeOutExpo");
    },
        function () {
            $('.number04').animate({ "width": "200" }, 150, "easeOutExpo");
            $(this).animate({ 'opacity': '1' }, 250, "easeOutQuad");
        }
    );
    
    // hover frontend plus
    $('.site-plus').hover(function () {
        $('#btn-plus').attr('d', 'M 100,100 L 0,0 L 100,0 L 100,100 Z');
    },
        function () {
            $('#btn-plus').attr('d', 'M 0,50 L 100,50 L 100,100 L 0,100 Z');
        }
    );

    // detection elem dans viexport
    function inView(elem) {
        $elem = $(elem);
        $window = $(window);

        docViewTop = $window.scrollTop();
        docViewBottom = docViewTop + $window.height();

        elemTop = $elem.offset().top;
        elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    // $.fn.inView = function() {
    //     // Am I visible?
    //     // Height and Width are not explicitly necessary in visibility detection, the bottom, right, top and left are the
    //     // essential checks. If an image is 0x0, it is technically not visible, so it should not be marked as such.
    //     // That is why either width or height have to be > 0.
    //     var rect = this[0].getBoundingClientRect();
    //     return (
    //         (rect.height > 0 || rect.width > 0) &&
    //         rect.bottom >= 0 &&
    //         rect.right >= 0 &&
    //         rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    //         rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    //     );
    // };

    $(window).scroll(function () {
        var goAnim = $('.go-anim');
        var goIcone = $('.icone-conteneur');
        var i =0;
        var goImg = $('.number01');

        if(inView(goAnim)) {
            goAnim.animate({ marginTop: '0', opacity: '1'}, 1550, 'easeInOutExpo');
            $('.con-about h3').delay(200).animate({ marginTop: '0', opacity: '1' }, 1550, 'easeInOutExpo');
            $('.con-about p').delay(650).animate({ marginTop: '20px', opacity: '1' }, 1550, 'easeInOutExpo');
            $('.con-about i').delay(1650).animate({ marginTop: '0', opacity: '1' }, 1550, 'easeInOutExpo');
        }
        else if(inView(goIcone)) {
            goIcone.animate({width: '100px', height: '100px', opacity: '1'}, 550, 'easeOutBounce', function() {
                $('.icone-conteneur i').animate({opacity: '1' }, 750, 'easeInOutExpo');
            })
            .next().delay(200).animate({marginTop: '0', opacity: '1'}, 1550, 'easeInOutExpo')
            .next().delay(650).animate({marginTop: '20px', opacity: '1'}, 1500, 'easeInOutExpo');
        }


        else if(inView(goImg)) {
            $('.gall-powder').animate({ opacity: '1' }, 350, 'easeInOutExpo');
        }
       
            // $('.gall-powder').animate({ opacity: '1' }, 350, 'easeInOutExpo');
                // $('.img-conteneur-gauche').delay(250).animate({ marginTop: '0', opacity: '1' }, 600, 'easeInOutExpo');      

    });




});

// function isScrolledIntoView(elem) {
//     var $elem = $(elem);
//     var $window = $(window);

//     var docViewTop = $window.scrollTop();
//     var docViewBottom = docViewTop + $window.height();

//     var elemTop = $elem.offset().top;
//     var elemBottom = elemTop + $elem.height();

//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }

// $(window).scroll(function () {
//     $('.text').each(function () {
//         if (isScrolledIntoView($(this))) {
//             $(this).children('span').text('visible');
//         }
//         else {
//             $(this).children('span').text('invisible');
//         }
//     });
// });

// function partielVisible(el) {
//     var elementBoundary = el.getBoundingClientRect();

//     var top = elementBoundary.top;
//     var bottom = elementBoundary.bottom;
//     var height = elementBoundary.height;

//     return ((top + height >= 0) && (height + window.innerHeight >= bottom));
// }

// function fullVisible(el) {
//     var elementBoundary = el.getBoundingClientRect();

//     var top = elementBoundary.top;
//     var bottom = elementBoundary.bottom;

//     return ((top >= 0) && (bottom <= window.innerHeight));
// }