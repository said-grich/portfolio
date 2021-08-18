(function($) {
    $.scrollToElement = function($element, speed) {

        speed = speed || 750;

        $("html, body").animate({
            scrollTop: $element.offset().top,
            scrollLeft: $element.offset().left
        }, speed);
        return $element;
    };

    $.fn.scrollTo = function(speed) {
        speed = speed || "normal";
        return $.scrollToElement(this, speed);
    };
})(jQuery);

$(document).ready(function() {
    // Transition effect for navbar and back-to-top icon
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 550) { 
          $('.navbar').addClass('solid');
          $('.back-to-top').addClass('visible'); 
      } else {
          $('.navbar').removeClass('solid');
          $('.back-to-top').removeClass('visible');  
      }

    });
    // Scrolling effect for Arrow icons
    $("#scrollIcon").click(function(e) {
        e.preventDefault();
        $.scrollToElement($("#about"), 1000);
    });
    $("#nav-about").click(function(e) {
        e.preventDefault();
        $.scrollToElement($("#about"), 1000);
    });
    $("#nav-portfolio").click(function(e) {
        e.preventDefault();
        $.scrollToElement($("#portfolio"), 1000);
    });
    $("#nav-contact").click(function(e) {
        e.preventDefault();
        $.scrollToElement($("#contact"), 1000);
    });
    $(".navbar-brand").click(function(e) {
        e.preventDefault();
        $.scrollToElement(0, 1000);
    });
      
  });