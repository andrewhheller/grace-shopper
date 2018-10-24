const conn = require('./conn');
const User = require('./user');

const sync = () => {
    return conn.sync({ force: true });
}

const seed = () => {
    return Promise.all([
        User.create({ firstName: "Moe", lastName: "Smith", userName: "moe", password: "smith", email: "moe@email.com"}),
        User.create({ firstName: "Larry", lastName: "Davis", userName: "larry", password: "davis", email: "larry@email.com"}),
        User.create({ firstName: "Curly", lastName: "Johns", userName: "curly", password: "johns", email: "curly@email.com", isAdmin: true}),
    ]);
}

module.exports = {
    sync,
    seed,
    models: {
        User
    }
}