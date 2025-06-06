const { Router } = require('express');
const { getNotesPage, getNote, addNote, getTotalPages } = require('../model/noteModal');

const newNoteRouter = Router();

newNoteRouter.get('/', (req, res) => res.render('form'));

newNoteRouter.post('/', (req, res) => {
  const text = req.body.messageText.trim().toLowerCase();
  const user = req.body.messageUser.trim();
  const info = {
    text,
    user,
    color: req.body.noteColor,
  };
  addNote(info);
  res.redirect('/');
});

function showNote(req, res) {
  const id = parseInt(req.query.user, 10);
  const note = getNote(id);
  res.render('note', { note });
}

function showNotes(req, res) {
  const page = parseInt(req.query.page, 10) || 1;
  const notes = getNotesPage(page);
  const totalPages = getTotalPages();
  res.render('index', { notes, page, totalPages });
}
module.exports = { showNotes, showNote, newNoteRouter };
