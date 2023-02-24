// Exo supplementaire
// const values = [2,3,3,4,5,6,1,7,8,4,5,5,6,2,3,1,8,3,3,3,8,3,4,5,5,5,6,9,9,1,2,3,2,4,7,7,2,1,8,8,1]

//À partir de ce tableau : 
//  - Garder seulement des valeurs uniques
//  - Trié les valeurs dans l'ordre croissant


const values = [2,3,3,4,5,6,1,7,8,4,5,5,6,2,3,1,8,3,3,3,8,3,4,5,5,5,6,9,9,1,2,3,2,4,7,7,2,1,8,8,1]

const newValues = [...new Set(values)];
console.log(newValues.sort());