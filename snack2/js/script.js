/*
Snack 2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

var squadre = [

    {
        nome: "Milan",
        punti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Inter",
        punti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Juventus",
        punti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Cagliari",
        punti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Palermo",
        punti: 0,
        falliSubiti: 0,
    },

];

arrayNomiFalli = [];

for (i=0; i<squadre.length; i++) {

    squadre[i].punti = randomNumber(1, 100);
    squadre[i].falliSubiti = randomNumber(1, 100);
    
    arrayNomiFalli.push(squadre[i].nome, squadre[i].falliSubiti)

}
console.log(squadre);
console.log(arrayNomiFalli);


// FUNCTION
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
