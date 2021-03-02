const input = document.querySelector('#task-input')
const taskList = document.querySelector('#task-list')
const addNewTask = document.querySelector('#btn')

//when #btn is clicked, add the value of the <input> to #task-list as a <li>
addNewTask.addEventListener('click', (e) => {
    e.preventDefault()
    const newTask = document.createElement('li')
    newTask.textContent = input.value
    if (input.value==='') { //if value is undefined, alert the user that a valid input is required
        alert('Please enter a task before attempting to add to the list')
    } else { //otherwise, add the value of input to the ul as li      
        taskList.appendChild(newTask)
        input.value = ''//clear the input
    }    
})

let clickCount = 0
taskList.addEventListener('click', (e) => {
    console.log(`clickCount is at:${clickCount}`)
    if (clickCount % 2 === 0) {//if an even amount of clicks has occured, style the li with a black solid line-through 
        e.target.style.textDecoration = 'line-through solid black'        
        //console.log(`clickCount is at:${clickCount} at even count`)        
    } else if (clickCount % 2 !== 0) { //if an odd num of clicks is observed, remove the styling
        e.target.style.textDecoration = 'none'
        console.log(`clickCount is at:${clickCount} at odd count`)
        
    }
    clickCount++//increase the number of clicks per event
})






