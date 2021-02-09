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
      errors.innerText = "Empty todo value?!";
      return;
    }

    errors.innerText = "";

    const item = document.createElement("li");
    item.innerText = input.value;
    todos.appendChild(item);
  });
});
