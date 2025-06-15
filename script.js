const slides = document.querySelectorAll(".slide img");
const slideIndictorButtons = document.querySelectorAll(".slide-indicator");

let slideIndex = 0;

const initializeSliderInterval = () => {
  // Move slideDeck forward every 5 seconds
  setInterval(nextSlide, 5000);
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
  slideIndictorButtons.forEach((indicator) => {
    indicator.classList.remove("selected");
  });

  // Display next slide
  slides[slideIndex].classList.add("display-slide");
  slideIndictorButtons[slideIndex].classList.add("selected");
};

const nextSlide = () => {
  slideIndex++;
  displaySlide(slideIndex);
};

const prevSlide = () => {
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

// Get index of indicator clicked & switch slide to that index
slideIndictorButtons.forEach((indictor) => {
   indictor.addEventListener('click', function(e) {
    const clickedIndictor = e.target;
    const indicatorIndex = clickedIndictor.getAttribute('data-index');
    console.log(indicatorIndex);
    slideIndex = indicatorIndex;
    displaySlide(slideIndex);
   })
});
initializeSliderInterval();
