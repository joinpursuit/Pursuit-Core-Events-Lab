
const input = document.querySelector('#task-input')
const taskList = document.querySelector('#task-list')
const addNewTask = document.querySelector('#btn')

//const clickCount = 0

addNewTask.addEventListener('click', (e) => {
    e.preventDefault()
    clickCount++
    const newTask = document.createElement('li')
    newTask.textContent = input.value
    if (input.value==='') {
        alert('Please enter a task before attempting to add to the list')
    } else {        
        taskList.appendChild(newTask)
        input.value = ''
    }    
})

taskList.addEventListener('click', (e) => {
    const clickCount = 0
    if (clickCount % 2 === 0) {
        e.target.style.textDecoration = 'line-through solid black'        
    } else if (clickCount % 2 !== 0) {
        e.target.style.textDecoration = 'none'
    }
})

//taskList.addEventListener('click', (e) => {
//})



