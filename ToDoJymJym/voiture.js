// Définition de la classe Voiture
class Voiture {
  constructor(marque, modele, couleur) {
    // Initialisation des propriétés de l'objet Voiture
    this.marque = marque;
    this.modele = modele;
    this.couleur = couleur;
  }

  // Méthode de l'objet Voiture
  start() {
    console.log("vroom vroom");
  }
}

// Définition de la classe GarageService
class GarageService {
  constructor(name, Class, listEl) {
    // Création d'un objet List et stockage dans la propriété list
    this.list = new List(name, Class);
    this.listEl = listEl;
  }

  // Ajout d'un élément à la liste
  addItem(args) {
    this.list.addItem(args);
    this.updateDom();
  }

  // Mise à jour du DOM en fonction des éléments stockés dans la liste
  updateDom() {
    // Suppression du contenu HTML de la liste
    this.listEl.innerHTML = "";
    // Parcours des éléments de la liste
    this.list.getItems().forEach((voiture) => {
      // Création d'un élément div pour chaque voiture
      const voitureEl = document.createElement("div");
      // Ajout de la classe CSS "todo" à l'élément div
      voitureEl.classList.add(["todo"]);
      // Affichage de la marque, du modèle et de la couleur de la voiture
      voitureEl.innerText =
        voiture.marque + " " + voiture.modele + " " + voiture.couleur;
      // Ajout d'un événement de clic sur l'élément div
      voitureEl.addEventListener("click", () => {
        // Appel de la méthode start() de l'objet voiture
        voiture.start();
        // Mise à jour du DOM
        this.updateDom();
      });
      // Ajout d'un événement de double-clic sur l'élément div
      voitureEl.addEventListener("dblclick", () => {
        // Suppression de l'objet voiture de la liste
        this.list.deleteItem(voiture);
        // Mise à jour du DOM
        this.updateDom();
      });
      // Ajout de l'élément div à la liste
      this.listEl.append(voitureEl);
    });
  }
}
