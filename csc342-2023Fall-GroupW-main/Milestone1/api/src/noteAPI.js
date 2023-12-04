const express = require('express');
const noteRouter = express.Router();

noteRouter.use(express.json());

//Get notes from following
noteRouter.get('/notes/:user/following', (req, res) => {
    res.json();
});

//Get trending notes
noteRouter.get('/notes/trending', (req, res) => {
    res.json();
});

//Get note from search keyword
noteRouter.get('/notes/:search', (req, res) => {
    res.json();
});

//Get individual note
noteRouter.get('/notes/:noteID', (req, res) => {
    res.json();
});

//Create new note
noteRouter.post('/notes/:userID', (req, res) => {
    res.json();
});

//Edit note
noteRouter.put('/notes/:noteID', (req, res) => {
    res.json();
});

module.exports = noteRouter;