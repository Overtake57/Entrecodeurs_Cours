"use strict";

const KC_NAME_ENTER = "Enter";
const todoInputEl = document.querySelector("input.input");
const listEl = document.querySelector(".list");
const todoService = new TodoService("Todo", Todo, listEl);

document.addEventListener("keyup", (e) => {
  if (e.key === KC_NAME_ENTER && todoInputEl.value) {
    todoService.addItem([todoInputEl.value, true]);
    todoInputEl.value = "";
  }
});


// const KC_NAME_ESC = "Escape";
// const carInputEl = document.querySelector("input.input");
// const carEl = document.querySelector(".list");
// const carService = new TodoService("Todo", Todo, listEl);

// document.addEventListener("keyup", (e) => {
//   if (e.key === KC_NAME_ENTER && todoInputEl.value) {
//     todoService.addItem([todoInputEl.value, true]);
//     todoInputEl.value = "";
//   }
// });
