let lastScrollTop = 0;

  $(document).ready(function () {
    $('#exploreBtn').click(function () {
      $('html, body').animate({
        scrollTop: $('#features').offset().top
      }, 800);
    });

    $('#buyBtn').click(function () {
      $('html, body').animate({
        scrollTop: $('#buy').offset().top
      }, 800);
    });

    // Scroll direction detection
    $(window).on("scroll", function () {
      let st = $(this).scrollTop();
      const hero = $('.hero');
      const h1 = $('.hero h1');

      if (st < lastScrollTop) {
        // Scrolling up
        if ($(window).scrollTop() < hero.height() + 100) {
          h1.addClass('animate-up');
        }
      } else {
        // Scrolling down
        h1.removeClass('animate-up');
      }

      lastScrollTop = st;
    });
  });