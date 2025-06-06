const notes = [
  {
    id: 0,
    text: 'Hi there!',
    user: 'Amando',
    added: new Date().toLocaleString(),
    color: 2,
  },
  {
    id: 1,
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleString(),
    color: 0,
  },
  {
    id: 2,
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleString(),
    color: 0,
  },
  {
    id: 3,
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleString(),
    color: 0,
  },
  {
    id: 4,
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleString(),
    color: 0,
  },
  {
    id: 5,
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleString(),
    color: 0,
  },
  {
    id: 6,
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleString(),
    color: 0,
  },
  {
    id: 7,
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleString(),
    color: 0,
  },
  {
    id: 8,
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleString(),
    color: 0,
  },
  {
    id: 9,
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleString(),
    color: 0,
  },
  {
    id: 10,
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleString(),
    color: 0,
  },
  {
    id: 11,
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleString(),
    color: 0,
  },
  {
    id: 12,
    text: 'Hello World Test!',
    user: 'Charles',
    added: new Date().toLocaleString(),
    color: 0,
  },
];

function getNotesPage(page = 1, limit = 12) {
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
  notes, getNotesPage, getNote, addNote,
};
