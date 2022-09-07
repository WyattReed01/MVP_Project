const list = document.querySelector('#list')
const form = document.querySelector('#form')
const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const apiURL = "https://sleepy-eyrie-67463.herokuapp.com"

//somehow tranform these into crud actions that call the database

//post fetch
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const description = input.value
    input.value = ""
    const dataObj = { description };
    const response = await fetch('http://localhost:3003/task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataObj)
    })
    const data = await response.json()
    appendLi(data[0].description)
});

const appendLi = (data) => {
    const li = document.createElement('li')
    li.className = 'list-item'
    li.textContent = data
    list.appendChild(li)

}


// get all fetch
const getAll = async () => {
    try {
        const response = await fetch('http://localhost:3003/task')
        const data = await response.json()
        console.log(data)
        Object.keys(data).forEach((key)=>{
            appendLi((data[key].description))
        })
        
    } catch (error) {
        console.error(error.message)
    }
}

getAll();
// get 1 fetch

//put fetch

//delete all fetch