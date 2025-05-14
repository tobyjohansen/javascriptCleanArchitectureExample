const User = require("../../domain/entities/User");

class LoginUser {

    constructor(userRepository, authService, hashingService) {
        this.userRepository = userRepository;
        this.authService = authService;
        this.hashingService = hashingService;
    }

    async execute(username, password) {

        // Get user
        const user = await this.userRepository.findByUsername(username);
        if (!user) throw new Error("User not found.");

        // Check password
        const isPasswordValid = await this.hashingService.comparePassword(password, user.password);
        if (!isPasswordValid) throw new Error("Invalid password.");

        // Generate token
        const token = this.authService.generateToken(user.username);

        return token;
    }
}

module.exports = LoginUser