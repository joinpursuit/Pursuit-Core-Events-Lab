document.addEventListener("DOMContentLoaded", () =>{
   const textArea= document.querySelector('textarea')
    const p = document.querySelector('p')
    const unorderedList = document.querySelector('ul')
    const form = document.querySelector("form")

    form.addEventListener("submit", (event)=>{
        event.preventDefault()
        if(!textArea.value){
            p.textContent = "Error"
        } else {
            p.textContent = ""

            let arrayOfWords =textArea.value.split("\n")
            arrayOfWords.forEach((word=>{
                if(word !== ""){
                const li = document.createElement("li")
                li.textContent = word.trim()
                unorderedList.appendChild(li)
                const deleteButton = document.createElement("button")
                deleteButton.textContent = "Delete"
                li.appendChild(deleteButton)
                
                deleteButton.addEventListener("click", (event) =>{
                unorderedList.removeChild(li)
                debugger
                
                })
            }
            }))
        }
    })
    
    unorderedList.addEventListener("click", (event)=>{
        if(event.target.style.textDecoration ==="line-through"){
            event.target.style.textDecoration = 'none'
        } else {
            event.target.style.textDecoration = "line-through"
        }
})
})

         
 
 
 
