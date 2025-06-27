
//Navbar toggle icon
function navbar_toggler() {
    $('.navbar-toggler[data-toggle=collapse]').click(function () {
        if ($(".navbar-toggler[data-bs-toggle=collapse] i").hasClass('fa-bars')) {
        } else {
            $(".navbar-toggler[data-bs-toggle=collapse] i").removeClass("fa-times");
        }
    });
  }
  navbar_toggler();
  
// Navbar clone in mobile device
function navClone() {
    $('.js-clone-nav').each(function () {
        var $this = $(this);
        $this.clone().attr('class', 'navbar-nav ml-auto').appendTo('.d2c_mobile_view_body');
    });

    $('.d2c_mobile_view .nav-link').click(function () {
        $(".nav-link").removeClass("active");
        $('.d2c_mobile_view').removeClass('show');
        $(this).toggleClass('active');
    });
    }
    navClone();

// JS for fancybox Slide & button

function fancybox() {
  $('[data-fancybox]').fancybox({
      protect: true,
      buttons: [
          "fullScreen",
          "thumbs",
          "share",
          "slideShow",
          "close"
      ],
      image: {
          preload: false
      },
  });
}
fancybox();

// Team Slider
$('.d2c_team_slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoplay:true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  pauseOnHover:false,
  responsive: [
    {
    breakpoint: 1500,
    settings: {
        slidesToShow: 3,
    }
    },
    {
    breakpoint: 992,
    settings: {
        slidesToShow: 2,
    }
    },
    {
    breakpoint: 480,
    settings: {
        slidesToShow: 1,
    }
    }
  ]
});

// Testimonial Slider
$('.d2c_testimonial_slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay:true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover:false,
  responsive: [
    {
    breakpoint: 1500,
    settings: {
        slidesToShow: 1,
    }
    },
    {
    breakpoint: 992,
    settings: {
        slidesToShow: 1,
    }
    },
    {
    breakpoint: 480,
    settings: {
        slidesToShow: 1,
    }
    }
  ]
});

// Form Validation JS
(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
    })
})();


// Preloader JS
window.addEventListener('load', function() {
    var preloader = document.querySelector('.preloader');
    preloader.classList.add('hide');
});

// ScrollBtn JS
window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
    var scrollBtn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
}

// Counter
$(document).ready(function() {
  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
  counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
  var localStart = start;
  var increment = Math.ceil((value - start) / 100);
  var intervalSpeed = 10;
  var interval = setInterval(function() {
      if (localStart < value) {
      localStart += increment;
      if (localStart > value) {
          localStart = value;
      }
      counters[id].innerHTML = localStart;
      } else {
      clearInterval(interval);
      }
  }, intervalSpeed);
  }

  for (j = 0; j < countersQuantity; j++) {
  count(0, counter[j], j);
}
});

// Image Slider JS

function initComparisons() {
  var x, i;
  
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    
    compareImages(x[i]);
  }
}

function compareImages(img) {
  var slider, clicked = 0, w, h;

  w = img.offsetWidth;
  h = img.offsetHeight;

  img.style.width = (w / 2) + "px";

  slider = document.createElement("DIV");
  slider.setAttribute("class", "img-comp-slider");

  img.parentElement.insertBefore(slider, img);

  slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
  slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";

  slider.addEventListener("mousedown", slideReady);

  window.addEventListener("mouseup", slideFinish);

  slider.addEventListener("touchstart", slideReady);

  window.addEventListener("touchend", slideFinish);
  function slideReady(e) {

      e.preventDefault();

      clicked = 1;

      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
  }
  function slideFinish() {

      clicked = 0;
  }
  function slideMove(e) {
      var pos;

      if (clicked == 0) return false;

      pos = getCursorPos(e);

      if (pos < 0) pos = 0;
      if (pos > w) pos = w;

      slide(pos);
  }
  function getCursorPos(e) {
      var a, x = 0;
      e = (e.changedTouches) ? e.changedTouches[0] : e;

      a = img.getBoundingClientRect();

      x = e.pageX - a.left;

      x = x - window.pageXOffset;
      return x;
  }
  function slide(x) {

      img.style.width = x + "px";

      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
  }
}

initComparisons();
// 


// Video JS

function playVideo(videoId, thumbnailId, playButtonId) {

    document.getElementById(thumbnailId).style.display = 'none';
    document.getElementById(playButtonId).style.display = 'none';

    document.getElementById(videoId).style.display = 'block';
}

