const ball = document.getElementById('ball');

// HOVERRING
document.addEventListener('mouseover', function() {
  
  // On renvoie le plus grand entier multiplier par un nombre flotant aleatoire
 
  // EX : function getRandomInt(max) {
  //      return Math.floor(Math.random() * max);
  //      }

  let newX = Math.floor(Math.random() * window.innerWidth);
  let newY = Math.floor(Math.random() * window.innerHeight);

  // la balle ce dirige de facon aleatoire en utilisant l'algo au-dessus en ajoutant + 'px' [pixel] a la fin
 ball.style.left = newX + 'px';
 ball.style.top = newY + 'px';
});