//a
let land = ["Norge", "Japan", "USA", "Itialia", "Canada", "Russland", "Sør-Korea", "Kina"];
let sted = ["lillehammer", "Nagano","Salt Lake City", "Torino", "Vancouver", "Sotsji", "Pyenongchang", "Beijing"];
let aarstall = ["1994", "1998", "2002", "2006", "2010", "2014", "2018", "2022"];
let randomAArstall = 0;
let randomLand;

let poengCounter = 0;
let antallFeil = 0;

document.getElementById("nesteSpørsmål").addEventListener("click", nesteSpørsmål);
document.getElementById("svarSjekk").addEventListener("click", svarSjekk);


function konsoll(){
    console.log(land)
    console.log(sted)
    console.log(aarstall)     
};

konsoll()

//b
for (let i = 0; i < land.length; i++) {
    console.log("Vinter-OL i " + land[i] + " ble arrangert i " + sted[i] + "i" + aarstall[i])   
}

function wichPlace(year){
    let = rightPlace = aarstall.indexOf(year)
    console.log("OL i" + year + "ble arrangert i" + sted[rightPlace])
}

function wichYear(place) {
    let rightYear = sted.indexOf(place)
    console.log("Vinter ol i" + place + "ble arrangert i" + aarstall[rightYear])
}

function randomYear(){
    randomAArstall = aarstall[Math.floor(Math.random() * 8)]
}

function nesteSpørsmål() {
    document.body.style.backgroundColor = "white";
    document.getElementById("svarFelt").value = "";
    randomYear()
    let awd = aarstall.indexOf(randomAArstall)
    randomLand = land[awd]
    document.getElementById("spørsmål").innerText = "HVILKET OL BLE ARRANGERT I " + randomAArstall
}

function svarSjekk() {
    if (document.getElementById("svarFelt").value == randomLand) {
        document.body.style.backgroundColor = "green"
    } else {
        document.body.style.backgroundColor = "red"
    }
}

function poengSystem() {
    if (svarFelt.value == randomLand) {
        antallScore++
    } else {
        antallFeil++    
    }
}

const antallScore = document.getElementById("antallScore")
antallScore.innerText = poengCounter

console.log(antallScore)