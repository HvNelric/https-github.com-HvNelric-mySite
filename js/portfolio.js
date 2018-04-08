$(document).ready( function() {
    var selectNav = $('nav');
    var selectPlus = $('#bg-plus');
    var selecGraphH2 = $('.row-graph-h2');
    var allImg = $('.onHover');
    var urlImg;
    var goImg;
    var $elem;
    var $window;
    var docViewTop;
    var docViewBottom;
    var elemTop;
    var elemBottom;
    var leScroll = 0;

    var elt = [
        {num: '.number01'},
        {num: '.number02'},
        {num: '.number03'},
        {num: '.number04'},
        {etape: '.etape1'},
        {etape: '.etape2'},
        {etape: '.etape3'},
        {etape: '.etape4'}
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

    $(window).scroll(docParallax1);
    $(window).scroll(docParallax2);

    // hover all img
    allImg.hover(function() {
        $(this).animate({opacity: '0.4'}, 250);
    },
    function() {
        $(this).animate({opacity: '1'}, 250);
    });

    // modal
    allImg.click(function() {
        urlImg = $(this).attr('src');
        $('#myModal img').attr('src', urlImg);
        $('#myModal').fadeIn();

        if($('.myNav').is(':visible')) {
            $('.myNav').hide();
        }
    });

    $('#myModal .ion-ios-close-outline, #myModal .modal-img-conteneur').click(function() {
        $('#myModal').fadeOut();
    })

    // hover IMG chagement bg des numéro
    $('.img01').hover(function () {
        $('.number01').animate({
            width: "500" }, 50, "easeOutExpo");
    },
        function () {
            $('.number01').animate({ 
                width: "200" }, 150, "easeOutExpo");
        }
    );    
   
    $('.img02').hover(function () {
        $('.number02').animate({
            width: "500"}, 150, "easeOutExpo");
        },
        function () {
            $('.number02').animate({
                width: "200" }, 150, "easeOutExpo");
        }
    );
    
    $('.img03').hover(function () {
        $('.number03').animate({
            width: "500" }, 50, "easeInExpo");
        },
        function () {
            $('.number03').animate({
                width: "200" }, 150, "easeOutExpo");
        }
    );

    $('.img04').hover(function () {
        $('.number04').animate({
            width: "500" }, 150, "easeOutExpo");
    },
        function () {
            $('.number04').animate({
                width: "200" }, 150, "easeOutExpo");
        }
    );

    // detection elem dans viewport
    function inView(elem) {
        $elem = $(elem);
        $window = $(window);

        docViewTop = $window.scrollTop();
        docViewBottom = docViewTop + $window.height();

        elemTop = $elem.offset().top;
        elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    $(window).scroll(function () {
        var goAnim = $('.go-anim');
        var goIcone = $('.icone-conteneur');

        function animOpacity(sel, opac, time) {
            $(sel).animate({opacity: opac}, time, 'easeInOutExpo');
        }

        function animMarginTop(sel, delay, mt, opac, time) {
            $(sel).delay(delay).animate({marginTop: mt, opacity: opac}, time, 'easeInOutExpo');
        }

        function goAnimFrontGauche(gsel1, gsel2, gsel3, gsel4) {
            $(gsel1).animate({ opacity: '1' }, 400, 'easeInOutExpo');
            $(gsel2).delay(200).animate({ marginTop: '0', opacity: '1' }, 1000, 'easeInOutExpo');
            $(gsel3).delay(200).animate({ marginLeft: '20px', opacity: '1' }, 1000, 'easeInOutExpo');
            $(gsel4).delay(400).animate({ marginLeft: '20px', opacity: '1' }, 1000, 'easeInOutExpo');
        }

        function goAnimFrontDroite(dsel1, dsel2, dsel3, dsel4) {
            $(dsel1).animate({ opacity: '1' }, 400, 'easeInOutExpo');
            $(dsel2).delay(200).animate({ marginTop: '0', opacity: '1' }, 1000, 'easeInOutExpo');
            $(dsel3).delay(200).animate({ marginRight: '20px', opacity: '1' }, 1000, 'easeInOutExpo');
            $(dsel4).delay(400).animate({ marginRight: '20px', opacity: '1' }, 1000, 'easeInOutExpo');
        }

        if(inView(goAnim)) {
            animMarginTop('.go-anim', 0, '0', '1', 1550);
            animMarginTop('.con-about h3', 200, '0', '1', 1550);
            animMarginTop('.con-about p', 650, '20px', '1', 1550);
            animMarginTop('.con-about i', 1250, '0', '1', 1550);
        }
        if(inView($('#etapes .etape1'))) {
            $('#etapes .etape1').animate({ ////////////////// FRED !! comment peut-on fractionner ces 4 blocs de codes ? J'ai penser a mettre les class (.etapes1, .etapes2, etc...) dans un tableau et et les boucler sur un scrollTop mais je ne sais pas si c'est une bonne idée. :( 
                width: '100%',
                height: '200px'},
                1000, 'easeOutBounce')
            .next().delay(200).animate({
                marginTop: '0',
                opacity: '1'},
                1550, 'easeInOutExpo')
            .next().delay(650).animate({
                marginTop: '20px',
                opacity: '1'},
                1500, 'easeInOutExpo');

            $('#etapes .etape2').delay(400).animate({
                width: '100%',
                height: '200px'},1000, 'easeOutBounce')
            .next().delay(600).animate({
                marginTop: '0',
                opacity: '1'}, 1550, 'easeInOutExpo')
            .next().delay(1050).animate({
                marginTop: '20px',
                opacity: '1'}, 1500, 'easeInOutExpo');

            $('#etapes .etape3').delay(800).animate({
                width: '100%',
                height: '200px'}, 1000, 'easeOutBounce')
            .next().delay(1000).animate({
                marginTop: '0', 
                opacity: '1'}, 1550, 'easeInOutExpo')
            .next().delay(1450).animate({
                marginTop: '20px', 
                opacity: '1'}, 1500, 'easeInOutExpo');

            $('#etapes .etape4').delay(1200).animate({
                width: '100%',
                height: '200px'}, 1000, 'easeOutBounce')
            .next().delay(1400).animate({
                marginTop: '0', 
                opacity: '1'}, 1550, 'easeInOutExpo')
            .next().delay(1850).animate({
                marginTop: '20px', 
                opacity: '1'}, 1500, 'easeInOutExpo');

        //     .next().delay(200).animate({marginTop: '0', opacity: '1'}, 1550, 'easeInOutExpo')
        //     .next().delay(650).animate({marginTop: '20px', opacity: '1'}, 1500, 'easeInOutExpo');
        }
        if(inView($('.number01'))) {
            goAnimFrontGauche('.anim-bg1', '.img-conteneur1', '.anim-h2-1', '.anim-p-1');
        }
        if(inView($('.number02'))) {  
            goAnimFrontDroite('.anim-bg2', '.img-conteneur2', '.anim-h2-2', '.anim-p-2');
        }
        if(inView($('.number03'))) {
            goAnimFrontGauche('.anim-bg3', '.img-conteneur3', '.anim-h2-3', '.anim-p-3');
        }
        if(inView($('.number04'))) {
            goAnimFrontDroite('.anim-bg4', '.img-conteneur4', '.anim-h2-4', '.anim-p-4');
        }

        if(inView($('.svg-graph-id'))) {
            $('.svg-graph-id').animate({ width: '150px', height: '150px' }, 1500, 'easeOutBounce');
            $('.svg-graph-ai').delay(200).animate({ width: '150px', height: '150px' }, 1500, 'easeOutBounce');
            $('.svg-graph-ps').delay(400).animate({ width: '150px', height: '150px' }, 1500, 'easeOutBounce');

            animMarginTop('.graph-h4-id', 0, '0', '1', 1000);
            animMarginTop('.graph-p-id', 200, '20px', '1', 1000);

            animMarginTop('.graph-h4-ai', 0, '0', '1', 1000);
            animMarginTop('.graph-p-ai', 200, '20px', '1', 1500);

            animMarginTop('.graph-h4-ps', 0, '0', '1', 1000);
            animMarginTop('.graph-p-ps', 200, '20px', '1', 1500);
        }
        
        if(inView('.gallerie-col')) {
            animMarginTop('.gallerie-col', 0, '0', '1', 1500);
        }

        if(inView('.photo-col')) {
            animMarginTop('.photo-col', 0, '0', '1', 1500);
        }

    }); // fin scroll inView
    
    // hover frontend plus
    $('.site-plus').hover(function () {
        $('.btn-plus').attr('d', 'M 100,100 L 0,0 L 100,0 L 100,100 Z');
        $('.plus-more').animate({ left: '0' }, 800, 'easeOutBounce');
    },
        function () {
            $('.btn-plus').attr('d', 'M 0,50 L 100,50 L 100,100 L 0,100 Z');
            $('.plus-more').animate({ left: '-250px' }, 500, 'easeInOutExpo');
        }
    );

    // var imgs = '.img0';
    // var nums = '.number0';

    // for (var i = 1; i <= 4; i++) {
    //     img = imgs + i;
    //     num = nums + i;
    //     console.log(img, num);       

    // }

    // $(img).mouseenter(function () {
    //     $(this).animate({ 'opacity': '0.4' }, 250, "easeOutQuad");
    //     $(num).animate({ "width": "500" }, 50, "easeInExpo");

    // });
    // $(img).mouseleave(function () {
    //     $(this).animate({ 'opacity': '1' }, 250, "easeOutQuad");
    //     $(num).animate({ "width": "200" }, 150, "easeOutExpo");
    // });


    




}); // fin READY
