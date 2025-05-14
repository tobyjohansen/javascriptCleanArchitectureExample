function UserController(registerUserUseCase, getUserProfileUseCase, loginUseCase) {
    return {
        async register(req, res) {
            const { username, password, email } = req.body;

            try {
                const user = await registerUserUseCase.execute(username, password, email);
                res.status(201).json({ id: user.id, username: user.username, email: user.email, createdAt: user.createdAt });
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        },

        async getProfile(req, res) {
            try {
                const profile = await getUserProfileUseCase.execute(req.params.username);
                res.status(200).json(profile);
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        },

        async login(req, res) {
            const { username, password } = req.body;
            try {
                const token = await loginUseCase.execute(username, password);
                res.status(200).json({ token });
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        }
    }
}


module.exports = UserController;