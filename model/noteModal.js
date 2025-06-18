const notes = [
  {
    id: 0,
    text: 'Hi there!',
    user: 'Nat',
    added: new Date().toLocaleString(),
    color: 2,
  },
  {
    id: 1,
    text: 'Hello World!',
    user: 'Freddy',
    added: new Date().toLocaleString(),
    color: 3,
  },
];

function getTotalPages(limit = 12) {
  return Math.ceil(notes.length / limit);
}

function getNote(user) {
  return notes[user];
}

function addNote(note) {
  const newNote = {
    ...note,
    id: notes.length,
    added: new Date().toLocaleString(),
  };
  notes.push(newNote);
}
module.exports = {
  notes, getNote, addNote, getTotalPages,
};
