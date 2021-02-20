const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault()
})

const addToList = () => {
    let input = document.querySelector("#list-adder")
    const ul = document.querySelector("ul")
    inputText = input.value
    li = document.createElement("li")
    ul.appendChild(li)
    li.textContent = inputText
    
}


document.addEventListener("DOMContentLoaded", () => {

})
