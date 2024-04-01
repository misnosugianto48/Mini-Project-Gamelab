$(document).ready(function () {
    $(window).scroll(function () {
      var aboutSection = $("#about_section");
      var aboutSectionPos = aboutSection.offset().top;
      var windowHeight = $(window).height();
      var scrollPos = $(window).scrollTop();

      if (scrollPos > aboutSectionPos - windowHeight + 200) {
        aboutSection.addClass("fade-in").removeClass("fade-out");
      } else {
        aboutSection.removeClass("fade-in").addClass("fade-out");
      }
    });
  });