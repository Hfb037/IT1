let interesse = "telemark";
if (interesse === "Telemark" || interesse === "TELEMARK" && interesse === "tElEmArK") {
    console.log("Me har samme interesse.");
}

if (interesse.toLowerCase() === "telemark") {
    console.log("Jepp, me har samme interesse.");
}

if (interesse.toLowerCase().includes("telemark")) {
    console.log("JADDA!")
}
