const { Router } = require('express');
const { showNotes, showNote, newNoteRouter } = require('../controllers/noteController');

const indexRouter = Router();

indexRouter.use('/new', newNoteRouter);
indexRouter.use('/open', showNote);
indexRouter.use('/', showNotes);

module.exports = { indexRouter };
