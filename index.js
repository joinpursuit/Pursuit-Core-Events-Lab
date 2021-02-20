const ul = document.querySelector("#unorder-list");
const li = document.createElement("li");
const submit = document.querySelector("button");
submit.addEventListener("click", (event) => {
    event.preventDefault()
    const input = document.querySelector("input").value;
    li.textContent = input
    ul.appendChild(li);
})


