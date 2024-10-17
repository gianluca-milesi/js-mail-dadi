// E-mail

const emailAutorizzate = ["spongebob@gmail.com", "patrick@gmail.com", "squiddi@gmail.com"];
const emailUtente = prompt("Inserisci la tua email:");

if (emailAutorizzate.includes(emailUtente)) {
    let nomeUtente = emailUtente.split("@")[0];
    nomeUtente = nomeUtente.charAt(0).toUpperCase() + nomeUtente.slice(1).toLowerCase();
    console.log(`Benvenuto ${nomeUtente}!`);
} else {
    console.log(`Mi dispiace, ${emailUtente} non è autorizzata`);
}