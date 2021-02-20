document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('#todo_list_form');
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        let todo = document.querySelector('#todo_list')
        let input = document.querySelector('#add_to_todo_list');
        let item = input.value;
        let li = document.createElement('li');
        li.classList.add('list_item');
        li.textContent = item;
        todo.appendChild(li);
        input.value = '';
    })
});