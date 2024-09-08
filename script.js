function createParticle(type) {
  const particle = document.createElement("div");
  particle.classList.add(type);
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.animationDuration = `${Math.random() * 3 + 2}s`;

  document.querySelector(".background").appendChild(particle);

  // Eliminăm particula după terminarea animației
  setTimeout(() => {
    particle.remove();
  }, 5000);
}

// Generăm scântei și fulgi de cenușă continuu
setInterval(() => {
  createParticle("spark");
  createParticle("ash");
}, 200);

//PORTOFOLIU
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveToNextSlide() {
    if (currentIndex === totalSlides - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateSlidePosition();
}

function moveToPrevSlide() {
    if (currentIndex === 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex--;
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}
