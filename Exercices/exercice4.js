// Exercice 4 : Écrivez une fonction qui prend en entrée un nombre et renvoie la factorielle de ce nombre.
//! 5 = 5 * 4 * 3 * 2 * 1

function factorielle(number) {
    let results = 1;
    for (i=2; i < number + 1; i++) {
        console.log(i);
        results *= i;
    }
    return results;
}
console.log('resultats : ', factorielle(5));