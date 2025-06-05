const { Router } = require('express');

const indexRouter = Router();
const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date().toLocaleString(),
    color: 2,
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleString(),
    color: 0,
  },
];

indexRouter.get('/', (req, res) => res.render('index', { title: 'Mini Messageboard', messages }));
indexRouter.get('/new', (req, res) => res.render('form'));
indexRouter.get('/open/:user', (req, res) => {
  const { user } = req.params;
  res.render('message', { message: messages[user] });
});

indexRouter.post('/new', (req, res) => {
  const text = req.body.messageText;
  messages.push(
    {
      text: text.toLowerCase(),
      user: req.body.messageUser,
      added: new Date().toLocaleString(),
      color: req.body.noteColor,
    },
  );
  res.redirect('/');
});

module.exports = { indexRouter };
