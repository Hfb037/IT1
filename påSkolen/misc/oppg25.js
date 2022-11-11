console.log(Math.random());

console.log(getRandomIntInclusive(1,20));

let tilfeldigTall = getRandomIntInclusive(1,20);
console.log(tilfeldigTall);

// KJILDE https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

// Løsning på oppgaven
let arrayTilfeldigeTall = [];

for (let i = 0; i < 100; i++) {
    arrayTilfeldigeTall[i] = getRandomIntInclusive(1,20);
    // arrayTilfeldigeTall.push(getRandomIntInclusive(1,20));
}

console.log(arrayTilfeldigeTall);
console.table(arrayTilfeldigeTall);

let antallTiere = 0;
let antallOverTi = 0;
let antallUnderTi = 0;
let sum = 0;

for (let i = 0; i < arrayTilfeldigeTall.length; i++ ) {
    if (arrayTilfeldigeTall[i] === 10) {
        antallTiere++;
    }
    if (arrayTilfeldigeTall[i] > 10) {
        antallOverTi++;
    }
    if (arrayTilfeldigeTall[i] < 10) {
        antallUnderTi++;
    }

    sum = sum + arrayTilfeldigeTall[i];
}

let utskrift = document.getElementById("utskrift");
utskrift.innerHTML = "<li> Antall 10-ere: " + antallTiere + "</li>"
utskrift.innerHTML += "<li> Antall OVER 10: " + antallOverTi + "</li>"
utskrift.innerHTML += "<li> Antall UNDER 10: " + antallUnderTi + "</li>"