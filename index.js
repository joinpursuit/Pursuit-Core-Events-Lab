

    document.addEventListener("DOMContentLoaded", () => {
        let userList = document.querySelector("ul")
        userList.addEventListener("submit", (event) => {
            event.preventDefault()
          const input = document.getElementById('user-todo').value
          let newList = document.createElement('li')
          newList.textContent = input
            userList.appendChild(newList)
        })
      })
