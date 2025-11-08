// POST /api/waitlist
const { body, validationResult } = require('express-validator');

module.exports = function (db) {
  const router = require('express').Router();

  router.post('/',
    [
      body('name').trim().isLength({ min: 1 }).withMessage('Name required'),
      body('email').isEmail().withMessage('Valid email required'),
    ],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

      const { name, email } = req.body;
      const stmt = db.prepare('INSERT INTO waitlist (name,email) VALUES (?,?)');
      const info = stmt.run(name, email);

      return res.json({ ok: true, id: info.lastInsertRowid });
    }
  );

  router.get('/', (req, res) => {
    const rows = db.prepare('SELECT id, name, email, created_at FROM waitlist ORDER BY id DESC LIMIT 200').all();
    res.json({ ok: true, data: rows });
  });

  return router;
};
