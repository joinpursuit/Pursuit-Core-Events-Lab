console.log("Code your solution!");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const ul = document.querySelector("ul");
  const input = document.querySelector("input");
  const p= document.querySelector("p")
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    if (input.value.length === 0){
      p.textContent = `Error: To-Do Submittion Cannot Be Empty` 
    }else{
      listItem.textContent = input.value;
      ul.appendChild(listItem);
      button.textContent = "Delete Item"
      listItem.appendChild(button);
      p.textContent= ""
    }
    input.value = ""
    listItem.addEventListener("click", (event) => {
        if (listItem.style.textDecoration === "line-through") {
            listItem.style.textDecoration = "none"
        } else {
            listItem.style.textDecoration = "line-through"
        }
    })
    button.addEventListener("click", (e) => {
        button.parentNode.remove(e)
    })
  });
});

