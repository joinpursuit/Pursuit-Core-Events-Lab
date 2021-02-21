// console.log("Code your solution!")
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#todo-form");
  const p = document.querySelector("#error-msg");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("#to-do-list");
    if (input.value === "") {
      p.textContent = "Error. Todo cannot be empty";
    } else {
      p.textContent = "";
      let li = document.createElement("li");
      li.textContent = input.value;
      const ul = document.querySelector("ul");
      ul.appendChild(li);
    }
  });
  const ul = document.querySelector("ul");
  ul.addEventListener("click", (event) => {
    // debugger;
    event.target.style.textDecoration = "line-through";
  });
});
//when we need access or care of the event we add it in the event listener parameters
// dont need event when the DOMcontent is loaded
//