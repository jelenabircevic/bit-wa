class User {
    constructor(name, lastName, email, dob, image) {
        this.name = name;
        this.fullName = `${name} ${lastName}`
        this.email = this.hideEmail(email);
        this.dob = this.birthday(dob);
        this.image = image;
    }

    hideEmail(input) {
        const eArr = input.split('@');
        return `${eArr[0].substring(0, 3)}...${eArr[0].substring(eArr[0].length - 3)}@${eArr[1]}`
    }

    birthday(input) {
        const date = new Date(input);
        return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
    }
}

const createUser = (name, lastName, email, dob, image) => new User(name, lastName, email, dob, image);
export default createUser;