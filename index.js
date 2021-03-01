
const input = document.querySelector('#task-input')
const taskList = document.querySelector('#task-list')
const addNewTask = document.querySelector('#btn')
console.log(input)

addNewTask.addEventListener('click', (e) => {
    e.preventDefault()
    const newTask = document.createElement('li')
    newTask.textContent = input.value
    taskList.appendChild(newTask
    if (!input.value) {
        alert('Please enter a task before attempting to add to the list')
    }
    //console.log(e.childNode.target)
})



