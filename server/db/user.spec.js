const expect = require('chai').expect;
const db = require('./index');
const { User } = db.models;

describe('User Model', () => {

    beforeEach(() => {
        return db.sync()
            .then(() => {
                return Promise.all([
                    User.create({ firstName: "Moe", lastName: "Smith", userName: "moe", password: "smith", email: "moe@email.com"}),
                    User.create({ firstName: "Larry", lastName: "Davis", userName: "larry", password: "davis", email: "larry@email.com"}),
                    User.create({ firstName: "Curly", lastName: "Johns", userName: "curly", password: "johns", email: "curly@email.com", isAdmin: true}),
                ]);
        })
    });

    it('Has 3 users', () => {
        return User.findAll()
            .then(users => expect(users.length).to.equal(3));
    });

    it('isAdmin is set to false by default', () => {
        return User.findOne({ where: { firstName: "Moe" } })
            .then(user => expect(user.isAdmin).to.equal(false)); 
    });

    it('Throws error if firstName, lastName, username, password, email is null', () => {
        return User.create({})
            .catch(error => {
                expect(error.errors[0].message).to.equal("user.firstName cannot be null");
                expect(error.errors[1].message).to.equal("user.lastName cannot be null");
                expect(error.errors[2].message).to.equal("user.userName cannot be null");
                expect(error.errors[3].message).to.equal("user.password cannot be null");
                expect(error.errors[4].message).to.equal("user.email cannot be null");
            });
    });

    it('Throws error if firstName, lastName, username, password, email is empty', () => {
        return User.create({ firstName: "", lastName: "", userName: "", password: "", email: ""})
            .catch(error => {
                expect(error.errors[0].message).to.equal("Validation notEmpty on firstName failed");
                expect(error.errors[1].message).to.equal("Validation notEmpty on lastName failed");
                expect(error.errors[2].message).to.equal("Validation notEmpty on userName failed");
                expect(error.errors[3].message).to.equal("Validation notEmpty on password failed");
                expect(error.errors[4].message).to.equal("Validation notEmpty on email failed");
            });
    });

    it('Throws error if username is not unique', () => {
        return User.create({ firstName: "Moe", lastName: "Smith", userName: "moe", password: "smith", email: "moe.smith@email.com"})
            .catch(error => expect(error.errors[0].message).to.equal("userName must be unique"));
    });

    it('Throws error if email is not unique', () => {
        return User.create({ firstName: "Moe", lastName: "Smith", userName: "moe.smith", password: "smith", email: "moe@email.com"})
            .catch(error => expect(error.errors[0].message).to.equal("email must be unique"));
    });

    it('Throws error if email is invalid', () => {
        return User.create({ firstName: "John", lastName: "Doe", userName: "john.doe", password: "john", email: "john"})
            .catch(error => expect(error.errors[0].message).to.equal("Validation isEmail on email failed"));
    });

});