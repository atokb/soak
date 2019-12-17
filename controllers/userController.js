const userModel = require("../models/userModels.js");

function findUser(req, res) {
    var email = req.query.email;
    var password = req.query.password;

    userModel.getUser(email, password, function(error, results) {
        res.json(results);
    });

    if (request.body.email == email && request.body.password == password) {
        request.session.user = request.body.email;
        result = { success: true };
    }

    response.json(result);

}

function registerUser(req, res) {

    var email = req.query.email;
    var password = req.query.password;
    var firstname = req.query.first_name;
    var lastname = req.query.last_name;

    userModel.registerUser(email, password, firstname, lastname, function(error, results) {
        res.json(results);
    });
}

module.exports = {
    findUser: findUser
}