const bcrypt = require("bcrypt");
const User = require("../../domain/entities/User");

const IUserRepository = require("../../application/repository_interfaces/IUserRepository");

class InMemoryUserRepository extends IUserRepository {
    constructor() {
        super(); // calls the constructor of the parent class (IUserRepository)
        this.users = []; // array to store users
    }

    async save(user) {

        // Add bcrypt hashing
        const hashedPassword = await bcrypt.hash(user.password, 10);

        // Create a new User object
        const userObj = new User(user.username, hashedPassword, user.email);
        console.log("User created:", userObj.profile);

        this.users.push(userObj); // add user to array¨
    }

    async findByUsername(username) {
        return this.users.find(user => user.username === username); // find user by username
    }
}

module.exports = InMemoryUserRepository;