function steps() {
  // Исходные данные по слайдеру (const)
  const slides = document.querySelectorAll(".steps__items--mobile"),
    slider = document.querySelector(".steps__grid--mobile"),
    sliderDots = document.querySelectorAll(".steps__dot"),
    nextBtn = document.querySelector(".steps__arrow-right"),
    prevBtn = document.querySelector(".steps__arrow-left"),
    sliderWidth = document.querySelector(".steps__items--mobile").offsetWidth;

  const screenWidth = window.innerWidth;

  let counter = 0;
  const gapInterval=24;
  nextBtn.addEventListener("click", () => {
    if (screenWidth >= 741) {
      if (counter < 3) {
        counter++;
        slider.style.transform = `translateX(-${counter * (sliderWidth+gapInterval)}px)`;
        // nextBtn.classList.remove("steps__arrow-right-gray");
        console.log(counter);
      }
      if (counter == 3) {
        nextBtn.classList.add("steps__arrow-right-gray");
      }
      if (counter > 3) {
        nextBtn.classList.remove("steps__arrow-right-gray");
      }
      if (counter > 0) {
        prevBtn.classList.remove("steps__arrow-left-gray");
      }
      thisSlide(counter);
    } else {
      if (counter < 4) {
        counter++;
        slider.style.transform = `translateX(-${counter * (sliderWidth+gapInterval)}px)`;
        console.log(counter);
      }
      if (counter == 4) {
        nextBtn.classList.add("steps__arrow-right-gray");
      }
      if (counter > 4) {
        nextBtn.classList.remove("steps__arrow-right-gray");
      }
      if (counter > 0) {
        prevBtn.classList.remove("steps__arrow-left-gray");
      }
      thisSlide(counter);
    }
  });

  prevBtn.addEventListener("click", () => {
    if (screenWidth >= 741) {
      if (counter > 0) {
        counter--;
        slider.style.transform = `translateX(-${counter * (sliderWidth+gapInterval)}px)`;
        console.log(counter);
      }
      if (counter < 3) {
        nextBtn.classList.remove("steps__arrow-right-gray");
      }
      if (counter == 0) {
        prevBtn.classList.add("steps__arrow-left-gray");
      }
      thisSlide(counter);
      
    } else {
      if (counter > 0) {
        counter--;
        slider.style.transform = `translateX(-${counter * (sliderWidth+gapInterval)}px)`;
        console.log(counter);
      }
      if (counter < 4) {
        nextBtn.classList.remove("steps__arrow-right-gray");
      }
      if (counter == 0) {
        prevBtn.classList.add("steps__arrow-left-gray");
      }
      thisSlide(counter);
    }
  });

  function thisSlide(index) {
    sliderDots.forEach((item) => item.classList.remove("steps__dot-active"));
    sliderDots[index].classList.add("steps__dot-active");
  }
}
export default steps;
