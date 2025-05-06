const express = require("express");
const router = express.Router();


// Use cases
const RegisterUser = require("../../application/use_cases/RegisterUser");
const GetUserProfile = require("../../application/use_cases/GetUserProfile");


// Repositories
const InMemoryUserRepository = require("../../infrastructure/db/InMemoryUserRepository");

// Controllers
const UserController = require("../../interfaces/controllers/UserController");


// Dependencies
const userRepository = new InMemoryUserRepository();
const registerUserUseCase = new RegisterUser(userRepository);
const getUserProfileUseCase = new GetUserProfile(userRepository);
const userController = UserController(registerUserUseCase, getUserProfileUseCase);

router.post("/register", userController.register);
router.get("/profile/:username", userController.getProfile);

module.exports = router;