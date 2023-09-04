"use strict";


const $startBtn = document.getElementById("start-btn");
const $guessBtn = document.getElementById("guess-btn");
const $cowBtn = document.getElementById("cow-btn");
const $output = document.getElementById("output");
const $numUsr = document.getElementById("num-usr");
const $maxUsr = document.getElementById("max-usr");

let secretNumber = 0;
let nbGuesses = 0;
let maxGuesses = 0;

function launchGame(_evt) {
  secretNumber = Math.floor(Math.random() * $maxUsr.value) + 1;
  console.log(secretNumber)
  maxGuesses = Math.ceil(Math.log($maxUsr.value)) + 1;
  console.log(maxGuesses)
  // TODO : compléter ici
  $numUsr.setAttribute('value',0)
  $output.innerHTML = `Le jeu commence<br>` 
  $guessBtn.removeAttribute("disabled")
  $guessBtn.addEventListener("click", function() {
    let userValue = parseInt($numUsr.value);
    if (secretNumber === userValue) {//Si solution trouvé
      $output.innerHTML += `Vous avez trouvé le nombre secret est ${secretNumber}<br>`;
      
    } else if (maxGuesses < nbGuesses) {//Nombre d'essais max dépassés
      $output.innerHTML += `Vous avez perdu le nombre secret est ${secretNumber}<br>`;

    } else if (secretNumber > userValue) {//Va indiquer que le nombre secret est plus grand
      $output.innerHTML += `Le nombre secret est plus grand que ${userValue}<br>`
      nbGuesses += 1;
    } else if (secretNumber < userValue) {//Va indiquer le nombre secret est plus petit
      $output.innerHTML += `Le nombre secret est plus petit que  ${userValue}<br>`
      nbGuesses += 1;
    }
  })
}

$startBtn.addEventListener("click", launchGame);





function addCow(evt) {
  console.debug(evt.x, evt.y);
  // TODO : compléter ici
  const $img= document.createElement('img');
  const RandomAngle = Math.random() * 360;
  let scrollBarY = window.scrollY;
  $img.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/3/30/Cowicon.svg");
  $img.classList.add('cow');
  $img.style.position = 'absolute';
  $img.style.transform = `rotate(${RandomAngle}deg)`;//Permet a la rotation aléatoire
  $img.style.left = (evt.clientX - $img.widht /2) + 'px';
  $img.style.top = ((evt.clientY+scrollBarY) - $img.height /2) + 'px';
  document.body.appendChild($img);

}

function toggleCow(_evt) {
  if (document.onmousedown instanceof Function) {
    document.onmousedown = null;
  } else {
    document.onmousedown = addCow;
  }
}
$cowBtn.addEventListener("click", toggleCow);

