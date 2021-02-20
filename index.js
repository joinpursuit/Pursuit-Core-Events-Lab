console.log("Code your solution!")

document.addEventListener("DOMContentLoaded", (event) => {

    let input;
    const form = document.querySelector("form")
    form.addEventListener("submit", event => {
        event.preventDefault();
        
        input = document.querySelector("input").value
        let li = document.createElement("li")
        let p = document.querySelector("p");
        
        if (input === "") {
            p.textContent = "Error. Todo cannot be empty";
            
        } else {
            
            li.textContent = input 
            document.querySelector("ul").appendChild(li)

        }
        li.addEventListener("click", () => {
            li.style.textDecoration = "line-through" 
        })
        
    })
})