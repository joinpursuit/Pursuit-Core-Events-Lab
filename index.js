document.addEventListener('DOMContentLoaded', () => {
    const p = document.querySelector('p')
    const form = document.querySelector('form')
    const ul = document.querySelector('ul')
    


    form.addEventListener('submit', (event) => {
        event.preventDefault()

        let input = document.querySelector('#textInput').value
        if (input === "") {
            p.innerHTML = `Please enter text`
        } else {
            p.innerHTML = ""
            let newLItem = document.createElement('li')
            newLItem.textContent = input
            ul.appendChild(newLItem)
        }
        // console.log(ul)

    })
    ul.addEventListener("click", (event) => {
        if (event.target.style.textDecoration === "line-through") {
            event.target.style.textDecoration = "none";
        } else {
            event.target.style.textDecoration = "line-through";
        }
    })


})
