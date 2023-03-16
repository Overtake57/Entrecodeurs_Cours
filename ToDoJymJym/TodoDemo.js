"use strict";

// Une classe représentant une Todo avec son contenu textuel et son état (coché ou non-coché)
class Todo {
  constructor(text) {
    this.text = text;
    this.isChecked = false;
  }

  // Méthode pour inverser l'état de la Todo (coché <-> non-coché)
  toggleCheck() {
    this.isChecked = !this.isChecked;
  }
}

// Une classe générique pour stocker une liste d'objets
class List {
  // Collection privée pour stocker les éléments de la liste
  #Collection = [];
  // Classe des éléments de la liste (par exemple, Todo)
  #Class;
  // Constructeur prenant le nom de la liste et la classe des éléments
  constructor(name, Class) {
    this.#Class = Class;
    this.name = name;
  }

  // Renvoie tous les éléments de la liste
  getItems() {
    return this.#Collection;
  }

  // Ajoute un élément à la liste en créant une nouvelle instance de la classe des éléments
  addItem(args) {
    const item = new this.#Class(...args);
    this.#Collection.push(item);
    
  }

  // Supprime un élément de la liste
  deleteItem(item) {
    // Trouve l'index de l'élément à supprimer
    const indexToDelete = this.#Collection.findIndex((listItem) => listItem);
    // Supprime l'élément de la liste
    this.#Collection.splice(indexToDelete, 1);
  }

  // Sauvegarde les éléments de la liste dans le LocalStorage
  save() {
    localStorage.setItem(this.name, JSON.stringify(this.getItems()));
  }

  // Charge les éléments de la liste depuis le LocalStorage
  init() {
    const elems = JSON.parse(localStorage.getItem(this.name)) || [];
    elems.forEach(elem => this.addItem([elem.text, elem.isChecked]));
  }
}

// Le service en charge de la gestion de la liste de Todos
class TodoService {
  constructor(name, Class, listEl) {
    // Initialise une nouvelle liste avec le nom et la classe fournis
    this.list = new List(name, Class);
    // Élément HTML où afficher la liste
    this.listEl = listEl;
    this.display;
    // Charge les éléments de la liste depuis le LocalStorage
    this.list.init();
  }

  // Ajoute une nouvelle Todo à la liste
  addItem(str) {
    this.list.addItem(str);
    this.updateDom();
  }

  // Met à jour l'affichage HTML de la liste des Todos
  updateDom() {
    // Efface tous les éléments HTML de la liste
    this.listEl.innerHTML = "";
    // Parcourt chaque élément de la liste des Todos
    this.list.getItems().forEach((todo) => {
      // Crée un nouvel élément HTML pour chaque Todo
      const todoEl = document.createElement("div");
      todoEl.classList.add(["todo"]);
      if (todo.isChecked) todoEl.classList.add(["checked"]);
      todoEl.innerText = todo.text;

      // Ajoute un événement de clic pour inverser l'état de la Todo
      todoEl.addEventListener("click", () => {
        todo.toggleCheck();
        this.updateDom();
      });

      // Ajoute un événement de double clic pour supprimer la Todo
      todoEl.addEventListener("dblclick", () => {
        this.list.deleteItem(todo);
        this.updateDom();
      });

      // Ajoute l'élément HTML de la Todo à la liste HTML
      this.listEl.append(todoEl);
    });
    this.list.save();
  }
}
