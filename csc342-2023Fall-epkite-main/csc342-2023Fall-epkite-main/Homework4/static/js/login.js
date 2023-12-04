import api from './APIClient.js';

const input = document.querySelector('#username');
const button = document.querySelector('#login');
button.addEventListener('click', e =>{
    console.log(input.value);
    api.login(input.value).then(user => {
        console.log(user.username + " back in login.js");
        sessionStorage.setItem('username', user.username);
        document.location = "/home"
    }).catch((err) => {
        alert("Invalid Username!");
      });
});