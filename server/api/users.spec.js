const expect = require('chai').expect;
const supertest = require('supertest');
const app = supertest(require('../app'));
const db = require('../db');
const { User } = db.models;

describe('User Routes - /api/users/', () => {

    beforeEach(() => {
        return db.sync()
            .then(() => {
                return Promise.all([
                    User.create({ firstName: "Moe", lastName: "Smith", userName: "moe", password: "smith", email: "moe@email.com"}),
                    User.create({ firstName: "Larry", lastName: "Davis", userName: "larry", password: "davis", email: "larry@email.com"}),
                    User.create({ firstName: "Curly", lastName: "Johns", userName: "curly", password: "johns", email: "curly@email.com", isAdmin: true}),
                ]);
        });
    });

    it('Gets all users', () => {
        return app.get('/api/users')
            .expect(200)
            .then(response => {
                expect(response.text).to.contain('Moe');
                expect(response.text).to.contain('Larry');
                expect(response.text).to.contain('Curly');
            });
    });

    it('Gets user by id', () => {
        return User.findOne({ where: { firstName: "Moe" } })
            .then(user => {
                return app.get(`/api/users/${user.id}`)
                    .expect(200)
                    .then(response => {
                        expect(response.text).to.contain('Moe');
                        expect(response.text).to.not.contain('Larry');
                        expect(response.text).to.not.contain('Curly');
                    });
            });
    });

    it('Posts creates new user', () => {
        return app.post('/api/users')
            .send({ firstName: "John", lastName: "Doe", userName: "john.doe", password: "john", email: "john.doe@email.com"})
            .expect(201)
            .then(response => {
                expect(response.text).to.contain('John');
            });
    });

    it('Put updates user by id', () => {
        return User.findOne({ where: { firstName: "Moe" } })
            .then(user => {
                expect(user.isAdmin).to.equal(false);
                return app.put(`/api/users/${user.id}`)
                    .send({ isAdmin: true })
                    .expect(200)
                    .then(response => {
                        expect(response.text).to.contain('Moe');
                        expect(response.text).to.contain(`"isAdmin":true`);
                    });
            });
    });

    it('Delete removes user by id', () => {
        return User.findOne({ where: { firstName: "Moe" } })
            .then(user => {
                return app.delete(`/api/users/${user.id}`)
                    .expect(204)
                    .then(() => {
                        return app.get('/api/users')
                            .expect(200)
                            .then(response => {
                                expect(response.text).to.not.contain('Moe');
                                expect(response.text).to.contain('Larry');
                                expect(response.text).to.contain('Curly');
                            });
                    });
            });
    });

});