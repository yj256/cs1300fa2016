$(document).ready(function () {
    "use strict";
    
    //hide footer
    $("a:contains('Hide Me')").click(function() {
        $("footer").hide( "slow" );
    });
    
    //move car to the right
    $("#car").click(function() {
        $(this).animate({left: "200px"}, 1000);
    });
    
    //ghost fades in and out
    $("a:contains('OoooOOOoooOohh!')").click(function() {
       if ($("#ghost").css("display") === "none") {
           $("#ghost").fadeIn(3000);
       } else {
           $("#ghost").fadeOut(3000);
       }
    });

    //change to fall theme
    $("a:contains('Fall theme')").click(function() {
        $("body").css("background-color", "#fdbb84");
        $("nav").css("background-color", "#e34a33");
    });

    //change to spring theme
    $("a:contains('Spring theme')").click(function() {
        $("body").css("background-color", '');
        $("nav").css("background-color", '');
    });
})
