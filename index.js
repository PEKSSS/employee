
const content = document.querySelector('#content');

window.addEventListener('load', () => {
    getUsers();
})

function getUsers() {

    let html="";
    let count = 1;
    //FETCH API
    fetch('https://api.sampleapis.com/beers/ale', {mode: 'cors'})

    .then(response =>{
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(data);
        data.forEach(element => {
            html += `<li>${count++} - ${element.id} ${element.name}</li>`;
        })
        content.innerHTML = html;
    })
    .catch(error => {
        console.error('Error fetching users:', error);
    })


}

