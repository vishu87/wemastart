$(document).ready(function(){
    $(".header-menu > li").mouseenter(function(e){
        $(".overlay").show();
    });
    $(".header-menu > li").mouseleave(function(e){
        $(".overlay").hide();
    });

    $(".sub-menu ul > li").mouseenter(function(e){
        $(".sub-menu ul > li").removeClass('active');
        $(this).addClass('active');
    });

    $(".header-subscribe img").click(function(){
        // $(".header-search").css("width","230px");
        var toggleSearch = $(".header-search").width() == 410 ? "230px" : "410px";
        $(".header-search").animate({width : toggleSearch});

        var toggleSubscribe = $(".header-subscribe input").width() == 0 ? "220px" : 0;
        $(".header-subscribe input").animate({width : toggleSubscribe});
    });

    // $(".side-call").mouseover(function(){
    //     $(".side-menu").css("transform","translateX(0px)")
    // });


    // $("#menu-bar").click(function(){
    //     $(".header-menu ul.menu").slideToggle();
    // });

    // $(".header-menu li.menu-item-has-children").click(function(e){
    //     $(this).find('ul.sub-menu').slideToggle();
    //     $(this).toggleClass('open');
    // });

    // $(".header-menu li.menu-item-has-children a").click(function(e){
    //     e.stopPropagation();
    // });

//     /*------------- Top Fixed Menu  ------------------*/

    $(window).scroll(function(){
      if( $(window).scrollTop() > 150) {
        $('.fixed-header').show();
      } else 
        $('.fixed-header').hide();
    });

//     /*-------------- End -------------*/

    $(".home-banner").owlCarousel({
        singleItem: true,
        items : 1,
        loop:true,
        autoPlay:true,
        slideSpeed: 400
        // navigation:true,
        // navigationText: ["<img src='img/nav_left.png'>","<img src='img/nav_right.png'>"]
    });

    $(".home-features").owlCarousel ({
        singleItem: true,
        items : 3,
        loop : true,
        navigation:true,
        navigationText: ["<img src='img/nav_left.png'>","<img src='img/nav_right.png'>"]
    });

    $(".home-banksmart").owlCarousel ({
        items : 4,
        loop : true,
        navigation:true,
        navigationText: ["<img src='img/nav_left.png'>","<img src='img/nav_right.png'>"]
    });

    $("#pricing-select").click(function(){
        if($(".select-arrow").hasClass("down")){
            $(".select-arrow").removeClass("down");
            $(".select-arrow").addClass("up");
        }
        else {
            $(".select-arrow").removeClass("up");
            $(".select-arrow").addClass("down");
        }
    });
});

    // alert(templateURL);
// $(document).ready(function() {
//     $(".fancybox").fancybox();
// });

    // var stylesheet_directory_uri = "<?php get_stylesheet_directory_uri(); ?>";


// $(".home-tests").owlCarousel({
//     items : 1,
//     loop:true,
//     autoPlay:true
// });

// $("#homecontact-form").validate();

