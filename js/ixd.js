//questo codice viene eseguito quando la pagina è stata completamente caricata

$(document).ready(function(){

/* MENU */

var openmenu = 0;

$.fn.openmenu = function() {
$("#menu_burger").hide();
$("#sidebar").animate({
  "width": "12em"
}, 400);
openmenu = 1;
$("#sidebar-content").delay(50).fadeIn();
}

$.fn.closemenu = function() {
$("#sidebar").animate({
  "width": "5em"
}, 400);
openmenu = 0;
$("#sidebar-content").hide();
$("#menu_burger").delay(50).fadeIn();
}

$("#menu_burger").click(function(){
  $.fn.openmenu();
});

$("#exit").click(function(){
$.fn.closemenu();
});

$("#sidebar h3 a").click(function () {
   $( this ).toggleClass( "highlight" );
   $("#sidebar h3 a").not(this).removeClass("highlight")
});


/* MENU MOBILE*/

$.fn.openmenumobile = function() {
$("#menu_burger").hide();
$("#sidebar").animate({
  "width": "20em"
});
openmenu = 1;
$("#sidebar-content").fadeIn();
}

function sidebarmobile(x) {
  if (x.matches) { // If media query matches
    $("#menu_burger").click(function(){
      $.fn.openmenumobile();
    });
  } else {
    $("#menu_burger").click(function(){
      $.fn.openmenu();
    });
  }
}

var x = window.matchMedia("(max-width: 768px)")
sidebarmobile(x) // Call listener function at run time
x.addListener(sidebarmobile) // Attach listener function on state changes


/* SPLASH ANIMATION */

var va = 0;

$.fn.slide = function() {
  $( ".arrow" ).animate({"width":"2em"}, 800, "easeInCubic");
  $( ".back" ).delay(800).animate( {"width":"100%" , "height":"100%", "background-color": "#7869F6"}, 400, "easeInCubic");
  $( ".backframe" ).delay(1000).animate( {"width":"100%" , "height":"100%"});
  $( ".arrowghost" ).delay(800).animate({"width":"2em" , "height":"0.7em", "margin-left": "0%", "left":"50%", "opacity":"1"}, 400, "easeInQuad");
  $( ".text-splash" ).delay(1000).animate({"color": "#ffff"}, 200, "easeInCubic");
  $( ".virtual-tour a" ).delay(1200).animate({"color": "white"}, 200, "easeInCubic");

  $( "#rubber1" ).delay(3000).animate({"width":"100%"}, 800);
  $( "#rubber2" ).delay(5000).animate({"width":"100%"}, 800);
  $( "#rubber3" ).delay(7000).animate({"width":"100%"}, 800);
};

$.fn.slideback = function() {
  $( ".virtual-tour a" ).animate({"color": "#7869F6"}, "easeInCubic");
  $( ".backframe" ).animate( {"width":"27em" , "height":"13em"},300);
  $( ".back" ).animate( {"width":"0%" , "height":"0%", "background-color": "white"}, 600, "easeOutCubic");
  $( ".arrowghost" ).animate({"width":"0px", "height":"0px", "margin-left": "50%", "left":"0%", "opacity":"0"}, 200, "easeOutQuad");
  $( ".arrow" ).animate({"width":"0px"}, 800, "easeOutCubic");
  $( ".text-splash" ).animate({"color": "black"}, 200, "easeInCubic");
  $( ".rubber" ).css({"width":"0px"});
  };


$.fn.attiva = function() {
  if (va == 0) {
  $.fn.slide();
  setTimeout(function(){$.fn.slideback();}, 8500);
  va = 1;
  setTimeout(function(){va = 0}, 9000);}
  };



$( ".block" ).mouseenter(function() {
  $.fn.attiva();
});

/* SPLASH ANIMATION MOBILE */

function splashmobile(x) {
  if (x.matches) { // If media query matches
    $.fn.slideback = function() {
      $( ".virtual-tour a" ).animate({"color": "#7869F6"}, "easeInCubic");
      $( ".backframe" ).animate( {"width":"13.5em" , "height":"6.5em"},300);
      $( ".back" ).animate( {"width":"0%" , "height":"0%", "background-color": "white"}, 600, "easeOutCubic");
      $( ".arrowghost" ).animate({"width":"0px", "height":"0px", "margin-left": "50%", "left":"0%", "opacity":"0"}, 200, "easeOutQuad");
      $( ".arrow" ).animate({"width":"0px"}, 800, "easeOutCubic");
      $( ".text-splash" ).animate({"color": "black"}, 200, "easeInCubic");
      $( ".rubber" ).css({"width":"0px"});
      };
      $.fn.attiva();
  } else {
    $.fn.slideback = function() {
      $( ".virtual-tour a" ).animate({"color": "#7869F6"}, "easeInCubic");
      $( ".backframe" ).animate( {"width":"27em" , "height":"13em"},300);
      $( ".back" ).animate( {"width":"0%" , "height":"0%", "background-color": "white"}, 600, "easeOutCubic");
      $( ".arrowghost" ).animate({"width":"0px", "height":"0px", "margin-left": "50%", "left":"0%", "opacity":"0"}, 200, "easeOutQuad");
      $( ".arrow" ).animate({"width":"0px"}, 800, "easeOutCubic");
      $( ".text-splash" ).animate({"color": "black"}, 200, "easeInCubic");
      $( ".rubber" ).css({"width":"0px"});
      };
      $( ".block" ).mouseenter(function() {
        $.fn.attiva();
      });
  };
};

var x = window.matchMedia("(max-width: 768px)")
splashmobile(x) // Call listener function at run time
x.addListener(splashmobile) // Attach listener function on state changes


/* AUTOMATIC SCROLL*/

/*
$.fn.scrolla = function() {
  if (sc == 0) {
      $("html, body").animate({ scrollTop: "

       vedi window.inner.height https://ryanve.com/lab/dimensions/

      " }, 1500, "easeOutQuint");
  sc = 1;}
  };


  $(window).on("scroll", function() {
    $.fn.scrolla();
  });

*/




/* SLIDER PROGETTI */

$(".roots_slide2").hide();
$(".roots_slide3").hide();
$(".roots_slide4").hide();


$( "#pr_arrowdx1" ).click(function() {
  $(".roots_slide1").hide();
  $(".roots_slide2").show();
});

$( "#pr_arrowdx2").click(function() {
  $(".roots_slide2").hide();
  $(".roots_slide3").show();
});

$( "#pr_arrowdx3" ).click(function() {
  $(".roots_slide3").hide();
  $(".roots_slide4").show();
});

$( "#pr_arrowsx2" ).click(function() {
  $(".roots_slide2").hide();
  $(".roots_slide1").show();
});

$( "#pr_arrowsx3").click(function() {
  $(".roots_slide3").hide();
  $(".roots_slide2").show();
});

$( "#pr_arrowsx4" ).click(function() {
  $(".roots_slide4").hide();
  $(".roots_slide3").show();
});


/* PAGINA PROGETTI MOBILE */

function projectsmobile(x) {
  if (x.matches) { // If media query matches
    $("#roots").click(function(){
      $("#projects-bar").hide();
      $(".virtual-tour-projects").hide();
      $(".roots_slide2").show();
      $(".roots_slide3").show();
      $(".roots_slide4").show();

      $("#goprlist").show();
    });
  } else {
    $("#projects-bar").show();
    $(".virtual-tour-projects").show();
    $(".roots_slide2").hide();
    $(".roots_slide3").hide();
    $(".roots_slide4").hide();

    $("#goprlist").hide();
    $("#menu_burger").show();
  }
}

$("#goprlist").click(function(){
  $("#projects-bar").show();
  $("#menu_burger").show();
  $("#goprlist").hide();
});


var x = window.matchMedia("(max-width: 768px)")
projectsmobile(x) // Call listener function at run time
x.addListener(projectsmobile) // Attach listener function on state changes


/* HIGHLIGHT PROGETTI */

$(".projects-title-list a").click(function () {
   $( this ).toggleClass( "highlight" );
   $(".projects-title-list a").not(this).removeClass("highlight")
});



/* CONTENTS */

$("#content").hide();

$("#roots").click(function(){
  $("#content").show();
});



/* TIMER */

// Set the date we're counting down to
var countDownDate = new Date("Oct 6, 2020 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "D " + hours + "H "
  + minutes + "M " + seconds + "S ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);






});
