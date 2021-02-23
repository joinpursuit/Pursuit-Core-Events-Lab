//load dom 
document.addEventListener('DOMContentLoaded', () => {

//select tags from dom for manipulation     
    const p = document.querySelector('p')
    const form = document.querySelector('form')
    const ul = document.querySelector('ul')
    const li = document.querySelector('li')
    

//create event listener on form variable
    form.addEventListener('submit', (event) => {
        event.preventDefault() //prevent reload
    //get input value from text that is input by user
        let input = document.querySelector('#textInput').value
       //set conditions for no text and text in.  
        if (input === "") {
            p.innerHTML = `Please enter text`
        } else {
            p.innerHTML = ""
            let newLItem = document.createElement('li') //CREATE new line item 
            newLItem.textContent = input //set users input to text of that item 
            ul.appendChild(newLItem) // append our ul varialble 
        }
        // console.log(ul)

    })
//create event listener on ul variable to cross out list item
    ul.addEventListener("click", (event) => {
        if (event.target.style.textDecoration === "line-through") {
            event.target.style.textDecoration = "none"
        } else {
            event.target.style.textDecoration = "line-through"
            event.target.style.backgroundColor = 'black'
        }
    })


})
