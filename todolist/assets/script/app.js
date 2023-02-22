const wrapper = document.querySelector('.list-group')
async function main() {

    const loader = document.createElement('p')
    loader.innerText = 'chargement...'
    wrapper.append(loader) //on ajoute au wrapper le loader

    try {
        const r = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5', {
            headers: {
                Accept: 'application/json'
            }
        })
        if (!r.ok) {
            throw new Error('Erreur Serveur')
        }
        const posts = await r.json()
        loader.remove()
        for (let post of posts) {
            wrapper.append(createTask(post)) //(on crée le LI)
        }

    } catch (e) {
        console.log(e.message)
        loader.innerText = 'Impossible de charger les tâches par défaut,'
        loader.style.color = 'red'
        return
    }
}

function createTask(taskTitle) {

    const newTask = document.createElement('li')
    newTask.classList.add('list-group-item', 'd-flex', 'align-items-center')

    const newCheckbox = document.createElement('input')
    newCheckbox.classList.add('form-check-input', 'todo')
    newCheckbox.setAttribute('type', 'checkbox')
    newTask.appendChild(newCheckbox)

    addFilter(newCheckbox)

    const newLabel = document.createElement('label')
    newLabel.classList.add('ms-2', 'form-check-label')
    newLabel.innerHTML = taskTitle.title
    newTask.appendChild(newLabel)

    newTask.append(createTrash())

    return newTask
}

function customContent() {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const data = new FormData(form)
        const newTask = data.get('title')

        if (newTask.length < 2) {
            e.preventDefault()
            console.log('Erreur, moins de deux car.')
        } else {
            wrapper.prepend(createTask({
                title: `${newTask}`
            }))
        }
    })
}

function createTrash() {
    const newTrash = document.createElement('label')
    newTrash.classList.add('ms-auto', 'btn', 'btn-danger', 'btn-sm')

    const newIcon = document.createElement('i')
    newIcon.classList.add('bi-trash')
    newTrash.appendChild(newIcon)

    addTrashAction(newTrash)

    return newTrash
}


destructTasks = document.querySelectorAll('.btn-danger')
for (destructTask of destructTasks) {
    addTrashAction(destructTask)
}

function addTrashAction(destructTask) {
    destructTask.addEventListener('click', (e) => {
        destructTask.parentNode.remove()
    })
}


allCheckbox = document.querySelectorAll('input')
for (checkbox of allCheckbox) {
    addFilter(checkbox)
}

function addFilter(checkbox) {
    //on peut optimiser avec Toggle
    checkbox.addEventListener('change', (e) => {
        if (e.currentTarget.checked) {
            checkbox.classList.add('done')
            checkbox.classList.remove('todo')

        } else {
            checkbox.classList.add('todo')
            checkbox.classList.remove('done')
        }
    })
}

function activeFilter() {

    const todoClick = document.querySelector('button[data-filter="todo"]')
    const allClick = document.querySelector('button[data-filter="all"]')
    const doneClick = document.querySelector('button[data-filter="done"]')

    todoClick.addEventListener('click', (e) => {
        todoClick.classList.add('active')

        allClick.classList.remove('active')
        doneClick.classList.remove('active')

        const hideAllDone = document.querySelectorAll('li .done')
        for (hideDone of hideAllDone) {
            hideDone.parentNode.classList.add('hidden');
        }

        const hideAllTodo = document.querySelectorAll('li .todo')
        for (hideTodo of hideAllTodo) {
            hideTodo.parentNode.classList.remove('hidden');
        }
    })

    doneClick.addEventListener('click', (e) => {
        doneClick.classList.add('active')

        todoClick.classList.remove('active')
        allClick.classList.remove('active')

        const hideAllTodo = document.querySelectorAll('li .todo')
        for (hideTodo of hideAllTodo) {
            hideTodo.parentNode.classList.add('hidden');
        }

        const hideAllDone = document.querySelectorAll('li .done')
        for (hideDone of hideAllDone) {
            hideDone.parentNode.classList.remove('hidden');
        }
    })

    allClick.addEventListener('click', (e) => {
        allClick.classList.add('active')

        todoClick.classList.remove('active')
        doneClick.classList.remove('active')

        const displayAll = document.querySelectorAll('li .todo, li .done')
        for (display of displayAll) {
            display.parentNode.classList.remove('hidden');
        }
    })
}

main()
customContent()
activeFilter()