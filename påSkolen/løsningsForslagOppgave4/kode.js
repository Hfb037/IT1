const utskrift = document.getElementById("utskrift");
// utskrift.innerText = "test"
//console.log(utskrift);

const språk = navigator.language;
console.log("nettleser: " + språk);
if (språk === "nb-NO" || språk == "nb") {
    console.log("Du har norsk språk i nettleser");
} else if(språk == "us" ) {
    console.log("Amerikansk.");
}
else {
    console.log("Du har et annet språk.. ");1
}

const platform = navigator.platform;
console.log("Platform:" + platform)

const nettleser = navigator.userAgent ;
console.log("Nettleseren er:"+ nettleser);
if (nettleser.includes("x64")) {
    console.log("Du sitter på en 64-bits operativsystem.");
} else{
    console.log("Du har 32-bit");
}
// Hent ut størrekseb på body/skjerm (screen, document)
let hoyde = window.innnerHeight;
    console.log("Høyde:" + hoyde);
let hoydeScreen = screen.height;
    console.log("Skjerm høyde:" + hoydeScreen);



// Hent ut geolokasjon, sjå gjerne W3Schools

const x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}