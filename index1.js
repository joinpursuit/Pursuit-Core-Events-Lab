

document.addEventListener("DOMContentLoaded", function(){
   const errors = document.querySelector('p')
   const input = document.querySelector('input')
   const unorderedList = document.querySelector("ul")

   unorderedList.addEventListener("click", (event) =>{
       // if(event.target.tagName === "LI")
        event.target.style.textDecoration = "line-through"
        
    })
        
   document.querySelector('form').addEventListener("submit", (event)=>{
            event.preventDefault()
            if(!input.value){
                let message = errors.textContent = "Error"
                return message
        }
        errors.textContent = ""
        
        const listItems= document.createElement("li")
        listItems.textContent = input.value
        unorderedList.appendChild(listItems)

    })  
})
        


