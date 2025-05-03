let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.getElementById('slider');
const dotsContainer = document.getElementById('dots');

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  document.querySelectorAll('.dots span').forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex);
  });
}

function changeSlide(direction) {
  currentIndex = (currentIndex + direction + slides.length) % slides.length;
  updateSlider();
}

function createDots() {
  slides.forEach((_, idx) => {
    const dot = document.createElement('span');
    dot.onclick = () => {
      currentIndex = idx;
      updateSlider();
    };
    dotsContainer.appendChild(dot);
  });
  updateSlider();
}

createDots();
