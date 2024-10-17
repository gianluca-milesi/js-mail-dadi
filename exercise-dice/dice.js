//DADI
//creo le variabili dei dadi per il giocatore ed il computer
//stampo quanto è uscito
//casistiche if per la vittoria, perdita o pareggio

let dadoGiocatore = Math.floor(Math.random() * 6) + 1;
let dadoComputer = Math.floor(Math.random() * 6) + 1;
console.log(`Il Giocatore ha lanciato: ${dadoGiocatore}`);
console.log(`Il Computer ha lanciato: ${dadoComputer}`);

if (dadoGiocatore > dadoComputer) {
    console.log("Ha vinto il Giocatore!")
} else if (dadoGiocatore < dadoComputer) {
    console.log("Ha vinto il Computer!")
} else {
    console.log("È un pareggio.")
}