const list = document.querySelector('#list')
const form = document.querySelector('#form')
const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const oneItem = document.querySelector('#oneItem')
const formTwo = document.querySelector('#formTwo')
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
    const arr = await response.json()
    appendLi(arr[0].description)
    edit(arr)
});

const appendLi = (arr) => {
    const li = document.createElement('li')
    li.id = arr.id
    li.className = 'list-item'
    li.textContent = arr.description
    list.appendChild(li)
    clickLi(li.id)
}

const hideMe = () => {
    list.style.display = "none";
}

// get all fetch
const getAll = async () => {
    try {
        const response = await fetch('http://localhost:3003/task')
        const data = await response.json()
        console.log(data)
        Object.keys(data).forEach((key) => {
            const arr = data[key]
            appendLi(arr)
            
        })

    } catch (error) {
        console.error(error.message)
    }
}

getAll();
// get 1 fetch
const clickLi = (li) => {
    const getLi = document.getElementById(li)
    getLi.addEventListener('click', () => {
        console.log('got it')
        oneItem.appendChild(getLi)
        hideMe();
    })
}

//put fetch
const edit = (arr) =>{
    formTwo.addEventListener('submit', async (e)=>{
        e.preventDefault();
        const id = arr.id
        console.log(id)
        const description = input.value
        input.value = ""
        const dataObj = { description };
        const response = await fetch(`http://localhost:3003/task/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataObj)
        })
        const edited = await response.json()
        console.log(arr);
    })
}


//delete all fetch