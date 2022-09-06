const list = document.querySelector('#list')
const form = document.querySelector('#form')
const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const apiURL = "https://sleepy-eyrie-67463.herokuapp.com"


//somehow tranform these into crud actions that call the database
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const text = input.value

//     input.value = "";
// })

//post fetch
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = input.value
    const li = document.createElement('li')
    li.className = 'list-item'
    li.textContent = text;
    list.appendChild(li)
    input.value = "";
    const body = { description: `${text}` };
    const response = await fetch(apiURL + '/task', {
        method: 'POST',
        body: JSON.stringify(text)
    })
        .then((response) => response.json())
        .then((body) => {
            // This is the JSON from our response
            console.log(body);
        })
        .catch((error) => {
            // There was an error
            console.error(error.message);
        });

});







// get all fetch

// get 1 fetch

//put fetch

//delete all fetch