document.addEventListener('DOMContentLoaded', () => {
    function addTextMaterial () {
        let list = document.getElementById('add').value
        // accessing already created ul
        let addlist = document.getElementById('List')
        // Create new item to the browser/DOM
        let li = document.createElement('li')
        p = document.getElementById('errorTag')
        li.textContent = list
        addlist.appendChild(li)
        if (list === '') {
            p.textContent = 'error, content can\'t be empty'
        }
    }
    const form = document.getElementById('form')
    let addlist = document.getElementById('List')
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        addTextMaterial()
    });
    addlist.addEventListener('click', (elem)=>{
        if (elem.target.style.textDecoration === "line-through") {
            elem.target.style.textDecoration = "none"
        } else {
            elem.target.style.textDecoration = "line-through"
        }
    })
});
