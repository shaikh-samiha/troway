// GET /api/stats -> return pilot stats
module.exports = function (db) {
  const router = require('express').Router();

  router.get('/', (req, res) => {
    const rows = db.prepare('SELECT key, value FROM stats').all();
    const out = {};
    rows.forEach(r => out[r.key] = r.value);
    res.json({ ok: true, stats: out });
  });

  return router;
};
