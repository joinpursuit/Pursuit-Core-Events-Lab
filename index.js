document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector('input')
    const todo = document.querySelector('ul')
    const error = document.querySelector('p')

    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault()
        if (!input.value) {
            error.textContent = "Error. This cannot be blank"
            return
        }
        error.textContent = ""

        const entry = document.createElement("li")
        entry.textContent = input.value
        todo.appendChild(entry)

        todo.addEventListener('click', (event) => {
            console.log (event.target.tagName)
            console.log(event.target)
            if (event.target.tagName === 'LI') {
                event.target.style.textDecoration = 'line-through'
            }
        })
        document.querySelector('form').reset()
    })

})