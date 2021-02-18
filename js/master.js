var inserisci_nome = prompt('hey! Come ti chiami?');
/*document.getElementById('inserisci_nome').innerHTML = inserisci_nome;*/

var inserisci_cognome = prompt('dicci anche il cognome và');
// document.getElementById('inserisci_cognome').innerHTML = inserisci_cognome;

var inserisci_colore = prompt('domanda infantile ma giuro che è finito, il tuo colore preferito');
// document.getElementById('inserisci_colore').innerHTML = inserisci_colore;

var generatore_password = (inserisci_nome + inserisci_cognome + inserisci_colore + "19");
document.getElementById('generatore_password').innerHTML = generatore_password;