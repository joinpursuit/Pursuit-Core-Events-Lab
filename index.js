document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form")
    form.addEventListener("submit",(event) => {
        event.preventDefault()

        let input = document.querySelector("input").value
        document.querySelector("form").reset();
        if(input.length === 0) {
            let p = document.querySelector('p')
            p.textContent = "Error. To-do cannot be empty"
        } else {
            let li = document.createElement('li')
            let ul = document.querySelector('ul')
            li.textContent = input
            ul.appendChild(li)
            let p = document.querySelector("p")
            p.textContent= ""
        }
    })
    
    let list = document.querySelector("ul")
    list.addEventListener("click",(event) => {
        event.target.style.textDecoration = "line-through"
    })
})
    console.log("Code your solution!")
    