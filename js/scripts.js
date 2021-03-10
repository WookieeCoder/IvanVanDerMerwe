/*!
    * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
    //Test for valid email
    var validateEmail = function (email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    //Display is email is valid or not

    var emailIsValid = function () {
        $(".notify").toggleClass("active");
        $("#notifyType").toggleClass("success");
        
        setTimeout(function(){
          $(".notify").removeClass("active");
          $("#notifyType").removeClass("success");
        },2000);
      };
      
      var emailIsNotValid = function () {
        $(".notify").addClass("active");
        $("#notifyType").addClass("failure");
        
        setTimeout(function(){
          $(".notify").removeClass("active");
          $("#notifyType").removeClass("failure");
        },2000);
      };

    // Sends Email
    $(".clickMe").click(function () {
        let email = document.getElementById("inputEmail").value
        if(validateEmail(email)) {
            const send_cv = async () =>
                await(await fetch(`/.netlify/functions/send_cv?mailstr=${email}`))
            emailIsValid()
            send_cv();
        } else {
            emailIsNotValid()
        }
    });
})(jQuery); // End of use strict