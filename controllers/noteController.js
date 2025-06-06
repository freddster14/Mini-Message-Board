const { getNotesPage, getNote, addNote } = require('../model/noteModal');
const { Router } = require('express');

const newNoteRouter = Router();

function showNotes(req, res) {
  const page = parseInt(req.query.page, 10) || 1;
  const notes = getNotesPage(page);

  res.render('index', { notes, page });
}

function showNote(req, res) {
  const user = parseInt(req.query.user, 10);
  const note = getNote(user);
  res.render('note', { note });
}

newNoteRouter.get('/', (req, res) => res.render('form'));

newNoteRouter.post('/', (req, res) => {
  const text = req.body.messageText;
  const info = {
    text: text.toLowerCase(),
    user: req.body.messageUser,
    color: req.body.noteColor,
  };
  addNote(info);
  res.redirect('/');
});
module.exports = { showNotes, showNote, newNoteRouter };
