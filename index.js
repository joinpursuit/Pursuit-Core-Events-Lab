document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector('ul')
    const error = document.querySelector('p')

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const input = document.querySelector('input').value

        if (input === "") {
            error.textContent = 'Error'
        } else {
            let li = document.createElement('li')
            li.textContent = input
            list.appendChild(li)
        }

    })

    list.addEventListener('click', event => {
        event.target.style.textDecoration = 'line-through'
    })
}) 