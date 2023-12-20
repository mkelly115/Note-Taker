const path = require('path');
const fs = require('fs');
let uuid = require('uuid');
const express = require('express');
const router = express.Router();

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../db/db.json'));
});

router.post('/api/notes', (req, res) => {
  let db = fs.readFileSync(path.join(__dirname, '../db/db.json'));
  db = JSON.parse(db);

  let userWrite = {
    title: req.body.title,
    text: req.body.text,
    ID: uuid()
  };

  db.push(userWrite);

  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(db));
  res.json(db);
});

module.exports = router;