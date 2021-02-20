console.log("Code your solution!")

document.addEventListener("DOMContentLoaded", () => {
    const ul = document.querySelector("ul");
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    const input = document.querySelector("input").value;
    const p = document.querySelector("p");
    if(input === "") {
        p.innerText = "Error: To-Do List cannot be empty";
    } else {
        let li = document.createElement("li");
        li.textContent = input;
        ul.appendChild(li);
        p.innerText = "";
    }
    })

    let list = document.querySelector("ul")
    list.addEventListener("click", (event) => {
        event.target.style.textDecorationLine = "line-through";
    })
})


// let list = document.querySelector("li").textContent
//     for(let el of list) {
//         el.addEventListener("click", (event) => {
//             event.target.style.textDecorationLine = "line-through";

 // input.document.querySelector("input").value = "";
 // input.reset()