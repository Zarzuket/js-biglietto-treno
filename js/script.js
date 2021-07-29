// 1 CHIEDERE ALL'UTENTE IL NUMERO DI KM CHE VUOLE PERCORRERE
// 2 OGNI KM COSTA 0.21€
// 3 APPLICARE SCONTO 20% SE < 18 ANNI
// 4 APPLICARE SCONTO 40% SE > 65 ANNI
// PREZZO FINALE CON MASSIMO 2 DECIMALI 

var numKm = parseInt(prompt("Insert km"));
console.log(numKm);

numKm *= 0.21;
console.log(numKm);

var utente = parseInt(prompt("age user"))

if ( utente > 0 && utente < 18){
    numKm = (numKm * 80 / 100);
} else if ( utente > 65) {
    numKm = (numKm * 60 / 100);
}
else {

}

// console.log (numKm)
console.log (numKm.toFixed(2))
    

