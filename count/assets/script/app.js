// const button = document.querySelector('button');
// const counterBtn = document.querySelector('div');

// button.addEventListener('click', event => {
//   counterBtn.innerHTML = `Nombre de clics : ${event.detail}`;
// });

 //* Title 
window.alert("Application compteur");

//? Fonction increment et decrement
function totalClick(click) {
  const totalClicks = document.getElementById('totalClicks');
  const sumvalue = parseInt(totalClicks.innerText) + click;
  console.log(sumvalue + click);
  totalClicks.innerText =  sumvalue;

  //!\\ Empeche les valeurs negative //!\\
  if(sumvalue < 0) {
    totalClicks.innerText = 0;
  }

  //!\\ Reset //!\\
  if(click === 0) {
    totalClicks.innerText = 0;
  }
}