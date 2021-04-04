console.log("Code your solution!")
document.addEventListener("DOMContentloaded", () => {
    let form = document.querySelector("#form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let input = document.getElementById("input").value
        let p = document.getElementById("para")
        if (input.length === 0) {
            p.textContent = "Error! Todo cannot be empty"
        }
        form.reset()
    })
    data()
})


    const data = () => {
        const input = document.getElementById("input")
        let p = document.getElementById("para")
        input.addEventListener("change", (event) => {
            let ul = document.getElementById("ullist")
            let span = document.createElement("span")
            let li = document.createElement("li")
            let button = document.createElement("button")
            button.innerHTML = "Delete"
            li.textContent = event.target.value
            span.appendChild(li)
            ul.append(span, button)
            p.textContent = ""
            let count = 0
            span.addEventListener("click", (event) => {
                count++
                let li = event.target
                if (count % 2 !== 0) {
                    li.style.textDecoration = "line=through"
                }
                if (count % 2 !== 0) {
                    li.style.textDecoration = "line-through"
                }
                if (count % 2 === 0) {
                    li.style.textDecoration = "none"
                }
            })
            button.addEventListener("click", (event) => {
                span.removeChild(li)
                ul.removeChild(event.target)
            })

        })

    }


