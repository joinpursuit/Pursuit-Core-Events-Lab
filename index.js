document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const p = document.querySelector("#error");
  const input = document.querySelector("#input");
  const ul = document.querySelector("#list");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (input.value === "") {
      p.textContent = `Error. Todo cannot be empty`;
    } else {
      let lines = input.value.split("\n");
      for (let line of lines) {
        if (line) {
          let listItem = document.createElement("li");
          listItem.textContent = line;
          ul.appendChild(listItem);
          let button = document.createElement("button");
          button.innerHTML = "Delete";
          listItem.appendChild(button);
          button.addEventListener("click", (e) => {
            button.parentNode.remove(e);
          });
          p.textContent = "";
          listItem.addEventListener("click", (e) => {
            let liStyle = e.target;
            if (liStyle.style.textDecoration === "line-through") {
              liStyle.style.textDecoration = "none";
            } else {
              liStyle.style.textDecoration = "line-through";
            }
          });
          input.value = "";
        }
      }
    }
  });
});

