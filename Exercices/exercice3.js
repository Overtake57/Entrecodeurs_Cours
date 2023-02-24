// Exercice 3 : Écrivez une fonction qui prend en entrée un tableau de nombres et calcule la somme de ses éléments.

// - Loop for 
function arraySum(tableau) {
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    return somme;
}

// - While loop
function sommeTableau(tableau) {
    let somme = 0;
    let i= 0;
    while (i < tableau.length) {
        somme += tableau[i];
        i++;
    }
    return somme;
}