document.addEventListener('DOMContentLoaded', () => {
    
    const para = document.querySelector('p')
    const form = document.querySelector('form')
    const ul = document.querySelector('ul')
    const submitButton = document.querySelector('#btn')
    
    submitButton.addEventListener('click', (event) => {
        event.preventDefault() 

        let input = document.querySelector('textarea').value
        inputPlus = input.split("\n")
        console.log(input)
        console.log(inputPlus[0])
     
        if (input === "") {
            para.innerHTML = `To-do field cannot be empty`
        } else {
            for(let i = 0 ; i <inputPlus.length ;i++){
            para.innerHTML = ""
            let newLItem = document.createElement('li') 
            newLItem.textContent = inputPlus[i]
            ul.appendChild(newLItem) 
            
            document.querySelector("form").reset('')
            const removeButton = document.createElement("button")
            removeButton.textContent = `Remove`
            newLItem.appendChild(removeButton)
           
            removeButton.addEventListener("click", (event) =>{
                newLItem.remove(event)
            })
        }
        }
        
    })
    ul.addEventListener("click", (event) => {
        if (event.target.style.textDecoration === "line-through solid rgb(0, 0, 0)") {
            event.target.style.textDecoration = ""
        } else {
            event.target.style.textDecoration = "line-through solid rgb(0, 0, 0)"
        }
    })
    
    const listItem = document.querySelector('li')
    
})