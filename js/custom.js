
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

    jQuery(window).scroll(function(){
      if( jQuery(window).scrollTop() > 150) {
        jQuery('.fixed-header').show();
      } else 
        jQuery('.fixed-header').hide();
    });

//     /*-------------- End -------------*/

    jQuery(".home-banner").owlCarousel({
        items : 1,
        loop:true,
        autoPlay:true,
        // navigation:true,
        // navigationText: ["<img src='img/nav_left.png'>","<img src='img/nav_right.png'>"]
    });

    jQuery(".home-features").owlCarousel ({
        items : 3,
        loop : true,
        navigation:true,
        navigationText: ["<img src='img/nav_left.png'>","<img src='img/nav_right.png'>"]
    });

    jQuery(".home-banksmart").owlCarousel ({
        items : 4,
        loop : true,
        navigation:true,
        navigationText: ["<img src='img/nav_left.png'>","<img src='img/nav_right.png'>"]
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

