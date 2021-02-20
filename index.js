//  const addListItem = () => {
//      const ul = document.querySelector("#list")
//      let listItem = document.createElement("li")
//      let input = document.querySelector("#input").value
//      listItem.textContent = input
//      ul.appendChild(listItem)
//  }
 
 
 document.addEventListener("DOMContentLoaded", () => {

    //const button = document.querySelector("#add-to-do-list")
    
    const form = document.querySelector("form")
    const p = document.querySelector("#error")
    let input = document.querySelector("#input")
    const ul = document.querySelector("#list")
    let listItem

    form.addEventListener("submit", (event) => {
        event.preventDefault()
   
        // const input = document.querySelector("#input").value
        if(input.value === "") {
            p.textContent = `Error. Todo cannot be empty`
            // setTimeout(()=> {
            //    }, 5000)
        } else {
            listItem = document.createElement("li")
            listItem.textContent = input.value
            ul.appendChild(listItem)
            p.textContent = ""
            input.value = ""
            // listItem.textContent = input.value
        }
    })  
    list.addEventListener("click", (e) => {
        e.target.style.textDecoration = "line-through"
        })

})
