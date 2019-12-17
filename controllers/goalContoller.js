const goalModels = require("../models/goalModels");


function getGoals(req, res) {
    goalModels.getAllGoals(function(error, results) {
        res.json(results);
    });
}


module.exports = {
    getGoals: getGoals,
};