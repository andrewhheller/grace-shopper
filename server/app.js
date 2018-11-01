
const path = require('path');
const bodyParser = require('body-parser')
const express = require('express');
const app = express();

module.exports = app;

// body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// static resources
app.use("/public", express.static(path.join(__dirname, '..', 'public')));
app.use(express.static(path.join(__dirname, '..', 'dist')));

// api middleware
app.use("/api", require('./api'));

// main routes
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

// error handling
app.use((err, req, res, next) => {
    console.error(err, typeof next)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
});
