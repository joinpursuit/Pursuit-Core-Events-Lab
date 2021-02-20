// console.log("Code your solution!")
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#todo-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("#to-do-list");
    let li = document.createElement("li");
    li.textContent = input.value;
    const ul = document.querySelector("ul");
    ul.appendChild(li);
    const liText = document.querySelector("li")
    liText.addEventListener("click", (event) => {
      liText.style.textDecoration = "line-through"
  });
});
});

