console.log("Code your solution!")

document.addEventListener("DOMContentLoaded", (event) => {

    const form = document.querySelector("form")
    form.addEventListener("submit", event => {
        event.preventDefault();
        let input = document.querySelector("input").value
        const li = document.createElement("li")
        li.textContent = input 
        document.querySelector("ul").appendChild(li)
        
        if (input === "") {
            const p = document.querySelector("p");
            p.textContent = "Error. Todo cannot be empty";
            
        }
        input.value = "";
    })
})