/**
     *  Il computer deve generare 16 numeri casuali tra 1 e 100.
        I numeri non possono essere duplicati.
        In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, 
        sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
        Se il numero è presente nella lista dei numeri generati, la partita termina, 
        altrimenti si continua chiedendo all’utente un altro numero.  La partita termina quando il giocatore 
        inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
        Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che 
        l’utente ha inserito un numero consentito.
    * 
    */

    //  # PREPARATION
    //  1 - Creiamo un bell'array all'interno del quale inserire (poi) le bombe
    //  2 - Genero un numero randomico e lo inserisco all'interno dell'array di cui sopra ^, FINCHE' non arrivo a 16
    //  3 - Crea un array per ricordare i numeri (scelti) dall'utente
    // **** Creo una variable di appoggio per il punteggio

    // # GAMEPLAY
    // 1) Chiedere un numero all'utente
    // 2) Controllare che il numero non sia presente nell'array di bombe !!! ALTRIMENTI KABOOM
    // 3) Controllo se per caso lo aveva già scelto (è già presente nell'array dei numeri scelti dall'utente)
    // 4) Se il numero non è esplosivo e non è stato scelto, lo aggiungo nell'array dei numeri scelti
    //  

    // # ENDGAME
    // a. Stampiamo il messaggio di alert del gioco (se hai vinto o perso)
    // b. Stampiamo il punteggio del giocatore





let listaBombe = []; //questo è l'array in cui verrano inseriti tot. numeri random associati ai numeri bomba
let numeroDiBombe = 2; //ho messo let e non const perchè in base alla difficolta varia il numero di bombe
const numeroRandomicoMassimo = 10; //indica i numeri massimi da randomizzare


const livello = numeroRandomicoMassimo - numeroDiBombe //numeri di tentativi che vengono lasciati all'utente

let listaScelte = [];  //array dove si inseriscono i numeri scelti dall'utente


while ( listaBombe.length < numeroDiBombe){
    
    let numeroRandomico = getRandomNumber(1, numeroRandomicoMassimo); //genera randomicamente i numeri nell'array listabombe
    if (listaBombe.includes(numeroRandomico) == false){ //questo per non far ripetere gli stessi numeri
        listaBombe.push(numeroRandomico); //aggiungi  un numero randomico nell'array listabombe
    }
}

console.log(listaBombe);

while ( listaScelte.length < livello ){     //chiedere fino a quando la lista dell'utente arriva al numero richiesto 
    let numeroUtente = parseInt (prompt("inserisci un numero")); //chiedo ll'utente di inserire un numero
    while ( numeroUtente < 1 || numeroUtente > numeroRandomicoMassimo || isNaN(numeroUtente) || (listaScelte.includes(numeroUtente) == true) ){ //fino a quando non è un numero ( isNan) richiedere un numero e se è già presente il numero (istruzuone scritta sotto)
        if ( (listaScelte.includes(numeroUtente) == true) ){
            numeroUtente = parseInt(prompt("hai inserito un numero già inserito, inseriscine uno diverso"));
        } else {
            numeroUtente = parseInt(prompt("Hai inserito un numero non valido, inserisci un numero") )
        }
    } 
    //questo if serve per controllare che i numeri scelti dall'utente non siano uguali ai numeri presenti in listabombe
    if ( listaBombe.includes(numeroUtente) ){ //questo vuol dire (se l'utente ha scelto un numero presente in lista bombe)
        alert("Hai perso, il tuo punteggio è: " + listaScelte.length);
        listaScelte.length = livello;
    } else {
        listaScelte.push(numeroUtente);
        if (listaScelte.length == livello)
        alert("hai vinto, il tuo punteggio è: " + listaScelte.length);
    }
}

console.log(listaScelte);



//FUNZIONI

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}