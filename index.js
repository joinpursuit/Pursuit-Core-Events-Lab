
const addToList = () => {
    let input = document.querySelector("#list-adder")
    const ul = document.querySelector("ul")
    inputText = input.value
    let list = document.createElement("li")
    p = document.getElementById("error")
    if(input.value === ""){
        p.textContent = "Error! Todo cannot be empty!"
    }else{
        ul.appendChild(list)
        list.textContent = inputText;
        input.value = "";   
        p.textContent = "";
    
        
    }
}


const form = document.querySelector("form");
let ul = document.querySelector("ul")
let li = document.querySelectorAll("li")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    addToList()
})

ul.addEventListener("click", (e) => {
    // e.target.style.textDecoration = "line-through"
    if (e.target.style.textDecoration === "line-through") {
        e.target.style.textDecoration = "none"
    } else {
        e.target.style.textDecoration = "line-through"
    }
})





// document.addEventListener("DOMContentLoaded", () => {

// })
