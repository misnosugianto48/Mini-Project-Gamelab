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

$(document).ready(function () {
  $(".pricing_item").fadeIn(1000);

  $(window).scroll(function () {
    $(".pricing_item").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();

      if (position < scroll + $(window).height() - 200) {
        $(this).fadeIn(1000);
      }
    });
  });
});
