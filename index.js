document.addEventListener("DOMContentLoaded", function () {
  const errors = document.querySelector("p");
  const input = document.querySelector("input");
  const todos = document.querySelector("ul");

  todos.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      event.target.style.textDecoration = "line-through";
    }
  });

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    if (!input.value) {
      errors.textContent = "Empty todo value?!";
      return;
    }

    errors.textContent = "";

    const item = document.createElement("li");
    item.textContent = input.value;
    todos.appendChild(item);
  });
});
