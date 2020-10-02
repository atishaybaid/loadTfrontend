const express = require('express');
const app = express();
const path = require('path');
const publicDirectory = path.join(__dirname, '/page');

const json = require('body-parser');

// app.use(json());
app.use(express.json());



app.use(express.static(publicDirectory));

app.get('', (req, res) => {
    res.sendFile(publicDirectory + '/index.html');
})

app.listen(4400, () => {
    console.log("App on port 4400");
})