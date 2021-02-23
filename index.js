document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form")
    const ul = document.querySelector("ul")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let input = document.querySelector("textarea").value.trim()
        if(input === ""){
            document.querySelector("p").textContent = "Error. Todo cannot be empty"
        } else {
            input = input.split("\n").filter(e => e.trim() !== "")
            for(const line of input){
                const li = document.createElement("li")
                li.textContent = line
                const btn = document.createElement("button")
                btn.textContent = "Remove"
                btn.className = "rmvBtn"
                btn.addEventListener("click", () => {
                    btn.parentNode.parentNode.removeChild(btn.parentNode)
                })
                li.appendChild(btn)
                ul.appendChild(li)
            }
            document.querySelector("p").textContent = ""
        }
        form.reset()
    })
    ul.addEventListener("click", (event) => {
        event.target.style.textDecoration = event.target.style.textDecoration === "line-through" ? "none" : "line-through"
        event.target.style.color = event.target.style.color === "rgb(46, 187, 190)" ? "" : "rgb(46, 187, 190)"
    })
})