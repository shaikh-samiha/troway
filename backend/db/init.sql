-- create tables for contacts, waitlist, stats, blogs

CREATE TABLE IF NOT EXISTS contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT,
  message TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS waitlist (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS stats (
  key TEXT PRIMARY KEY,
  value TEXT
);

CREATE TABLE IF NOT EXISTS blogs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  excerpt TEXT,
  url TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insert pilot stats (these match the copy)
INSERT OR REPLACE INTO stats (key, value) VALUES ('households_engaged','500');
INSERT OR REPLACE INTO stats (key, value) VALUES ('participation_rate','80%');
INSERT OR REPLACE INTO stats (key, value) VALUES ('students_trained','400');
INSERT OR REPLACE INTO stats (key, value) VALUES ('grant_raised','₦1000000');

-- sample blog posts
INSERT INTO blogs (title, excerpt, url) VALUES
('How Troway started in Rivers State','Lessons learned from our pilot program in Rivers State','https://medium.com/@troway/post1'),
('Turning Trash to Income','How we created income streams from collected recyclables','https://medium.com/@troway/post2'),
('Community Cleanups That Work','A playbook for local clean waste campaigns','https://medium.com/@troway/post3');
