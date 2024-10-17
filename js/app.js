// // E-MAIL
// const emailAutorizzate = ["spongebob@gmail.com", "patrick@gmail.com", "squiddi@gmail.com"];
// const emailUtente = prompt("Inserisci la tua email:");

// if (emailAutorizzate.includes(emailUtente)) {
//     let nomeUtente = emailUtente.split("@")[0];
//     nomeUtente = nomeUtente.charAt(0).toUpperCase() + nomeUtente.slice(1).toLowerCase();
//     console.log(`Benvenuto ${nomeUtente}!`);
// } else {
//     console.log(`Mi dispiace, ${emailUtente} non è autorizzata`);
// }

//Secondo metodo
// let emailTrovata = false;

// for (let i = 0; i < emailAutorizzate.length; i++) {
//     if (emailUtente === emailAutorizzate[i]) {
//         emailTrovata = true;
//     }
// }
// if (emailTrovata === true) {
//     let nomeUtente = emailUtente.split("@")[0];
//     nomeUtente = nomeUtente.charAt(0).toUpperCase() + nomeUtente.slice(1).toLowerCase();
//     console.log(`Benvenuto ${nomeUtente}!`);
// } else {
//     console.log(`Mi dispiace, ${emailUtente} non è autorizzata`);
// }




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