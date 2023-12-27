const path = require('path');
const fs = require('fs');
let uuid = require('uuid');
const express = require('express');
const router = express.Router();

console.log("API ROUTE IS HIT!")

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../db/db.json'));
});

router.post('/api/notes', (req, res) => {
  try {
    let db = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf-8');
    console.log('Read from db.json:', db);

    db = JSON.parse(db);

    let userWrite = {
      title: req.body.title,
      text: req.body.text,
      ID: uuid.v4()
    };

    db.push(userWrite);

    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(db, null, 2));
    console.log('Write to db.json:', JSON.stringify(db, null, 2));

    res.json(db);
  } catch (error) {
    console.error('Error handling POST request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

// look into mini-project helper for readfile sync