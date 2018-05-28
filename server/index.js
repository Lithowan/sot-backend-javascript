const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '../public')));

//app.get('/hello', (req, res) => res.send('Hello World! Now with 100% more nodemon!!'));

app.listen(3000, () => console.log('Our app is listening on port 3000!'));

