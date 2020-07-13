
// array esistente
var cognomi= ["abc", "def", "ghi","lmn"];

// inserimento cognome da parte dell'utente
var inserito = prompt("inserisci un cognome");
cognomi.push(inserito);


// iniziamo a rielaborare la lista partendo dalle maiuscole e dalle minuscole
var cognomiPrima; //var per il primo carattere
var cognomiResto; //var per il resto dei caratteri
var cognomiCap= []; //array di destinazione

// mi creo un ciclo for che va a prendere tutti i cognomi dal primo all'ultimo, li scompone e li reinserisce nell'array
for (var i = 0; i < cognomi.length; i++) {
    cognomiPrima = cognomi[i].charAt(0).toUpperCase();
    cognomiResto = cognomi[i].slice(1).toLowerCase();
    var cogPrimaResto = cognomiPrima + cognomiResto;

    cognomiCap.push(cogPrimaResto);
}

cognomiCap.sort();

// provo a stamparla sulla pagina in una lista ordinata

var cognomiOl="<li>" + cognomiCap[0] + "</li>";

for (var j = 1; j < cognomiCap.length; j++) {
    cognomiOl += "<li>" + cognomiCap[j] + "</li>";
}

document.getElementById('surname-list').innerHTML=cognomiOl;


// normalizzo il dato inserito con gli stessi criteri della lista ordinata

var insTemp = inserito.slice(1).toLowerCase();
inserito = inserito.charAt(0).toUpperCase();
inserito = inserito + insTemp;


// creo un ciclo che trova dove in dato inserito è presente nella lista
var k=0;
while(cognomiCap[k] != inserito) {
    k++;
}
k+=1;

document.getElementById('position').innerHTML=("il cognome da te inserito si trova nella posizione numero " + k);

// fine
