class User {
    constructor(name, email, dob, image) {
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.image = image
    }
}

const createUser = (name, email, dob, image) => new User(name, email, dob, image);
export default createUser;