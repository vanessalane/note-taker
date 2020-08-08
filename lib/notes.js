const fs = require("fs");
const path = require("path");

function saveNewNote(body, notesArray) {
    // define the note
    const note = body;

    // save the note in the notesArray
    notesArray.push(note);

    // rewrite db.json
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );

    // return the note
    return note;
}

function findNoteById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
}

function validateNote(note) {
    if (!note.title) {
        return false;
    }
    if (!note.id) {
        return false;
    }
    if (!note.text) {
        return false;
    }
    return true;
}

module.exports = {
    saveNewNote,
    validateNote,
    findNoteById
};