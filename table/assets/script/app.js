//! 1) Trier le tableau dans l'ordre Alphabetique 
const firstNames = ["Noé", 
"Marc", "Dave", 
"Eva", "Jean", 
"Alex", "Ada", 
"Lia", "Maé", 
"Mya", "Noa"];

const newArray = firstNames.sort();

//! 2) Associer un attribut "type":"humain" a chaque élève
//! 3) Associer à chaque élève une note aléatoire
for (let i = 0; i < newArray.length; i++) {
  newArray[i] = {name: newArray[i], type: "human", mark: Math.floor(Math.random() * 21)};
}

//! 4) Classer les élèves par note croissante
newArray.sort((a, b) => (a.mark - b.mark));

//! 5) Calculer la moyenne des élèves
let total = 0;
for (let i = 0; i < newArray.length; i++) {
  total += newArray[i].mark;
}
const average = total / newArray.length;

console.log(newArray);
console.log("La moyenne des notes est de : " + average.toFixed(2));