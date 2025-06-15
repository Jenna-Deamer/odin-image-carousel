const slides = document.querySelectorAll(".slide img");

let slideIndex = 0;
let interval = null;

const initializeSliderInterval = () => {
  interval = setInterval(nextSlide, 2000);
};

const displaySlide = (index) => {
  // Handle slideIndex going past # of imgs
  if (index >= slides.length){
    slideIndex = 0;
  }
  // Ensure all slides are hidden
  slides.forEach((slide) => {
    slide.classList.remove("display-slide");
  });
  // Display next slide
  slides[slideIndex].classList.add("display-slide");
};

const nextSlide = () => {
  slideIndex++;
  displaySlide(slideIndex);
};

const prevSlide = () => {};

// Attach event listeners
const nextSlideBtn = document
  .querySelector(".next")
  .addEventListener("click", nextSlide);
const prevSlideBtn = document
  .querySelector(".prev")
  .addEventListener("click", prevSlide);

initializeSliderInterval();
