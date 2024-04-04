$(document).ready(function () {

  // **About Section Fade-in:**

  $(window).scroll(function () {
    $(".about_item").each(function () {
      var aboutSectionPos = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scrollPos > aboutSectionPos - windowHeight + 200) {
        $(this).addClass("fade-in").removeClass("fade-out");
      } else {
        $(this).removeClass("fade-in").addClass("fade-out");
      }
    });
  });

  // **Pricing Item Fade-in:**

  $(window).scroll(function () {
    $(".pricing_item").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();

      if (position < scroll + $(window).height() - 200) {
        $(this).addClass('fade-in').removeClass('fade-out');
      } else {
        $(this).removeClass("fade-in").addClass("fade-out");
      }
    });
  });
});
