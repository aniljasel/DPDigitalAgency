;(function($){

$(document).ready(function(){

//========== HEADER ACTIVE STRATS ============= //
if ($("#header").length > 0) {
$(window).on("scroll", function (event) {
  var scroll = $(window).scrollTop();
  if (scroll < 1) {
  $(".header-area").removeClass("sticky");
  } else {
  $(".header-area").addClass("sticky");
  }
  });
}

//========== HEADER ACTIVE ENDS ============= //

//========== SIDEBAR/SEARCH AREA ============= //
$(".header-search-btn").on("click", function (e) {
  e.preventDefault();
  $(".header-search-form-wrapper").addClass("open");
  $('.header-search-form-wrapper input[type="search"]').focus();
  $('.body-overlay').addClass('active');
});
$(".tx-search-close").on("click", function (e) {
  e.preventDefault();
  $(".header-search-form-wrapper").removeClass("open");
  $("body").removeClass("active");
  $('.body-overlay').removeClass('active');
});
//========== SIDEBAR/SEARCH AREA ============= //

//========== PROGRESS ACTIVE ENDS ============= //
$("#web-design-skillbar").circleProgress({
  value:0.9,
  size:118,
  thickness:2,
  fill:'#D1B06B',
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(Math.round(82 * progress) + '<i>%</i>');
});

    //========== PRELOADER ============= //
$(window).on("load", function (event) {
  setTimeout(function () {
    $(".preloader").fadeToggle();
    document.body.style.overflow = 'hidden';
  }, 1000);
  
//   end

$("#graphic-design-skillbar").circleProgress({
  value:0.95,
  size:118,
  thickness:2,
  fill:'#D1B06B',
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(Math.round(49 * progress) + '<i>%</i>');
});

$("#digital-marketing-skillbar").circleProgress({
  value:0.84,
  size:118,
  thickness:2,
  fill:'#D1B06B',
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(Math.round(99 * progress) + '<i>%</i>');
});

$("#seo-marketing-skillbar").circleProgress({
  value:0.84,
  size:118,
  thickness:2,
  fill:'#D1B06B',
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(Math.round(95 * progress) + '<i>%</i>');
});


//========== PAGE PROGRESS STARTS ============= //
  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition =
  "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 550;
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".progress-wrap").addClass("active-progress");
    } else {
      jQuery(".progress-wrap").removeClass("active-progress");
    }
  });
  jQuery(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
//========== PAGE PROGRESS STARTS ============= //

//========== VIDEO POPUP STARTS ============= //
   if ($(".popup-youtube").length > 0) {
    $(".popup-youtube").magnificPopup({
    type: "iframe",
    });
    }
//========== VIDEO POPUP ENDS ============= //
AOS.init;
AOS.init({disable: 'mobile'});

//========== NICE SELECT ============= //
$('select').niceSelect();

//========== CASE IMAGE ============= //
$('.cs_hover_active').hover(function () {
  $(this).addClass('active').siblings().removeClass('active');
  });

  $('.images-content-area').hover(function () {
    $(this).addClass('active').siblings().removeClass('active');
    });
});
//========== COUNTER UP============= //
const ucounter = $('.counter');
if (ucounter.length > 0) {
 ucounter.countUp();
};

const color = $(".choose-auhtor li a");
color.on("click", function () {
  $(".choose-auhtor li a");
  $(this).addClass("active");
});

//========== TESTIMONIAL AREA ============= //

// testimonial //
$('.slider-images-area').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  dots:false,
  items:10,
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:2,
          nav:false,
      },
      600:{
          items:4,
      },
      1000:{
          items:5,
      }
  }
});

// testimonial //
$('.case-study-sliderarea').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  dots:true,
  items:10,
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false,
      },
      600:{
          items:2,
      },
      1000:{
          items:2,
      }
  }
});


// testimonial //
$('.solution-slider-area').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  dots:true,
  center: true,
  items:10,
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false,
      },
      600:{
          items:2,
      },
      1000:{
          items:3,
      }
  }
});


// testimonial //
$('.header-bottom-img').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:false,
  items:10,
  autoplay:true,
  navText:["<i class='fa-solid fa-angle-left'></i>" , "<i class='fa-solid fa-angle-right'></i>"],
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },
      1000:{
          items:1,
      }
  }
});

// testimonial //
$('.testimonials-slider-area').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  dots:true,
  items:10,
  autoplay:true,
  smartSpeed:3000,
  autoplayTimeout:4000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false,
      },
      600:{
          items:2,
      },
      1000:{
          items:1,
      }
  }
});

// testimonial //
$('.testimonial2-owl-carousel-area').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  dots:true,
  items:10,
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false,
      },
      600:{
          items:2,
      },
      1000:{
          items:1,
      }
  }
});

   // testimonial //
    $('.testimonial4-slider-area').owlCarousel({
      loop:true,
      margin:30,
      nav:true,
      dots:false,
      mouseDrag:true,
      items:10,
      autoplay:true,
      navText:["<i class='fa-solid fa-angle-left'></i>" , "<i class='fa-solid fa-angle-right'></i>"],
      smartSpeed:3000,
      autoplayTimeout:4000,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true,
          },
          600:{
              items:2,
          },
          1000:{
              items:3,
          }
      }
    });

       // testimonial //
    $('.slider-all-boxarea').slick({
      autoplay: true,
      autoplaySpeed: 0,
      speed: 5000,
      arrows: false,
      swipe: false,
      slidesToShow: 3,
      cssEase: 'linear',
      pauseOnFocus: true,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          }
          },
      {
        breakpoint: 1024,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        }
        },

        {
          breakpoint: 600,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
        },

        {
          breakpoint: 480,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
        },

        {
          breakpoint: 375,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
        },

        {
          breakpoint: 320,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
        },
      ]
    });
    // testimonial //
    $('.slider-all-boxarea2').slick({
      autoplay: true,
      autoplaySpeed: 0,
      speed: 8000,
      arrows: false,
      swipe: false,
      slidesToShow: 3,
      cssEase: 'linear',
      pauseOnFocus: true,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          }
          },
      {
        breakpoint: 1024,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        }
        },

        {
          breakpoint: 600,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
        },

        {
          breakpoint: 480,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
        },

        {
          breakpoint: 375,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
        },

        {
          breakpoint: 320,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
        },
      ]
    });

     //testimonial slider
     $(".testimonial-nav").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: ".slider-testimonial",
      dots: false,
      loop: true,
      centerMode: true,
      focusOnSelect: true,
      arrows: false,
    });

    $(".slider-testimonial").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $(".testimonial-prev-arrow"),
      nextArrow: $(".testimonial-next-arrow"),
      fade: true,
      loop: true,
      asNavFor: ".testimonial-nav",
    });


      // testimonial //
$(".product-slider-nav").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  focusOnSelect: true,
  asNavFor: ".product-slider-single",
  autoplay:true,
  autoplayTimeout:500,
  prevArrow: $('.testimonial-next-arrow'),
  nextArrow: $('.testimonial-prev-arrow'),
});
$('.slider-nav1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.foter-carousel',
  dots: false,
  arrows:true,
  nav:true,
  loop:true,
  centerMode: false,
  focusOnSelect: true,
  autoplay:true,
  autoplayTimeout:500,
  prevArrow: $('.testimonial-next-arrow'),
  nextArrow: $('.testimonial-prev-arrow'),
});
$('.foter-carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay:true,
  nav:true,
  prevArrow: $('.testimonial-next-arrow'),
  nextArrow: $('.testimonial-prev-arrow'),
  fade: true,
  loop:true,
  asNavFor: '.slider-nav1',
});

// testimonial //
$('.case-slider-area').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:false,
  items:10,
  autoplay:true,
  navText:["<i class='fa-solid fa-angle-left'></i>" , "<i class='fa-solid fa-angle-right'></i>"],
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:3,
      }
  }
});

$('.testimonial12-boxarea-vertical').slick({
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  vertical: true,
  autoplay:true,
  autoplaySpeed:1500,
  verticalSwiping: true,
  prevArrow: '<i class="fa-solid fa-angle-up"></i>',
  nextArrow: '<i class="fa-solid fa-angle-down"></i>',
  });

// testimonial //
$('.project12-slider-area').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  dots:true,
  items:10,
  center:true,
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:3,
      }
  }
});
    
// testimonial //
$('.service-slider').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:true,
  items:10,
  center:true,
  navText:["<i class='fa-solid fa-angle-left'></i>" , "<i class='fa-solid fa-angle-right'></i>"],
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:3,
      }
  }
});

// testimonial //
$('.testimonial13-slider').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:true,
  items:10,
  navText:["<i class='fa-solid fa-angle-left'></i>" , "<i class='fa-solid fa-angle-right'></i>"],
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:2,
      }
  }
});

// testimonial //
$('.testimonial14-slider-area').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  dots:true,
  items:10,
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:3,
      }
  }
});

// testimonial //
$('.case14-slider-area').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:true,
  items:10,
  autoplay:true,
  navText:["<i class='fa-solid fa-angle-left'></i>" , "<i class='fa-solid fa-angle-right'></i>"],
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },
      1000:{
          items:2,
      }
  }
});

// testimonial //
$('.testimonial15-slider').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:false,
  items:10,
  autoplay:true,
  navText:["<i class='fa-solid fa-angle-left'></i>" , "<i class='fa-solid fa-angle-right'></i>"],
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },
      1000:{
          items:1,
      }
  }
});

//========== GSAP AREA ============= //

if ($('.text-anime-style-1').length) {
  let staggerAmount 	= 0.05,
  translateXValue = 0,
  delayValue 		= 0.5,
   animatedTextElements = document.querySelectorAll('.text-anime-style-1');

  animatedTextElements.forEach((element) => {
  let animationSplitText = new SplitText(element, { type: "chars, words" });
    gsap.from(animationSplitText.words, {
    duration: 1,
    delay: delayValue,
    x: 20,
    autoAlpha: 0,
    stagger: staggerAmount,
    scrollTrigger: { trigger: element, start: "top 85%" },
    });
  });
  }

  if ($('.text-anime-style-2').length) {
  let	 staggerAmount 		= 0.05,
   translateXValue	= 20,
   delayValue 		= 0.5,
   easeType 			= "power2.out",
   animatedTextElements = document.querySelectorAll('.text-anime-style-2');

  animatedTextElements.forEach((element) => {
  let animationSplitText = new SplitText(element, { type: "chars, words" });
    gsap.from(animationSplitText.chars, {
      duration: 1,
      delay: delayValue,
      x: translateXValue,
      autoAlpha: 0,
      stagger: staggerAmount,
      ease: easeType,
      scrollTrigger: { trigger: element, start: "top 85%"},
    });
  });
  }

  if ($('.text-anime-style-3').length) {
  let	animatedTextElements = document.querySelectorAll('.text-anime-style-3');

  animatedTextElements.forEach((element) => {
  //Reset if needed
  if (element.animation) {
    element.animation.progress(1).kill();
    element.split.revert();
  }

  element.split = new SplitText(element, {
    type: "lines,words,chars",
    linesClass: "split-line",
  });
  gsap.set(element, { perspective: 400 });

  gsap.set(element.split.chars, {
    opacity: 0,
    x: "50",
  });

  element.animation = gsap.to(element.split.chars, {
    scrollTrigger: { trigger: element,	start: "top 90%" },
    x: "0",
    y: "0",
    rotateX: "0",
    opacity: 1,
    duration: 1,
    ease: Back.easeOut,
    stagger: 0.02,
  });
  });
  }

});
//========== PRELOADER AREA ============= //

/*-------------------- 16. progressbar ----------------------------*/
{
  function animateElements() {
    $('.progressbar').each(function () {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var percent = $(this).find('.circle').attr('data-percent');
      var percentage = parseInt(percent, 10) / parseInt(100, 10);
      var animate = $(this).data('animate');
      if (elementPos < topOfWindow + $(window).height() - 10 && !animate) {
        $(this).data('animate', true);
        $(this).find('.circle').circleProgress({
          startAngle: -Math.PI / 2,
          value: percent / 100,
          size: 180,
          thickness: 10,
          emptyFill: "#222326",
          fill: {
            color: '#FFFFFF'
          }
        }).on('circle-animation-progress', function (event, progress, stepValue) {
          $(this).find('div').text((stepValue*100).toFixed() + "%");
        }).stop();
      }
    });
  }

  // Show animated elements
  animateElements();
  $(window).scroll(animateElements);
};


if($('.reveal').length)
{gsap.registerPlugin(ScrollTrigger);
  let revealContainers=document.querySelectorAll(".reveal");
  revealContainers.forEach((container)=>{let image=container.querySelector("img");
  let tl=gsap.timeline({scrollTrigger:{trigger:container,toggleActions:"play none none none"}});
  tl.set(container,{autoAlpha:1});tl.from(container,1.5,{xPercent:-100,ease:Power2.out});
  tl.from(image,1.5,{xPercent:100,scale:1.3,delay:-1.5,ease:Power2.out});})
  ;}


function updateProgress(selector, value) {
  document.querySelector(selector).style.width = value + '%';
}
updateProgress('.progress-inner.branding', 96);
updateProgress('.progress-inner.development', 90);
updateProgress('.progress-inner.advertising', 70);
updateProgress('.progress-inner.marketing', 94);

//========== PARALLAX AREA ============= //

})(jQuery);
// vision




// vison end

