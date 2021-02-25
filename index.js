document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  const ulList = document.querySelector("#ul-list");
  const paraMsg = document.querySelector("#paramsg");

  const addToDos = () => {
    const addLi = document.createElement("li");
    addLi.textContent = input.value;
    ulList.appendChild(addLi);
    paraMsg.textContent = "";
    input.value = "";
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (input.value === "") {
      paraMsg.textContent = "Error: To-Do Cannot be Empty! Please Enter a To-Do Item! ";
    } else {
      addToDos();
    }
  });

  ulList.addEventListener("click", (event) => {
    event.target.style.textDecoration = "line-through";
    ulList.addEventListener("click", (event) => {
      event.target.style.textDecoration = "none";
    });
  });
});
