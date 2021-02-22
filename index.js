document.addEventListener("DOMContentLoaded" , () => {
    list()

})


function list(){
    const button = document.querySelector("button")
    const error = document.querySelector("p")
    const list = document.querySelector("ul")
    const form = document.querySelector("form")

    button.addEventListener("click", ()=>{
    event.preventDefault()
    const input = document.querySelector("textarea").value
    let array = input.split("\n")


    document.querySelector("form").reset()

console.log(input)

for (let el of array){
    if (el){
        error.textContent = ""
        add()
    } else {
        error.textContent = "Error: To-Do list entry is empty. Try again."
    }


    function add() { 
        const item = document.createElement("li")
        const deleteBut = document.createElement("button")
        deleteBut.textContent = "Delete"
        item.textContent = `${el}         `
        list.appendChild(item)
        item.appendChild(deleteBut)

        deleteBut.addEventListener("click", (ev) =>{
            deleteBut.parentNode.remove(ev)
        })
       }

}
  
})

list.addEventListener("click" , (ev) => {
    if (ev.target.style.textDecoration === "line-through"){
        ev.target.style.textDecoration = "none"
    } else {
        ev.target.style.textDecoration = "line-through"
    }
})
    
    
}




