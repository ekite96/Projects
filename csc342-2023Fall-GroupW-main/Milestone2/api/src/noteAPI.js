const express = require('express');
const db = require('./db/DBConnection')
const Note = require('./constructors/Note');
const noteRouter = express.Router();
const cookieParser = require('cookie-parser');

noteRouter.use(cookieParser());
noteRouter.use(express.json());
const {TokenMiddleware} = require('./middleware/TokenMiddleware');

//Get notes for user
noteRouter.get('/:userID', TokenMiddleware, (req, res) => {
    const user = req.user;
    let matching = [];
    db.query('SELECT * FROM note WHERE note_userID=?', [user.id]).then(({results}) => {
        for(const line of results) {
            matching.push(line);
        }
        res.json(matching);
    });
});

//Get individual note
noteRouter.get('/:noteID', TokenMiddleware, (req, res) => {
    db.query('SELECT * FROM note WHERE note_id=?', [req.params.noteID]).then(([result]) => {
        res.json(new Note(result[0]));
    });
});

//Create new note
noteRouter.post('/new', TokenMiddleware, (req, res) => {
    const user = req.user;
    db.query('INSERT INTO note (note_userID, note_restID, note_dish, note_rating, note_body) VALUES (?, ?, ?, ?)', 
    [user.id, req.body.restID, req.body.dish, req.body.rating, req.body.body]);
});

//Edit note
noteRouter.put('/:noteID', TokenMiddleware, (req, res) => {
    db.query('UPDATE note SET note_dish=?, note_rating=?, note_body=? WHERE note_id=?', [req.body.dish], [req.body.rating], [req.body.body], [req.body.id]);
});

//Delete note
noteRouter.delete('/:noteID', TokenMiddleware, (req, res) => {
    db.query('DELETE FROM note WHERE note_id=?', [req.params.noteID]);
});

module.exports = noteRouter;