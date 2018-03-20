class User {
    constructor(name, email, dob, image) {
        this.name = name;
        this.email = this.hideEmail(email);
        this.dob = dob;
        this.image = image
    }

    hideEmail(input) {
        const eArr = input.split('@');
        return `${eArr[0].substring(0, 3)}...${eArr[0].substring(eArr[0].length - 3)}@${eArr[1]}`
    }
}

const createUser = (name, email, dob, image) => new User(name, email, dob, image);
export default createUser;