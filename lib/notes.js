const fs = require("fs");
const path = require("path");

function saveNewNote(body, notesArray) {
    // add the note to the notesArray
    const note = body;
    notesArray.push(note);

    // rewrite db.json
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );

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