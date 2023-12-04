const express = require('express');
const apiRouter = express.Router();


let howls = require('./data/howls.json');
let users = require('./data/users.json');
let followers = require('./data/follows.json');

let currentUser = "";
/************\
* API ROUTES *
\************/

apiRouter.use(express.json());

apiRouter.get('/user', (req, res) => {
    res.json(currentUser);
});

apiRouter.get('/user/:userID', (req, res) => {
    let id = req.params.userID;
    let user = users.find(user => user.id == id);
    res.json(user);
});

apiRouter.get('/user/:userID/howls', (req, res) => {
    let id = req.params.userID;
    const results = howls.filter(howl => howl.userId == id);
    res.json(results);
});

apiRouter.get('/:userID/howls', (req, res) => {
    let id = req.params.userID;
    let follows = Object.values(followers);
    const followList = follows.find(follow => follow.userId == id);
    let matching = [];
    for (const ids of followList.following){
        for (const howl of howls){
            if(howl.userId == ids){
                matching.push(howl);
            }
        }
    }
    res.json(matching);
});

apiRouter.post('/user/new', (req, res) => {
    let user = users.find(user => user.username == currentUser.username);
    let currentdate = new Date(); 
    let datetime = currentdate.getFullYear().toString().padStart(2, '0') + "-"
                + (currentdate.getMonth()+1).toString().padStart(2, '0')  + "-" 
                + currentdate.getDate().toString().padStart(2, '0') + "T"  
                + currentdate.getHours().toString().padStart(2, '0') + ":"  
                + currentdate.getMinutes().toString().padStart(2, '0') + ":" 
                + currentdate.getSeconds().toString().padStart(2, '0') + "Z";
    let newHowl = {
        "id" : howls.length + 2,
        "userId" : user.id,
        "datetime" : datetime,
        "text" : req.body.text
    }
    howls.push(newHowl);
    res.json(howls);
});

apiRouter.post('/login', (req, res) => {
    let username = req.body.username;
    let user = users.find(user => user.username == username);
    if(user){
        currentUser = user;
        res.json(user);
    } else{
        res.status(404);
    }
});

module.exports = apiRouter;