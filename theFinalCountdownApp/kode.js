let nedtelling = setInterval(tikk, 1000);

let antallSekunder = prompt("Hvor mange sekunder?")

let musikkFerdig = new Audio("lyd/happy-day-113985.mp3");
let musikkBg = new Audio("lyd/milk-shake-116330.mp3")

function tikk() {
    antallSekunder = antallSekunder - 1; //Trekk fra en på antall sekunder//
    console.log(antallSekunder);//Skriv ut antall gjenværende sekund
    document.getElementById("utskrift").innerText = antallSekunder;
   
    if (antallSekunder == 3) {
        document.getElementById("utskrift").style.color = "red";
    }
   
    if (antallSekunder <=0) {
        document.getElementById("utskrift").innerText = "S'ALL GOOD MAAAAAN"
        document.getElementById("utskrift").style.color = "green"
        musikkFerdig.play();
        musikkBg.pause();
        clearInterval(nedtelling);
    }
}

document.body.addEventListener("click, spillMusikk");

function spillMusikk() {
    musikkBg.play();
}
