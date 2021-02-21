console.log("Code your solution!")

document.addEventListener("DOMContentLoaded", () => {
    const ul = document.querySelector("ul");
    const form = document.querySelector("form");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    let textArea = document.querySelector("textarea");
    const p = document.querySelector("p");
    if(textArea.value === "") {
        p.innerText = "Error: To-Do List cannot be empty";
    } else {
        let li = document.createElement("li");
        li.textContent = textArea.value;
        ul.appendChild(li);
        p.innerText = "";

        let delButton = document.createElement("button");
        delButton.innerText = "Delete";
        li.append(delButton)

        delButton.addEventListener("click", () => {
            ul.removeChild(li)
        })
        
    }
   
    textArea.value = ""

    })

    const removeStrikethrough = (event) => {
        if(event.target.style.textDecorationLine === "line-through") {
            event.target.style.textDecorationLine = "none"
        } else {
            event.target.style.textDecorationLine = "line-through"
        }
    }

    let list = document.querySelector("ul")
    list.addEventListener("click", removeStrikethrough)

})


