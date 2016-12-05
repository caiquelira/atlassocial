module.exports = function (production) {
    var values = {
        BASE_URL: "",
        AUTH_URL: "auth-service/login",
        PROJECTS_URL: "api/membership",
        PROJECTS_URL: "api/projects",
        USERS_URL: "api/users"
    }
    var BASE_URL = production ? "http://atlassocial.herokuapp.com/" : "http://localhost:8080/"

    Object.keys(values).map(function (key) {
        values[key] = BASE_URL + values[key]
    })
    return values
}
