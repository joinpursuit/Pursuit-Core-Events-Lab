document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const p = document.querySelector("#error");
  let input = document.querySelector("#input");
  const ul = document.querySelector("#list");
  let listItem;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (input.value === "") {
      p.textContent = `Error. Todo cannot be empty`;
    } else {
      listItem = document.createElement("li");
      //listItem.textContent = input.value;
      let newArray = input.value.split("\n");
      newArray.forEach((el) => {
        listItem = document.createElement("li");
        listItem.textContent = el;
        ul.appendChild(listItem);
        let button = document.createElement("button");
        button.innerHTML = "Delete";
        ul.appendChild(button);
        p.textContent = "";
        input.value = "";
      });
    }
  });

  //ul.appendChild(listItem);
  //       let button = document.createElement("button");
  //       button.innerHTML = "Delete";
  //       ul.appendChild(button);
        button.addEventListener("click", (e) => {
          e.preventDefault();
          e.target.parentNode.removeChild(listItem);
          e.target.parentNode.removeChild(button);
        });
        // p.textContent = "";
        // input.value = "";
    //   }
    });
  list.addEventListener("click", (e) => {
    let liStyle = e.target;
    if (liStyle.style.textDecoration === "line-through") {
      liStyle.style.textDecoration = "none";
    } else {
      liStyle.style.textDecoration = "line-through";
    }
  });
});
