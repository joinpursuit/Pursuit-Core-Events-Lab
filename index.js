console.log('raymond')
    document.addEventListener("DOMContentLoaded", () => {
        let form = document.querySelector('form')
        form.addEventListener("submit", (event) => {
            event.preventDefault()
          const input = document.getElementById('user-todo').value
          console.log(input)
          let newList = document.createElement('li')
          newList.textContent = input
            form.appendChild(newList)
            //line 10 adds the text to the line
            //next we want to make an if else statement testing if there is input
                //if there is input the normal function is passed
                //else an error message is placed in a p tag below form
        })
      })
