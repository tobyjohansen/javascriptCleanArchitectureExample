const bcrypt = require("bcrypt");

const IHashing = require("../../application/service_interfaces/IHashing");

class Hashing extends IHashing {

    constructor() {
        super();
    }
    
    hashPassword(password) {
        return bcrypt.hash(password, 10);
    }

    comparePassword(password, hashedPassword) {
        return bcrypt.compare(password, hashedPassword);
    }
}

module.exports = Hashing;

