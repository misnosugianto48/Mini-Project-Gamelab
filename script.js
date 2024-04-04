$(document).ready(function () {

  // **About Section Fade-in:**

  var aboutSection = $("#about_section");
  var aboutSectionPos = aboutSection.offset().top;
  var windowHeight = $(window).height();

  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();

    if (scrollPos > aboutSectionPos - windowHeight + 200) {
      aboutSection.addClass("fade-in").removeClass("fade-out");
    } else {
      aboutSection.removeClass("fade-in").addClass("fade-out");
    }
  });

  // **Pricing Item Fade-in:**

  $(".pricing_item").each(function () {
    $(this).fadeIn(0); // Pre-load pricing items hidden (optional)
  });

  $(window).scroll(function () {
    $(".pricing_item").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();

      if (position < scroll + $(window).height() - 200) {
        $(this).fadeIn(1000);
      } else {
        $(this).fadeOut(0);
      }
    });
  });
});
