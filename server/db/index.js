const conn = require('./conn');
const User = require('./user');
const { createUsers } = require('./seed');

const sync = () => {
    return conn.sync({ force: true });
}

const seed = () => {
    const users = createUsers();
    return Promise.all(users.map(user => User.create(user)));
}

module.exports = {
    sync,
    seed,
    models: {
        User
    }
}