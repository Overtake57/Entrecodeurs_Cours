const success = document.querySelector(".success");
const warning = document.querySelector(".warning");


function generateToast({
  message,
  background = "#00214d",
  color = "#fffffe",
  length = "3000ms",
}) {
  
  toastContainer.insertAdjacentHTML(
    "beforeend",
    `<p class="toast" 
    style="background-color: ${background};
    color: ${color};
    animation-duration: ${length}">
    ${message}
  </p>`
  );
  const toast = toastContainer.lastElementChild;
  toast.addEventListener("animationend", () => toast.remove());
}

(function initToast() {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<div class="toast-container"></div>`
  );
  toastContainer = document.querySelector(".toast-container");
})();

success.addEventListener("click", () => {
  generateToast({
    message: "Succes",
    background: "LIME",
    color: "hsl(171 100% 13.1%)"
  });
});

warning.addEventListener("click", () => {
  generateToast({
    message: "Warning",
    background: "RED",
    color: "hsl(350 100% 13.5%)"
  });
});
