/*
Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/

arrayProva = ["ciao", "come", "stai", "io", "bene", "e", "tu","tutto","regolare", "fine"];
arrayProvaDue = [1,2,3,4,5,6,7,8,9,10];

console.log(arrayProva);
console.log(arrayProvaDue);

function posizioneCompresa(array, a, b) {

    nuovoArray = [];

    for (i = (a-1); i < b; i++) {
        nuovoArray.push(array[i]);
    }
    return nuovoArray;
}

console.log(posizioneCompresa(arrayProvaDue, 3, 6));
console.log(posizioneCompresa(arrayProva, 3, 6));