// Utilisez les fonctions native de tableau pour ces exercices
// Afficher se tableau classé par ordre alphabetique
const countries = ["France", "Italie", "Espagne"];
console.log(countries.sort());

// Afficher le contenu de "countries" et "americanCountries" dans un meme tableau (dans une const "worldCountries")
const americanCountries = ["Canada", "États-Unis", "Mexique"];
const worldCountries = countries.concat(americanCountries)
console.log(worldCountries);

//Enlever le premier element de ce tableau
const first = worldCountries.shift();
console.log(first);

//Enlever le dernier element de ce tableau
const last = worldCountries.pop();
console.log(last);

// stocker dans une nouvelle variable les 2 derniers elements de ce tableau
const stock = console.log(worldCountries.slice (2));
console.log(stock);