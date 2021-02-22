// console.log("Code your solution!")
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#todo-form");
  const p = document.querySelector("#error-msg");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const textarea = document.querySelector("#to-do-text");
    // debugger;
    if (textarea.value === "") {
      p.textContent = "Error. Todo cannot be empty";
    } else {
      p.textContent = "";
      let li = document.createElement("li");
      let button = document.createElement("button");
      button.class = "delete-button";// mdn classlist and add
      button.textContent = "Delete";
      li.textContent = textarea.value;
      const ul = document.querySelector("ul");
      ul.appendChild(li);
      li.appendChild(button);
      button.addEventListener("click", (event) => {
        //   debugger;
        event.target.parentNode.remove();
      });
    }
  });
  const ul = document.querySelector("ul");
  ul.addEventListener("click", (event) => {
    event.target.style.textDecoration = "line-through";
  });
});
//when we need access or care of the event we add it in the event listener parameters
// dont need event when the DOMcontent is loaded
//
