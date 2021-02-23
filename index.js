document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.querySelector('form')
    const ul = document.querySelector("ul")


    form.addEventListener("submit", (event) => {
        event.preventDefault()

        let input = document.querySelector('#textInput').value
        let newLItem = document.createElement("li")
        newLItem.innerText = input
        ul.appendChild(newLItem)
        console.log(input)

    })

})