const path = require('path');
const express = require('express');
const app = express();

module.exports = app;

app.use(express.json());
app.use("/dist", express.static(path.join(__dirname, "dist")));
app.use("/api", require('./api'));

