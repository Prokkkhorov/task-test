const prevSlideBtn = document.querySelector('.reviews__slider-btn_prev');
const nextSlideBtn = document.querySelector('.reviews__slider-btn_next');
const slider = document.querySelector('.reviews__slider');
const slide = document.querySelector('.reviews__slide');
const slidesCount = slider.querySelectorAll('.reviews__slide').length;

let activeSlideIndex = 0;

prevSlideBtn.addEventListener('click', () => {
  changeSlide('left');
});

nextSlideBtn.addEventListener('click', () => {
  changeSlide('right');
});

function changeSlide(direction) {
  if (direction === 'right') {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'left') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) { 
      activeSlideIndex = slidesCount - 1
    }
  }

  const width = slide.clientWidth + 25;

  slider.style.transform = `translateX(-${activeSlideIndex * width}px)`;
}

const minutesVal = document.querySelector('.time-counter__value_minutes');
const secondsVal = document.querySelector('.time-counter__value_seconds');

let time = 1800;

const timeCount = () => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  minutesVal.innerHTML = `${minutes}`;
  secondsVal.innerHTML = `${seconds}`;
  time--;
}

timeCount();
setInterval(timeCount, 1000);