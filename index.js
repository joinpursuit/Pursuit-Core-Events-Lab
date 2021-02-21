console.log("Code your solution!");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("input");
    if (input.value.length === 0) {
        const paragraph = document.querySelector("p");
        paragraph.textContent = "Error. Todo cannot be empty";
    } else{
        const listItem = document.createElement("li");
        const deleteButton = document.createElement("button")
        listItem.textContent = input.value;
        document.querySelector("ul").appendChild(listItem);
    }
    input.value = "";
  });
  const crossOut = document.querySelector("ul");
  crossOut.addEventListener("click",(event)=>{
      event.target.style.textDecoration = "line-through"
  })
});
