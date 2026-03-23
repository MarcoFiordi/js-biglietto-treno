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
const basePrice = kilometers * pricePerKm;
let finalPrice = basePrice;


