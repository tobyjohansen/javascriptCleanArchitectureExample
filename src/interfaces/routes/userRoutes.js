const express = require("express");
const router = express.Router();


// Use cases
const RegisterUser = require("../../application/use_cases/RegisterUser");
const GetUserProfile = require("../../application/use_cases/GetUserProfile");
const LoginUser = require("../../application/use_cases/LoginUser");


// Services
const Hashing = require("../../infrastructure/services/Hashing");
const Auth = require("../../infrastructure/services/Auth");

// Repositories
const InMemoryUserRepository = require("../../infrastructure/db/InMemoryUserRepository");

// Controllers
const UserController = require("../../interfaces/controllers/UserController");


// Dependencies
const hashingService = new Hashing();
const authService = new Auth();

const userRepository = new InMemoryUserRepository(hashingService);

const registerUserUseCase = new RegisterUser(userRepository);
const getUserProfileUseCase = new GetUserProfile(userRepository);
const loginUseCase = new LoginUser(userRepository, authService, hashingService);
const userController = UserController(registerUserUseCase, getUserProfileUseCase, loginUseCase);

router.post("/register", userController.register);
router.get("/profile/:username", userController.getProfile);
router.post("/login", userController.login);

module.exports = router;