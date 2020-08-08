
const router = require('express').Router();
const notes = require('../../db/db.json');
const { saveNewNote, validateNote } = require("../../lib/notes");

router.get('/notes', (req, res) => {
    res.json(notes);
})

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    console.log(notes);
    req.body.id = notes.length.toString();

    // add note to the db.json file
    if (!validateNote(req.body)) {
        res.status(400).send('The note does not have a title and body.');
    } else {
        const note = saveNewNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;