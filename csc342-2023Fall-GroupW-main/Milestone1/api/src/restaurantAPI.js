const express = require('express');
const restRouter = express.Router();

restRouter.use(express.json());

//Get restaurant details
restRouter.get('/restaurants/:restID', (req, res) => {
    res.json();
});

//Get restaurant notes
restRouter.get('/restaurants/:restID/notes', (req, res) => {
    res.json();
});

//Get restaurant reviews
restRouter.get('/restaurants/:restID/reviews', (req, res) => {
    res.json();
});

module.exports = restRouter;