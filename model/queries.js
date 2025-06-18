require('dotenv').config();
const pool = require('./pool');

async function getAllNotes(page, limit = 12) {
  const offset = (page - 1) * limit;
  const { rows } = await pool.query('SELECT * FROM notes ORDER BY added DESC LIMIT $1 OFFSET $2', [limit, offset]);
  return rows;
}

async function getTotalPages(limit = 12) {
  const { rows } = await pool.query('SELECT COUNT(*) FROM notes');
  const count = parseInt(rows[0].count, 10);
  return Math.ceil(count / limit);
}

async function getNote(id) {
  const { rows } = await pool.query("SELECT id, username, TO_CHAR(added, 'Mon DD, YYYY HH12:MI AM TZ') added, color FROM notes WHERE id = $1", [id]);
  return rows[0];
}

async function postNote(note) {
  await pool.query(
    'INSERT INTO notes (text, username, color) VALUES ($1, $2, $3)',
    [note.text, note.username, note.color],
  );
}

module.exports = {
  getAllNotes,
  postNote,
  getTotalPages,
  getNote,
};
