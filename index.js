console.log("Code your solution!");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const ul = document.querySelector("ul");
  const input = document.querySelector("textarea");
  const p = document.querySelector("p");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (input.value.length === 0) {
      p.textContent = `Error: To-Do Submittion Cannot Be Empty`;
    } else {
      const lines = input.value.split("\n");
      for (const line of lines) {
        const listItem = document.createElement("li");
        const button = document.createElement("button");
        if (line.length !== 0) {
            listItem.textContent = line;
            ul.appendChild(listItem);
            button.classList.add="deleted"
            button.textContent = "Delete Item";
            listItem.appendChild(button);
            p.textContent = "";
        }
        listItem.addEventListener("click", (event) => {
          if (listItem.style.textDecoration === "line-through") {
            listItem.style.textDecoration = "none solid rgb(0,0,0)";
          } else {
            listItem.style.textDecoration = "line-through";
          }
        });
        button.addEventListener("click", (e) => {
          button.parentNode.remove(e);

        });
      }
    }
    input.value = "";
  });
});
