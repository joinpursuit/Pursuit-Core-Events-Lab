document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form")
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const taskInput = document.querySelector("#task-input")
        const ul = document.querySelector("ul");
        const li = document.createElement("li");
        li.textContent = taskInput.value
        ul.appendChild(li);
        taskInput.value = "";
    })
    li.addEventListener("click" , (e) => {
        e.preventDefault();
        li.style.textDecoration = "line-through";
    })
})

