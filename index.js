document.addEventListener("DOMContentLoaded", () => {

    let btn = document.querySelector("button")
    let input = document.querySelector("input")  // why can't I write .value at the end of this, instead of writing .value where I define li.textContent?
    let form = document.querySelector("form")
    let ul = document.querySelector("ul")
    form.addEventListener("click", (event) => {
        event.preventDefault()
    })
    

    
    btn.addEventListener("click", () => {
        let li = document.createElement("li")
        let p = document.querySelector("p")
        if (input.value === '') {
            p.innerHTML = "Error! Todo cannot be empty"
        }
        else {
            p.innerHTML = ''
            li.textContent = input.value
            ul.appendChild(li)
        }
    })

    ul.addEventListener("click", (event) => {
        event.target.style.textDecoration = "line-through"
    })


})



