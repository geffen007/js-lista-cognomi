
// array esistente
var cognomi= ["abc", "def", "ghi","lmn",];

// inserimento cognome da parte dell'utente
cognomi.push(prompt("inserisci un cognome"));


// iniziamo a rielaborare la lista partendo dalle maiuscole e dalle minuscole
var cognomiPrima; //var per il primo carattere
var cognomiResto; //var per il resto dei caratteri
var cognomiCap= []; //array di destinazione

// mi creo un ciclo for che va a prendere tutti i cognomi dal primo all'ultimo, li scompone e li reinserisce nell'array
for (var i = 0; i < array.length; i++) {
    cognomiPrima= cognomi[i].charAt(0);
    cognomiPrima.toUpperCase();
    cognomiResto= cognomi[i].slice(1);
    cognomiResto.toLowerCase();

    cognomiCap.push(cogmoniPrima + scognomiResto);
}



console.log(cognomiCap);