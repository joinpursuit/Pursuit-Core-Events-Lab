const ul = document.querySelector("#unorder-list");
const form = document.querySelector("form");
const textArea = document.querySelector("#add-to-list");
const p = document.querySelector("p");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (textArea.value === "") {
    p.textContent = "Error";
  } else {
    const lines = textArea.value.split("\n");
    for (let line of lines) {
      if (line) {
        const li = document.createElement("li");
        const button = document.createElement("button");
        li.textContent = line;
        button.textContent = "Delete";
        ul.appendChild(li);
        li.appendChild(button);
        button.addEventListener("click", (event) => {
          button.parentNode.remove(event);
        });
        li.addEventListener("click", (event) => {
          if (event.target.style.textDecoration === "line-through") {
            event.target.style.textDecoration = "none";
          } else {
            event.target.style.textDecoration = "line-through";
          }
        });
        form.reset();
      }
    }
  }
});
