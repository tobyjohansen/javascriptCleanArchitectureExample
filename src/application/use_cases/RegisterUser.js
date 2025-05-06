const User = require("../../domain/entities/User");

class RegisterUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(username, password, email) {

        //Runst findByUserName to check if user already exists
        const existing = await this.userRepository.findByUsername(username);
        if (existing) throw new Error("User already exists.");


        //Create user and save the user
        const user = new User(username, password, email);
        await this.userRepository.save(user);
        

        return user.profile;

    }
}

module.exports = RegisterUser;