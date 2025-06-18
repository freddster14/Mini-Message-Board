const { Router } = require('express');
const db = require('../model/queries');

const newNoteRouter = Router();

newNoteRouter.get('/', (req, res) => res.render('form'));

newNoteRouter.post('/', async (req, res) => {
  const text = req.body.messageText.trim().toLowerCase();
  const username = req.body.messageUser.trim();
  const info = {
    text,
    username,
    color: req.body.noteColor,
  };
  await db.postNote(info);
  res.redirect('/');
});

async function showNote(req, res) {
  const id = parseInt(req.query.user, 10);
  const note = await db.getNote(id);
  res.render('note', { note });
}

async function showNotes(req, res) {
  const page = parseInt(req.query.page, 10) || 1;
  const notes = await db.getAllNotes(page);
  const totalPages = await db.getTotalPages();
  res.render('index', { notes, page, totalPages });
}
module.exports = { showNotes, showNote, newNoteRouter };
