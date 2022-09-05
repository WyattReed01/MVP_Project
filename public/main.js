const list = document.querySelector('#list')
const form = document.querySelector('#form')
const input = document.querySelector('#input')
const btn = document.querySelector('#btn')


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const text = input.value
    const li = document.createElement('li')
    li.className ='list-item'
    li.textContent = text;
    list.appendChild(li)
    input.value = "";
    console.log(text)
})