class Authenticate {
    login(username, password) {
        return (username === "admin" && password === "1234")
    }
}

module.exports = Authenticate;