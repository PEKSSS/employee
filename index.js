
const content = document.querySelector('#content');

window.addEventListener('load', () => {
    getUsers();
})

function getUsers() {

    let html="";
    let count = 0;
    //FETCH API
    fetch('https://peks-sampleemployeesapi.onrender.com/api/users', {mode: 'cors'})

    .then(response =>{
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(data);
        data.forEach(element => {
            html += `<li>${count++} - ${element.first_name} ${element.last_name}</li>`;
        })
        content.innerHTML = html;
    })
    .catch(error => {
        console.error('Error fetching users:', error);
    })

}