(function ($) {
  $("#header").load("header.html");
  $("#footer").load("footer.html");
  $(document).ready(function () {
    new Swiper(".product-history", {
      slidesPerView: 1.1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1.1,
        },
        768: {
          slidesPerView: 2.3,
        },
        1024: {
          slidesPerView: 4.2,
          loop: true,
        },
        1920: {
          slidesPerView: 4.3,
          loop: true,
        },
      },
    });
    new Swiper(".product-history-2", {
      slidesPerView: 1.1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1.1,
        },
        768: {
          slidesPerView: 2.3,
        },
        1024: {
          slidesPerView: 4.2,
          loop: true,
        },
        1920: {
          slidesPerView: 4.3,
          loop: true,
        },
      },
    });
    $(".continue").click(function () {
      $(".default-stage").fadeOut();
      $(".stage-2").fadeIn();
    });
  });
})(jQuery);
