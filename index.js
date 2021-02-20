// console.log("Code your solution!")
const form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
e.preventDefault()
let input = document.querySelector("input")
let li = document.createElement("li")
let deleteButton = document.createElement("button")
li.textContent = input.value + " "
deleteButton.textContent = "Delete"

li.appendChild(deleteButton)
let allItems = document.querySelector("#all-items")
allItems.appendChild(li)
input.value = ""
})

let allItems = document.querySelector("#all-items")
allItems.addEventListener("click", (e)=>{
    e.target.style.textDecoration = "line-through";

})


