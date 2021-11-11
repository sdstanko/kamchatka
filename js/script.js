// window.addEventListener("load", function() {
//   let day2SliderBody = document.querySelector('.day2__slider-body');
//   let pageWidth = document.documentElement.clientWidth;
//   if (pageWidth >= 992) {
//     day2SliderBody.dir = 'rtl';
//   } else {
//     day2SliderBody.dir = 'trl';
//   }
// });

function ibg(){

let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
	if(ibg[i].querySelector('img')){
		ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}

ibg();

const burgerMenu = document.querySelector('.burger');
if (burgerMenu) {
  const menuList = document.querySelector('.menu');
  burgerMenu.addEventListener("click", function(e) {
    document.body.classList.toggle('lock');
    burgerMenu.classList.toggle('active');
    menuList.classList.toggle('active');
  });
}

const introSlider = new Swiper('.intro__slider-body', {
  observer: true,
		observeParents: true,
		watchOverflow: true,
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: -30,
  speed: 500,
//   parallax: true,
//   watchOverflow: true,
//   autoplay: {
//   	delay: 5000,
//   },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    // 769: {
    //   spaceBetween: -30
    // },
  }
});

const day1Slider = new Swiper('.day1__slider-body', {
  observer: true,
		observeParents: true,
		watchOverflow: true,
  loop: true,
  slidesPerView: 'auto',
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1
    },

    376: {
      slidesPerView: 'auto'
    },

    769: {
      spaceBetween: -20
    },
  }
});

const day2Slider = new Swiper('.day2__slider-body', {
  observer: true,
		observeParents: true,
		watchOverflow: true,
  loop: true,
  slidesPerView: 'auto',
  speed: 500,
  spaceBetween: 32,
  // initialSlide: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1
    },

    500: {
      slidesPerView: 'auto',
      spaceBetween: 20
    },
  }
});

const day3Slider = new Swiper('.day3__slider-body', {
  observer: true,
		observeParents: true,
		watchOverflow: true,
  loop: true,
  slidesPerView: 'auto',
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1
    },

    376: {
      slidesPerView: 'auto'
    },

    769: {
      spaceBetween: -20
    },
  }
});


const day4Slider = new Swiper('.day4__slider-body', {
  observer: true,
		observeParents: true,
		watchOverflow: true,
  loop: true,
  slidesPerView: 'auto',
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1
    },

    376: {
      slidesPerView: 'auto'
    },

    769: {
      spaceBetween: -20
    },
  }
});

const day5Slider = new Swiper('.day5__slider-body', {
  observer: true,
		observeParents: true,
		watchOverflow: true,
  loop: true,
  slidesPerView: 'auto',
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1
    },

    376: {
      slidesPerView: 'auto'
    },

    769: {
      spaceBetween: -20
    },
  }
});

const day6Slider = new Swiper('.day6__slider-body', {
  observer: true,
		observeParents: true,
		watchOverflow: true,
  loop: true,
  slidesPerView: 'auto',
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1
    },

    376: {
      slidesPerView: 'auto'
    },

    769: {
      spaceBetween: -20
    },
  }
});

const day7Slider = new Swiper('.bottom-day7__slider-body', {
  observer: true,
		observeParents: true,
		watchOverflow: true,
  loop: true,
  slidesPerView: 'auto',
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1
    },

    376: {
      slidesPerView: 'auto',
      spaceBetween: 32
    },

    // 769: {
    // },
  }
});

const teamSlider = new Swiper('.team__slider', {
  loop: true,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 0,
    },

    425: {
      slidesPerView: 1.3,
      spaceBetween: 30,
    },

    550: {
      slidesPerView: 1.6,
      spaceBetween: 35,
    },

    650: {
      slidesPerView: 2,
      spaceBetween: 35,
    },

    768: {
    slidesPerView: 'auto',
      spaceBetween: 96,
    }
  },
});

window.addEventListener("scroll", function() {
  const header = document.querySelector('.header');
  let scrollPos = window.pageYOffset;
  // console.log(scrollPos);
  if (scrollPos) {
    header.style.paddingTop = "20px";
    header.style.paddingBottom = "20px";
    header.style.background = "#ffffff";
    header.style.boxShadow = "0px 6px 14px rgba(0, 0, 0, 0.25)";
  } else {
    header.style.paddingTop = "35px";
    header.style.paddingBottom = "35px";
    header.style.background = "transparent";
    header.style.boxShadow = "none";
  }
});

let counterInput = document.querySelector('.form-request__count');
let counterMinus = document.querySelector('.participants-form__minus');
let counterPlus = document.querySelector('.participants-form__plus');

counterPlus.addEventListener("click", function(event) {
  event.preventDefault();
  let currentValue = counterInput.value;
  if (currentValue > 0) {
    console.log(currentValue);
    counterInput.value++;
  } else {
    counterInput.value = 1;
  }
});

counterMinus.addEventListener("click", function(event) {
  event.preventDefault();
  let currentValue = counterInput.value;
  if (currentValue > 0) {
    console.log(currentValue);
    counterInput.value--;
  } else {
    counterInput.value = 0;
  }
});

