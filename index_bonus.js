document.addEventListener("DOMContentLoaded", function () {
  const errors = document.querySelector("p");
  const textarea = document.querySelector("textarea");
  const todos = document.querySelector("ul");

  todos.addEventListener("click", ({ target }) => {
    switch (target.tagName) {
      case "LI":
        target.style.textDecoration =
          target.style.textDecoration === "line-through" ? "" : "line-through";
        break;

      case "BUTTON":
        todos.removeChild(target.parentNode);
        break;
    }
  });

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const value = textarea.value.trim();

    if (!value) {
      errors.innerText = "Empty todo value?!";
      return;
    }

    errors.innerText = "";
    textarea.value = "";

    for (let line of value.split("\n")) {
      line = line.trim();
      if (!line) {
        continue;
      }

      const item = document.createElement("li");
      item.innerText = line;

      const button = document.createElement("button");
      button.innerText = "delete";
      item.appendChild(button);

      todos.appendChild(item);
    }
  });
});
