// Exercice 5 : Écrivez une fonction qui prend en entrée un tableau de chaînes de caractères et renvoie la chaîne de caractères la plus longue.
function longestString(array) {
    let longest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i].length > longest.length) {
        longest = array[i];
        }
    } 
    return longest;
}
console.log(longestString(["geralt","yennefer","ciri","jaskier"]));