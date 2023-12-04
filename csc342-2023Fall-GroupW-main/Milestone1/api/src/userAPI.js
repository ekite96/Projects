const express = require('express');
const userRouter = express.Router();

userRouter.use(express.json());

//Get all users for authentification
userRouter.get('/users', (req, res) => {
    res.json();
});

//Create new user
userRouter.post('/users/:userID', (req, res) => {
    res.json();
});

//Edit user info
userRouter.put('/notes/:userID', (req, res) => {
    res.json();
});

module.exports = userRouter;