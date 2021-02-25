//load dom 
document.addEventListener('DOMContentLoaded', () => {
    
    //select tags from dom for manipulation     
    const p = document.querySelector('p')
    const form = document.querySelector('form')
    const ul = document.querySelector('ul')
    const submitButton = document.querySelector('#btn')
    
    //create event listener on form variable
    submitButton.addEventListener('click', (event) => {
        event.preventDefault() //prevent reload
    //get input by user
        let input = document.querySelector('textarea').value
        inputPlus = input.split("\n")
        console.log(input)
        console.log(inputPlus[0])
    //set conditions for text and no text. 
     
        if (input === "") {
            p.innerHTML = `Please enter text`
        } else {
            for(let i = 0 ; i <inputPlus.length ;i++){
            p.innerHTML = ""
            let newLItem = document.createElement('li') //CREATE new line item 
            newLItem.textContent = inputPlus[i] //set users input to text of that item 
            ul.appendChild(newLItem) // append our ul varialble 
            
            document.querySelector("form").reset('')//
            //const li = document.querySelector('li')
            const removeButton = document.createElement("button")
            removeButton.textContent = `Remove`
            newLItem.appendChild(removeButton)
           
            removeButton.addEventListener("click", (event) =>{
                newLItem.remove(event)
            })
        }
        }
        
        // console.log(ul)
        
    })
    //create event listener on ul variable to cross out list item
    ul.addEventListener("click", (event) => {
        if (event.target.style.textDecoration === "line-through solid rgb(0, 0, 0)") {
            event.target.style.textDecoration = ""
            //event.target.style.backgroundColor = ""
        } else {
            event.target.style.textDecoration = "line-through solid rgb(0, 0, 0)"
            //event.target.style.backgroundColor = "blue"
        }
    })
    
    
    const listItem = document.querySelector('li')
    
    //remove btn 

})