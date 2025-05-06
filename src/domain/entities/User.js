class User {

    // # = private and is needed for Javascript
    #id
    #password
    #username
    #email
    #createdAt

    constructor(username, password, email) {
        this.#username = username;
        this.#password = password;

        //checks if email is valid/contains @
        if (!email.includes("@")) {
            throw new Error("Invalid email/does not contain @");
        }
        this.#email = email;

        //Generate random id
        this.#id = Math.random().toString(36).substring(2, 9);


        this.#createdAt = new Date();
    }

    get profile() {
        return {
            id: this.#id,
            username: this.#username,
            password: this.#password,
            email: this.#email,
            createdAt: this.#createdAt
        }
    }

    get id() {
        return this.#id;
    }

    get password() {
        return this.#password;
    }

    get username() {
        return this.#username;
    }

    get email() {
        return this.#email;
    }

    get createdAt() {
        return this.#createdAt;
    }

    
}

module.exports = User