// Exercice 6 : Écrivez une fonction qui prend en entrée une chaîne de caractères et renvoie cette chaîne en inversant l'ordre de ses caractères.
// - Loop for

function inverseChaine(chaine){
    let resultat = '';
    for (let i = chaine.length - 1; i >= 0; i--) {
        console.log(chaine[i], resultat);
        resultat += chaine[i];
    }
    return resultat;
}
console.log(inverseChaine('Yennefer'))

// - While loop
function reverseString(str) {
    let i = str.length - 1;
    let reversed = '';
    while (i >= 0) {
        reversed += str[i];
        i--;
    }
}