const db = require('./db');

db.sync()
    .then(() => {
        return db.seed();
    })
    .then(() => console.log("Database Sync'ed and Seeded"));