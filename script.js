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

// Obține modalul
var modal = document.getElementById("imageModal");

// Obține imaginea din modal
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

// Închide modalul când dai click pe "x"
var closeModal = document.getElementsByClassName("close")[0];
if (closeModal) {
    closeModal.onclick = function() {
        modal.style.display = "none";
    };
} else {
    console.error("Elementul 'close' nu a fost găsit!");
}

// Închide modalul când dai click în afara imaginii
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.button-container');

  burger.addEventListener('click', function() {
      console.log('Butonul hamburger a fost apăsat.'); // Debug message
      navMenu.classList.toggle('active');
      
      // Verifică dacă meniul a fost activat
      if (navMenu.classList.contains('active')) {
          console.log('Meniul este acum activ.');
      } else {
          console.log('Meniul este acum inactiv.');
      }
  });
});
