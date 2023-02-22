const addToDoButton = document.getElementById('addToDo');
const toDoContainer = document.getElementById('toDoContainer');
const inputField = document.getElementById('inputField');

addToDoButton.onclick = function() {

    if(inputField.value != "") {

        //Pourquoi var est valable alors que let et const ne le sont pas ?

        var paragraph = document.createElement('p');

    }

    paragraph.innerText = inputField.value;

    paragraph.classList.add('paragraphe_style');

    toDoContainer.appendChild(paragraph);

    inputField.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.classList.add('paragraph_click');
    })

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
}