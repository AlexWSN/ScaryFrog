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


// Procesarea formularului la trimitere
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Previne comportamentul implicit al formularului (reîncărcarea paginii)

  // Preluarea valorilor din formular
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Validarea datelor
  if (name && email && subject && message) {
    // Dacă toate câmpurile sunt completate corect, trimitem datele
    document.getElementById("formResponse").innerHTML = `<p>Mulțumim, ${name}! Mesajul tău a fost trimis cu succes.</p>`;
    document.getElementById("formResponse").style.color = "orange";

    // Resetăm formularul
    document.getElementById("contactForm").reset();
  } else {
    // Dacă există câmpuri necompletate
    document.getElementById("formResponse").innerHTML = "<p>Te rugăm să completezi toate câmpurile formularului.</p>";
    document.getElementById("formResponse").style.color = "red";
  }
});
