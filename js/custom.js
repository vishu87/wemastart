
jQuery(document).ready(function(){



    // jQuery("#menu-bar").click(function(){
    //     jQuery(".header-menu ul.menu").slideToggle();
    // });

    // jQuery(".header-menu li.menu-item-has-children").click(function(e){
    //     jQuery(this).find('ul.sub-menu').slideToggle();
    //     jQuery(this).toggleClass('open');
    // });

    // jQuery(".header-menu li.menu-item-has-children a").click(function(e){
    //     e.stopPropagation();
    // });

//     /*------------- Top Fixed Menu  ------------------*/

    // jQuery(window).scroll(function(){
    //   if( jQuery(window).scrollTop() > 100) {
    //     jQuery('header').css({
    //         "background":"rgba(255,255,255,0.7)",
    //         "transition":"0.3s ease-in"
    //     });
    //   } else 
    //     jQuery('header').css({
    //         "background":"rgba(255,255,255,1)"
    //     });
    // });

//     /*-------------- End -------------*/

    jQuery(".home-slider").owlCarousel({
        items : 1,
        loop:true,
        autoPlay:true,
        navigation:true,
        navigationText: ["<img src='img/nav_left.png'>","<img src='img/nav_right.png'>"]
    });

    jQuery(".report-slider").owlCarousel ({
        items : 1,
        loop : true,
        autoPlay : true
    });
    jQuery("#pricing-select").click(function(){
        if(jQuery(".select-arrow").hasClass("down")){
            jQuery(".select-arrow").removeClass("down");
            jQuery(".select-arrow").addClass("up");
        }
        else {
            jQuery(".select-arrow").removeClass("up");
            jQuery(".select-arrow").addClass("down");
        }
    });
});

    // alert(templateURL);
// jQuery(document).ready(function() {
//     jQuery(".fancybox").fancybox();
// });

    // var stylesheet_directory_uri = "<?php get_stylesheet_directory_uri(); ?>";


// jQuery(".home-tests").owlCarousel({
//     items : 1,
//     loop:true,
//     autoPlay:true
// });

// jQuery("#homecontact-form").validate();

