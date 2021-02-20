console.log("Code your solution!");

document.addEventListener("DOMContentLoaded", (event) => {
	let input;

	const form = document.querySelector("form");
	form.addEventListener("submit", (event) => {
		event.preventDefault();

		input = document.querySelector("input").value;

		let li = document.createElement("li");
		let p = document.querySelector("p");
        let button = document.createElement("button");;

		if (input === "") {
			p.textContent = "Error. Todo cannot be empty";
		} else {
			li.textContent = input;
            document.querySelector("ul").appendChild(li);
            // need to attach the button to each li as it is created
			button.textContent = "remove item";
			document.querySelector("li").appendChild(button);
		}
input.value = " ";
		li.addEventListener("click", () => {
			li.style.textDecoration = "line-through";
        });
        
        button.addEventListener("click", () => {
            button.parentNode.remove();
				});

	});

	// reset the input value to empty string
	// 
});
