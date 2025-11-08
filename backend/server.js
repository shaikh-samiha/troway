// server.js - main entry
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const initSqlPath = path.join(__dirname, 'db', 'init.sql');
const dbFile = path.join(__dirname, 'db', 'database.sqlite');

// ensure db folder exists
if (!fs.existsSync(path.join(__dirname, 'db'))) {
  fs.mkdirSync(path.join(__dirname, 'db'));
}

// initialize DB (create file if first run)
const firstRun = !fs.existsSync(dbFile);
const db = new sqlite3.Database(dbFile, (err) => {
  if (err) return console.error(err.message);
  if (firstRun && fs.existsSync(initSqlPath)) {
    const sql = fs.readFileSync(initSqlPath, 'utf-8');
    db.exec(sql, (err) => {
      if (err) console.error(err.message);
      else console.log('[db] initialized with init.sql');
    });
  }
});

const app = express();
app.use(cors());
app.use(express.json());

// simple health
app.get('/api/health', (req, res) => res.json({ ok: true }));

// mount routes (pass sqlite3 db)
app.use('/api/contact', require('./routes/contact')(db));
app.use('/api/waitlist', require('./routes/waitlist')(db));
app.use('/api/stats', require('./routes/stats')(db));
app.use('/api/blogs', require('./routes/blogs')(db));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Troway backend running on http://localhost:${PORT}`));
