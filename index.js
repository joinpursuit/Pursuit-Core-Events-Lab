const input = document.querySelector('#task-input')
const taskList = document.querySelector('#task-list')
const addNewTask = document.querySelector('#btn')

//const clickCount = 0

addNewTask.addEventListener('click', (e) => {
    e.preventDefault()
    const newTask = document.createElement('li')
    newTask.textContent = input.value
    if (input.value==='') {
        alert('Please enter a task before attempting to add to the list')
    } else {        
        taskList.appendChild(newTask)
        input.value = ''
    }    
})

let clickCount = 0
taskList.addEventListener('click', (e) => {
    console.log(`clickCount is at:${clickCount}`)
    if (clickCount % 2 === 0) {
        e.target.style.textDecoration = 'line-through solid black'        
        console.log(`clickCount is at:${clickCount} at even count`)
        //clickCount++
    } else if (clickCount % 2 !== 0) {
        e.target.style.textDecoration = 'none'
        console.log(`clickCount is at:${clickCount} at odd count`)
        //clickCount++
    }
    clickCount++
})

//taskList.addEventListener('click', (e) => {
//})



