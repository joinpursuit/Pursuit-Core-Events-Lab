const ul = document.querySelector("#unorder-list");
const submit = document.querySelector("button");


submit.addEventListener("click", (event) => {
    const li = document.createElement("li");
    event.preventDefault();
    const input = document.querySelector("input").value;
    li.textContent = input;
    ul.appendChild(li);
})

ul.addEventListener("click", (event) => {
    event.target.style.textDecoration = "line-through"
})

