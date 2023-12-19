const path = require('path');
const fs = require('fs');
let uuid = require('uuid')

module.exports = (app) => {

app.get('/api/notes',(req, res) => {
    res.sendFile(path.join(__dirname, 'db/db.json'));
})

app.post('/api/notes', (req, res) => {
    let db = fs.readFileSync('db/db.json');
    db = JSON.parse(db)

    let userWrite = {
        title: req.body.title,
        text: req.text.title,
        ID: uuid()
    }

    db.push(userWrite);
    
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);
});

}