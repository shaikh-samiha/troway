// GET /api/blogs -> list small set of blog posts
module.exports = function (db) {
  const router = require('express').Router();

  router.get('/', (req, res) => {
    const rows = db.prepare('SELECT id, title, excerpt, url, created_at FROM blogs ORDER BY created_at DESC LIMIT 6').all();
    res.json({ ok: true, data: rows });
  });

  return router;
};
