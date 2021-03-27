console.log("Code your solution!")

document.addEventListener("DOMContentLoaded", () => {
    const newItem = () => {
        p = document.getElementById("error")
        let input = document.getElementById("input").value
        let toDoList = document.getElementById("toDoList")
        let newLi = document.createElement("li")

        newLi.textContent = input
        toDoList.appendChild(newLi)

        if(input === "") {
            p.textContent = "ERROR, textbox cannot be empty"
        }
    }

    const form = document.getElementById("submitForm")
    let toDoList = document.getElementById("toDoList")

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        newItem()
    })

    toDoList.addEventListener("click", (e) => {
        if (e.target.style.textDecoration === "line-through"){
            e.target.style.textDecoration = "null"
        } else {
            e.target.style.textDecoration = "line-through"
        }
    })
})
