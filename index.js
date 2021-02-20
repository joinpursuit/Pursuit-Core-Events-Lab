// console.log("Code your solution!")
const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let textArea = document.querySelector("textarea")
    let li = document.createElement("li")
    let deleteButton = document.createElement("button")

    li.textContent = textArea.value + " "
    deleteButton.textContent = "Delete"
    deleteButton.id = "delete-button"

    li.appendChild(deleteButton)
    let allItems = document.querySelector("#all-items")
    allItems.appendChild(li)
    textArea.value = ""

    deleteButton.addEventListener("click", (e) => {
        deleteButton.parentNode.remove()
    })


})

let allItems = document.querySelector("#all-items")
allItems.addEventListener("click", (e) => {
    if (e.target.style.textDecoration === "line-through") {
        e.target.style.textDecoration = "none"
    } else {
        e.target.style.textDecoration = "line-through"
    }
})


