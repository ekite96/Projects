import api from './APIClient.js';

const loginButton = document.querySelector('#login');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

const errorBox = document.querySelector('#errorbox');


loginButton.addEventListener('click', e => {

  errorBox.classList.add("hidden");

  api.login(username.value, password.value).then(userData => {
    document.location = "/";
  }).catch((err) => {
    errorBox.classList.remove("hidden");
    if(err.status === 401) {
      errorBox.innerHTML = "Invalid username or password";
    }
    else {
      errorBox.innerHTML = err;
    }
  });
});
