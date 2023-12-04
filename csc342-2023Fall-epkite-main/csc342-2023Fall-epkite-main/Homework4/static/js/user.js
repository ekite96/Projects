import api from './APIClient.js';


api.getCurrentUser().then(user => {
    fillHeaderHTML(user);

    api.getUserHowls(user.id).then(howls => {
        howls = sortHowls(howls);
        updateHowls(howls);
    });
});
function sortHowls(howls) {
    return howls.sort(function(a, b) {
        var x = a["datetime"];
        var y = b["datetime"];
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
      });
}

function fillHeaderHTML(user) {
    const userheader = document.getElementById("user-header");
    const header = document.createElement('div');
    header.setAttribute("class", "header-text")
    const name = document.createElement('a');
    const image = document.createElement('img');

    name.innerHTML = "@" + user.username;
    name.href = '/user';

    image.setAttribute("src", user.avatar);
    image.setAttribute("id", "profile-image");

    header.append(image);
    header.append(name);

    userheader.append(header);

    const bodyHeader = document.getElementById("body-header");
    const pageHeader = document.createElement('h5')
    const pageImage = document.createElement('img');

    pageHeader.innerHTML = user.first_name + " " + user.last_name + "\n" + "@" + user.username;

    pageImage.setAttribute("src", user.avatar);
    pageImage.setAttribute("id", "profile-image");

    bodyHeader.appendChild(pageImage);
    bodyHeader.appendChild(pageHeader);
}

function updateHowls(howls) {
    resetHowls();
    fillHowlsHTML(howls);
}

function resetHowls(howls){
    const howlsList = document.getElementById('howls');
    howlsList.innerHTML = '';
}

function fillHowlsHTML(howls) {
    const howlsList = document.getElementById('howls');
    howls.forEach(howl => {
        howlsList.append(createHowlHTML(howl));
    });
}

function createHowlHTML(howl){
    const container = document.createElement('div');
    container.setAttribute("class", "post-container");

    api.getUserByID(howl.userId).then(user=> {

    const header = document.createElement('div');
    header.setAttribute("class", "post-header");

    const image = document.createElement('img');
    image.setAttribute("id", "post-image");
    image.setAttribute("src", user.avatar);

    const postuser = document.createElement('div');
    postuser.setAttribute("class", "post-user");

    const name = document.createElement('p');
    name.innerHTML = user.first_name + " " + user.last_name;

    const username = document.createElement('p');
    username.innerHTML = "@" + user.username;

    const time = document.createElement('div');
    time.setAttribute("class", "time");
    time.innerHTML = convertISOToNormalDate(howl.datetime);

    postuser.appendChild(name);
    postuser.appendChild(username);

    header.appendChild(image);
    header.appendChild(postuser);
    header.appendChild(time);

    const text = document.createElement('div')
    text.setAttribute("class", "post-body");
    text.innerHTML = howl.text;

    container.appendChild(header);
    container.appendChild(text);
    });
    return container;
}

function convertISOToNormalDate(isoDateString) {
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  
    const normalDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return normalDate;
  }