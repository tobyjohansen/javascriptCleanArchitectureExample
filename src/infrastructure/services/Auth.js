const jwt = require("jsonwebtoken");

const IAuth = require("../../application/service_interfaces/IAuth");

class Auth extends IAuth {

    constructor() {
        super();
    }

    generateToken(username, role) {
        return jwt.sign({ username, role }, "secret", { expiresIn: "1h" }); 
    }
}

module.exports = Auth;