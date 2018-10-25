const faker = require('faker');

const createUsers = () => {
    const users = [];
    let i = 0;
    while (i < 50) {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        if(!users.find(user => user.userName === firstName)) {
            users.push({
                firstName,
                lastName, 
                userName: firstName, 
                password: lastName,  
                email: `${firstName}.${lastName}@email.com`
            });
            i++;
        }
    }
    return users;
}

module.exports = {
    createUsers
}