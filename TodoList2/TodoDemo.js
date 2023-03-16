"use strict";

// une Todo, information du contenu, barré ou supp
class Todo {
  constructor(text) {
    this.text = text;
    this.isChecked = false;
  }
  toggleCheck() {
    this.isChecked = !this.isChecked;
  }
}

// une liste de qqch, reutilisable pour nimporte quel qqch, stockage des taches dans list
class List {
  #Collection = [];
  #Class;

  constructor(name, Class) {
    // On donne la TOdo à la CLass
    this.#Class = Class;
    this.name = name;
  }

  getItems() {
    return this.#Collection;
  }

  addItem(args) {
    const item = new this.#Class(...args);
    this.#Collection.push(item);
  }

  deleteItem(item) {
    const indexToDelete = this.#Collection.findIndex((listItem) => listItem);
    this.#Collection.splice(indexToDelete, 1);
  }
  // Permet de sauvegarder des éléments avant le reset // LocalStorage
  save() {
    localStorage.setItem(this.#Collection);
  } // Apelle le save si refresh de la page de la todo list
  init() {
    localStorage.getItem(this.#Collection);
  }
}

// le service en charge de la gestion de ma Liste de Todos , Apelle les méthodes de la class List // Event que dans cette class TodoService  (2 méthodes)
class TodoService {
  constructor(name, Class, listEl) {
    this.list = new List(name, Class);
    this.listEl = listEl;
  }

  addItem(str) {
    this.list.addItem(str);
    this.updateDom();
  }

  updateDom() {
    this.listEl.innerHTML = "";
    this.list.getItems().forEach((todo) => {
      const todoEl = document.createElement("div");
      todoEl.classList.add(["todo"]);
      if (todo.isChecked) todoEl.classList.add(["checked"]);
      todoEl.innerText = todo.text;
      todoEl.addEventListener("click", () => {
        todo.toggleCheck();
        this.updateDom();
      });
      todoEl.addEventListener("dblclick", () => {
        this.list.deleteItem(todo);
        this.updateDom();
      });
      this.listEl.append(todoEl);
    });
  }
}