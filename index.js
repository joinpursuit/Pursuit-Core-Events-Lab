'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector("#button")
  button.addEventListener('click', addTodo)
})

function addTodo() {
  const input = document.querySelector('#todo-input')
  const todoText = input.value
  const newListItem = document.createElement("li")
  newListItem.innerText = todoText
  const list = document.querySelector('#todo-list')
  list.appendChild(newListItem)
}
