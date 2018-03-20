import createUser from '../entities/User';

class Users {
    getData() {
        return fetch('https://randomuser.me/api/?results=15')
        .then(response => response.json())
        .then(result => result.results.map(user => createUser(user.name.first, user.email, user.dob, user.picture.thumbnail)))
    }
}

const users = new Users();

export default users;