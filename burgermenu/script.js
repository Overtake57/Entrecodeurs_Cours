const openbutton = document.querySelector("#sandwich");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector("#closeBtn");

openbutton.addEventListener("click", () => {
  sidebar.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
});