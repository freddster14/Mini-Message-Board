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

function getNotesPage(page = 1, limit = 12) {
  if (page > getTotalPages()) throw new Error('Unknown Page');
  if (notes.length <= 12) return notes;
  const end = notes.length - ((page - 1) * limit);
  const start = (end > 12) ? end - limit : 0;
  return notes.slice(start, end);
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
  notes, getNotesPage, getNote, addNote, getTotalPages,
};
