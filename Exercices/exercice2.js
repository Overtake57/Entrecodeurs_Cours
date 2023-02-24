// Exercice 2 : Écrivez une fonction qui prend en entrée un nombre et affiche la table de multiplication de ce nombre de 1 à 10.
function tableMultiplication(nombre){
    for (let i= 1; i <= 10; i++) {
        console.log(`${nombre} x ${i} = ${nombre*i}`);
    }
}
function tableMultiplication(nombre)
let i=1;
while (i < nombre) {
    console.log(nombre + ' x ' + i + ' = ' + nombre*i);
    i++;
}