console.log("Code your solution!");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const ul = document.querySelector("ul");
  const input = document.querySelector("input");
  const p= document.querySelector("p")
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const listItem = document.createElement("li");
    if (input.value.length === 0){
      p.textContent = `Error To Do Cannot Be Empty` 
    }else{
      listItem.textContent = input.value;
      ul.appendChild(listItem);
      p.textContent=""
    }
    input.value = ""
    listItem.addEventListener("click", (event) => {
      listItem.style.textDecoration = "line-through"
    })
  });
});

