
const path = require('path');
const express = require('express');
const router = express.Router();


  router.get('/notes', (req, res) => {
    console.log('Request received at', req.url);
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });
  
  router.get('*', (req, res) => {
    console.log('Request received at', req.url);
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  
module.exports = router