function createParticle(type) {
  const particle = document.createElement("div");
  particle.classList.add(type);
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.animationDuration = `${Math.random() * 10 + 1}s`;

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

// Obține modalul
var modal = document.getElementById("imageModal");

// Obține imaginea din modal
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

// Funcția care deschide modalul
function openModal(image) {
  modal.style.display = "block";
  modalImg.src = image.src;
  captionText.innerHTML = image.alt; // Adaugă descrierea imaginii
}

// Închide modalul când dai click pe "x"
var closeModal = document.getElementsByClassName("close")[0];
closeModal.onclick = function() {
  modal.style.display = "none";
}

// Închide modalul când dai click în afara imaginii
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const buttonContainer = document.querySelector('.button-container');

  // Toggle între afișare și ascundere pentru meniul burger
  menuToggle.addEventListener('click', function() {
    buttonContainer.classList.toggle('mobile-visible');
  });
});
