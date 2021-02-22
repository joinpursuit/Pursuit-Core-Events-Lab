console.log('Code your solution!')

document.addEventListener('DOMContentLoaded', () => {
  submitToDo()
})

function submitToDo () {
  let uList = document.getElementById('unList')

  let button = document.getElementById('button')
  button.addEventListener('click', () => {
    event.preventDefault()
    let userInput = document.getElementById('input').value

    let array = userInput.split('\n')
  

    let errorTag = document.getElementById('error')
    if (!userInput) {
      errorTag.textContent = 'Error - Nothing to Do'
    } else {
      errorTag.textContent = ''

      array.forEach(list => 
      {let newList = document.createElement('li')
      newList.textContent = `${list}      \t\t`
    

      uList.appendChild(newList)
      let noList = document.createElement('button')
   
      noList.textContent = 'Delete'

      newList.appendChild(noList)

      noList.addEventListener('click', (event) => {
        // event.target.parentNode.remove()
        noList.parentNode.remove(event)
      })
    })
    }
    document.querySelector('form').reset()
  })

  uList.addEventListener('click', () => {
      
      if(event.target.style.textDecoration === 'line-through'){
        event.target.style.textDecoration = 'none'
      }else{
        event.target.style.textDecoration = 'line-through'
      }
  })
}
