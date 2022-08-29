'use strict';

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

const btnOrder = document.querySelector('.btn-scroll-to');
const navCandles = document.querySelector('#nav__link-candles');
const navFAQ = document.querySelector('#nav__link-faq');
const navContacts = document.querySelector('#nav__link-contacts');

const sectionContacts = document.querySelector('#section--5');


// Smooth Scroll 

btnOrder.addEventListener('click', function (e) {
  sectionContacts.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
})



////// Slider
let currentSlide = 0;
const maxSlide = slides.length - 4;

const slider = function () {
  // Functions
  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML('beforeend',
        `<button class='dots__dot' data-slide='${i}'></button>`)
    })
  }

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide='${slide}']`)
      .classList.add('dots__dot--active')
  }
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) =>
        s.style.transform = `translateX(${100 * (i - slide)}%)`
    )
  }

  // Next Slide
  const nextSlide = function () {
    if (currentSlide === maxSlide)
      currentSlide = 0;
    else
      currentSlide++;

    goToSlide(currentSlide);
    activateDot(currentSlide);
  }

  // Previous Slide
  const previousSlide = function () {
    if (currentSlide === 0)
      currentSlide = maxSlide;
    else
      currentSlide--;
    goToSlide(currentSlide);
    activateDot(currentSlide);
  }

  // Init
  const init = function () {
    createDots();
    activateDot(0);
    goToSlide(0);
  }

  init();

  // Event Handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', previousSlide);

  // Keybord Arrows 
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') previousSlide();
    if (e.key === 'ArrowRight') nextSlide();

  })

  // Dots
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  })
}

slider();


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


