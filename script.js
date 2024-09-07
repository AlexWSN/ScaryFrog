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
