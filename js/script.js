//1. Chiedere all'utente quanti chilometri deve percorrere
//2. Chiedere all'utente quanti anni ha

//3. Calcolare il prezzo base del biglietto (km * 0.21)

//4. Se l'età è minore di 18 anni applicare uno sconto del 20%
//5. Altrimenti, se l'età è maggiore di 65 anni, applicare uno sconto del 40%
//6. Altrimenti il prezzo resta invariato

//7. Mostrare il prezzo finale con massimo 2 decimali

const kilometers = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
const age = parseInt(prompt("Quanti anni hai?"));

const pricePerKm = 0.21;
const basePrice = kilometers * pricePerKm; //calcolo il prezzo in base ai kilometri
let finalPrice = basePrice; //inizializzo il prezzo finale. Per la tariffa standard coincide con quello di base

//verifica requisiti sconti
if (age < 18){ //minorenne
    finalPrice = basePrice * 0.8; 
} else if(age > 65) { //senior
    finalPrice = basePrice * 0.6;
}
console.log("Il prezzo finale è €" + finalPrice.toFixed(2));// stampa del prezzo finale

