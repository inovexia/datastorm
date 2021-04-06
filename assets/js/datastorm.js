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
    new Swiper(".service-slider", {
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
          slidesPerView: 3.5,
          spaceBetween: 50,
          loop: true,
        },
      },
    });
    new Swiper(".partners-list-slider", {
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
          slidesPerView: 3.5,
          spaceBetween: 50,
          loop: true,
        },
      },
    });
    $(".process .continue").click(function () {
      $(".default-stage, .process .continue").fadeOut(function () {
        $(".stage-2, .process .form-submit").fadeIn();
      });
    });

    $(".form-details").on("submit", function (event) {
      event.preventDefault();
      let dataString = $(this).serialize();
      $.ajax({
        type: "POST",
        url: "form-to-email.php",
        data: dataString,
        success: function (data) {
          $(".form-details")[0].reset();
        },
      }).done(function (data) {
        $(".form-details").addClass("v-hidden");
        setTimeout(function () {
          $(".stage-3").fadeIn();
        }, 500);
      });
    });
    // let snapScroll = $("header, section, footer").SnapScroll({
    //   hashes: true,
    // });

    //Listen for active element change
    //You could listen globally like $(document)
    // $("header").on(snapScroll.eventChangeActive, function (evt, newActive) {});

    //Listen for visible element change
    //You could listen on a specific element like $("header")

    // $(document).on(
    //   snapScroll.eventChangeVisible,
    //   function (evt, visibleList) {}
    // );
  });
})(jQuery);

$(document).scroll(function () {
  $("section").each(function () {
    if (
      $(this).position().top <= $(document).scrollTop() + 350 &&
      $(this).position().top + $(this).outerHeight() > $(document).scrollTop()
    ) {
      let dark = $(this).attr("id");
      if (dark == "section4") {
        $("body").addClass("dark-mode");
      } else {
        $("body").removeClass("dark-mode");
      }
    }
  });
});

$(document).scroll(function () {
  $("section").each(function () {
    if (
      $(this).position().top <= $(document).scrollTop() &&
      $(this).position().top + $(this).outerHeight() > $(document).scrollTop()
    ) {
      let dark = $(this).attr("id");
      if (dark == "section5") {
        $(".our-past-projects").addClass("pos-fixed");
      } else {
        $(".our-past-projects").removeClass("pos-fixed");
      }
    }
  });
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("#header").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();
  // if (Math.abs(lastScrollTop - st) <= delta) return;
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $("#header").removeClass("nav-down").addClass("nav-up");
  } else if (st <= 0) {
    $("#header").removeClass("nav-down");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $("#header").removeClass("nav-up").addClass("nav-down");
    }
  }

  lastScrollTop = st;
}
