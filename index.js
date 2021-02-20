const addToList = () => {
    let input = document.querySelector("#list-adder")
    const ul = document.querySelector("ul")
    inputText = input.value
    li = document.createElement("li")
    p = document.getElementById("error")
    if(input.value === ""){
        p.textContent = "Error! Todo cannot be empty!"
    }else{
        ul.appendChild(li)
        li.textContent = inputText;
        input.value = "";   
        p.textContent = "";
        // Want to remove Error message when correct input is given

    }
}


const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    addToList()
})
form.addEventListener("click", (e))





// document.addEventListener("DOMContentLoaded", () => {

// })
