function persons() {
  const items = document.querySelectorAll(".card");
  const itemsCount = items.length;
  const current = document.querySelector(".persons__arrow-number");

  const slider = document.querySelector(".persons__cards");
  const nextBtn = document.querySelector(".persons__arrow-right");
  const prevBtn = document.querySelector(".persons__arrow-left");
  const slides = document.querySelectorAll(".card");

  const screenWidth = window.innerWidth;
  let clickCount = 0;
  let totalSlides = slides.length;

  let moveSlider;
  let currentSlider;
  let clickBtn;


  if(screenWidth >= 1051) {
    moveSlider=33.3;
    currentSlider=3;
    clickBtn=3;
  }
  if(screenWidth <= 1050 && screenWidth >= 760) {
    moveSlider=50;
    currentSlider=2;
    clickBtn=4;
  }

  if(screenWidth <= 760) {
    moveSlider=100;
    currentSlider=1;
    clickBtn=5;
  }
  currentNumber();

  function nextSlide(){
    clickCount++;
    checkLimits();
    currentNumber();
  }

  function prevSlide () {
    clickCount--;
    checkLimits();
    currentNumber();
  }

  function checkLimits() {
    if (clickCount > clickBtn) {
      clickCount = 0;
    } else if (clickCount < 0) {
      clickCount = clickBtn;
    }
    slider.style.transform = `translateX(-${clickCount * moveSlider}%)`;
  }

  function currentNumber() {
    current.innerHTML = `<div class="persons__arrow-number">${clickCount + currentSlider}<span class="persons__arrow-total">/${itemsCount}</span></div>`;
  }
  nextBtn.addEventListener("click", nextSlide);

  prevBtn.addEventListener("click", prevSlide);

  

  setInterval(nextSlide, 4000);
  console.log(screenWidth);
}

export default persons;

