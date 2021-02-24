console.log("Code your solution!");

document.addEventListener("DOMContentLoaded", () => {
  const todos = document.querySelector("ul");
  const errors = document.querySelector("p");
  const input = document.querySelector("input");

  todos.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      event.target.style.textDecoration = "line-through";
    }
  });
  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!input.value) {
      errors.textContent = "Error. Todo cannot be empty";
      return;
    }
    errors.textContent = "";
    const items = document.createElement("li");
    items.textContent = input.value;
    todos.appendChild(items);
  });
});
