const list = document.querySelector('#list')
const form = document.querySelector('#form')
const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const apiURL = "https://sleepy-eyrie-67463.herokuapp.com"


//somehow tranform these into crud actions that call the database
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const text = input.value
    const li = document.createElement('li')
    li.className ='list-item'
    li.textContent = text;
    list.appendChild(li)
    input.value = "";
})

//post fetch
form.addEventListener('submit', async(e) =>{
    e.preventDefault();
    // const jsonDa
    const data = input.value
    const addData = await fetch(apiURL + '/tasks', {
        method: 'POST'
    }).then(function (response) {
        // The API call was successful!
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        // This is the JSON from our response
        console.log(data);
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
})





// get all fetch

// get 1 fetch

//put fetch

//delete all fetch