const db = require('./db');
const app = require('./app');
const faker = require('faker');

const PORT = process.env.PORT || 3000;

db.sync()
    .then(() => {
        return db.seed();
    })
    .then(() => console.log("Database Sync'ed and Seeded"))
    .then(() => app.listen(PORT, () => console.log(`Listening on Port ${PORT}`)));