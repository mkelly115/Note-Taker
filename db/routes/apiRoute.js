const path = require('path');
const fs = require('fs');
let uuid = require('uuid')

module.exports = (app) => {

app.get('/api/notes',(req, res) => {
    res.sendFile(path.join(__dirname, 'db/db.json'));
})


}