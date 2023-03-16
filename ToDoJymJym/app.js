"use strict";

// Définir une constante pour le nom de la touche "Entrée"
const KC_NAME_ENTER = "Enter";

// Récupérer l'élément d'entrée de tâche
const todoInputEl = document.querySelector("input.input");

// Récupérer l'élément de liste
const listEl = document.querySelector(".list");

// Créer une instance de TodoService
const todoService = new TodoService("Todo", Todo, listEl);

// Ajouter un écouteur d'événements pour la touche "Entrée"
document.addEventListener("keyup", (e) => {
  // Vérifier si la touche appuyée est la touche "Entrée" et que le champ d'entrée contient une valeur
  if (e.key === KC_NAME_ENTER && todoInputEl.value) {
    // Ajouter un nouvel élément à la liste en utilisant la méthode addItem de TodoService
    todoService.addItem([todoInputEl.value, true]);
    // Effacer le champ d'entrée de tâche
    todoInputEl.value = "";
  }
});

//? Définir une constante pour le nom de la touche "Échap"
// const KC_NAME_ESCAPE = "Escape";

//? Récupérer l'élément d'entrée pour la marque de voiture
// const marqueInputEl = document.querySelector("input.marque");

//? Récupérer l'élément d'entrée pour le modèle de voiture
// const modeleInputEl = document.querySelector("input.modele");

//? Récupérer l'élément d'entrée pour la couleur de voiture
// const couleurInputEl = document.querySelector("input.couleur");

//? Récupérer l'élément de liste pour le garage
// const garageEl = document.querySelector(".listGarage");

//? Créer une instance de GarageService
// const garageService = new GarageService("OptiV12", Voiture, garageEl);

//? Ajouter un écouteur d'événements pour la touche "Échap"
// document.addEventListener("keyup", (e) => {
  //? Vérifier si la touche appuyée est la touche "Échap" et que le champ d'entrée de marque contient une valeur
  // if (e.key === KC_NAME_ESCAPE && marqueInputEl.value) {
    //? Ajouter une nouvelle voiture au garage en utilisant la méthode addItem de GarageService
    // garageService.addItem([
    //   marqueInputEl.value,
    //   modeleInputEl.value,
    //   couleurInputEl.value,
    // ]);
    //? Effacer les champs d'entrée pour la marque, le modèle et la couleur de la voiture
//     marqueInputEl.value = "";
//     modeleInputEl.value = "";
//     couleurInputEl.value = "";
//   }
// });