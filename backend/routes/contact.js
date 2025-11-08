// POST /api/contact
const { body, validationResult } = require('express-validator');

module.exports = function (db) {
  const router = require('express').Router();

  router.post('/',
    [
      body('name').trim().isLength({ min: 1 }).withMessage('Name required'),
      body('email').isEmail().withMessage('Valid email required'),
      body('message').trim().isLength({ min: 1 }).withMessage('Message required')
    ],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

      const { name, email, message } = req.body;
      const stmt = db.prepare('INSERT INTO contacts (name,email,message) VALUES (?,?,?)');
      const info = stmt.run(name, email, message);

      return res.json({ ok: true, id: info.lastInsertRowid });
    }
  );

  return router;
};
