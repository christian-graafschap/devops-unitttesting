class Authenticate {
    login(username, password) {
        return (username === "admin" && password === "12345")
    }
}

module.exports = Authenticate;
