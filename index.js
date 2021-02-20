console.log("Code your solution!");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const ul = document.querySelector("ul");
  const input = document.querySelector("input");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const listItem = document.createElement("li");
    listItem.textContent = input.value;
    ul.appendChild(listItem);
    listItem.addEventListener("click", (event) => {
        listItem.style.textDecoration = "line-through"
    })
  });
});
