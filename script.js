const slides = document.querySelectorAll(".slide img");

let slideIndex = 0;
let interval = null;

const initializeSliderInterval = () => {
  interval = setInterval(nextSlide, 5000);
};

const displaySlide = (index) => {
  // Handle slideIndex going past # of imgs
  if (index >= slides.length) {
    slideIndex = 0;
  }
  // Set slide to last in list when index is less than 0 (Hitting prev button)
  else if (index < 0) {
    slideIndex = slides.length - 1;
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

const prevSlide = () => {
  // reset timer to prevent it from going right back
  interval = setInterval(nextSlide, 5000);
  // Go backwards in slideshow
  slideIndex--;
  displaySlide(slideIndex);
};

// Attach event listeners
const nextSlideBtn = document
  .querySelector(".next")
  .addEventListener("click", nextSlide);
const prevSlideBtn = document
  .querySelector(".prev")
  .addEventListener("click", prevSlide);

initializeSliderInterval();
