// the header without adding a defer attribute
document.addEventListener("DOMContentLoaded", ()=> {
    // grabing the form 
    const form = document.querySelector('form')
    // adding an event listener to the form.
    form.addEventListener("submit", (event) => {
   // to prevent the event from doing any action.
    event.preventDefault()
    // grabing input value from dom
    let input = document.querySelector('input').value
    document.querySelector("form").reset()
    // checking if the input text has something typed or not
    if(input.length === 0){
    let p = document.querySelector('p')
    // showing messages  if user don't put any text
    p.textContent = "Error. Todo cannot be empty."
    } else {
        // create new li element 
        let li = document.createElement('li')
        let deleteButtons =document.createElement("button")
        deleteButtons.innerHTML ='Delete'
        // grabing ul
        let ul = document.querySelector('ul')
        // set its texContent property to be the text the user typed
        li.textContent = input
        // adding list
        ul.appendChild(li)
        li.appendChild(deleteButtons)
        let p = document.querySelector('p')
        // relace the text and give string value
        p.textContent= ""
    }
    })
    // creating variable to grab ul 
    let list = document.querySelector('ul')
    // add the event listener to the list.
    list.addEventListener('click', (event) => {
        // crating cross out effect
    event.target.style.textDecoration = "line-through"
    })
    
})
