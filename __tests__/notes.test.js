const {saveNewNote, validateNote, findNoteById} = require("../lib/notes");
const notes = require("../db/db.json");


test("saveNewNote creates a new note and adds it to the notes array", () => {
    console.log(notes);

    const note = saveNewNote(
        {title:"Test Title", text:"Test text", id: "test_id"},
        notes
    );

    expect(note.title).toBe("Test Title");
    expect(note.text).toBe("Test text");
    expect(note.id).toBe("test_id");
})

test("validates note", () => {
  const validNote = {
    id: "valid_note",
    title: "Valid Title",
    text: "valid text",
  };
  const invalidNote = {
    title: "Valid Title"
  };

  const validResult = validateNote(validNote);
  const invalidResult = validateNote(invalidNote);

  expect(validResult).toBe(true);
  expect(invalidResult).toBe(false);
});

test("loads note by id", () => {
    saveNewNote(
        {title:"Test Title", text:"Test text", id: "test_id"},
        notes
    );

    const loadedNote = findNoteById("test_id", notes);

    expect(loadedNote.title).toBe("Test Title");
    expect(loadedNote.text).toBe("Test text");
    expect(loadedNote.id).toBe("test_id");
})