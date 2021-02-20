console.log("Code your solution!")
let ul = document.getElementById("unordered-list")
let form = document.querySelector("form")
form.button.addEventListener("click", (event) => {
    event.preventDefault();
    let input = document.getElementById("text-input")
    let input1 = input.value
    let p = document.querySelector("p")
    if(input1 === "") {
        p.innerText = "Error. Todo cannot be empty"

    }
    else {
        let li = document.createElement("li")
        let btn = document.createElement("button")
        btn.textContent = "Delete"
        li.textContent = input1
        ul.appendChild(li)
        li.appendChild(btn)
        p.textContent = ""
        form.reset();
    }

    ul.addEventListener("click", (event)  => {
        event.target.style.textDecoration = "line-through"
    })

})
