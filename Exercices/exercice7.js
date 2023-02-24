// Exercice 7 : Écrivez une fonction qui prend en entrée un tableau de nombres et renvoie le plus grand nombre présent dans le tableau.
function plusGrandNombre(tableau) {
    let plusGrand = tableau[0];
    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] > plusGrand) {
            plusGrand = tableau[i];
        }
    }
    return plusGrand;
}

