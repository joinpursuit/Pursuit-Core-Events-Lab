console.log("Code your solution!")

document.addEventListener('DOMContentLoaded', () => {

   let form = document.querySelector("form")
   form.addEventListener('submit', (event) => {
       event.preventDefault()
      let action = document.querySelector('textarea').value.split("\n")
      document.querySelector("form").reset()
for (let i = 0; i < action.length; i++) {
      if(action[i] === "") {
         let error = document.querySelector("p")
         error.textContent = "Error. Todo cannot be empty"
         
        }
        else {
          let list = document.querySelector('ul')
          let newLi = document.createElement('li')
          
          

          newLi.textContent = action
          list.appendChild(newLi)
          let error = document.querySelector("p")
          error.textContent = ""


          let button = document.createElement('button')
          button.textContent = "Delete"
          newLi.appendChild(button)

          button.addEventListener("click", (event) => {
              button.parentNode.remove(event)
          })

      }
    }

   })
   let list = document.querySelector('ul')
   list.addEventListener('click', (event) => {
       if(event.target.style.textDecoration === "line-through") {
           event.target.style.textDecoration = "none"
        }
        else {
            event.target.style.textDecoration = "line-through"
        }

    
   })
   
})
