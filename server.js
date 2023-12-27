const express = require('express');
const app = express();


const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require('./routes/apiRoute');  
const htmlRoutes = require('./routes/htmlRoute');

app.use('/api', apiRoutes); 
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`Server available at localhost:${PORT}`);
});