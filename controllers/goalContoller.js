const goalModels = require('../models/goalModels');


function getGoal(req, res) {
    const goalId = req.query.goalId;
    getGoalfromDB(goalId, function(error, result) {
        if (error || result == null || result.length != 1) {
            res.status(500).json({ success: false, data: error });
        } else {
            const goal = result[0];
            res.status(200).json(goal);
        }
    });
}

function getGoalfromDB(goalId, callback) {
    console.log("Getting goal: " + goalId);
    const sql = "SELECT goalId, goal FROM goal";
    const params = [goalId];
    pool.query(sql, params, function(err, result) {
        if (err) {
            console.log("Error in query: ")
            console.log(err);
            callback(err, null);
        }

        console.log("Found result: " + JSON.stringify(result.rows));
        callback(null, result.rows);
    });

}

function postGoal() {

}

module.exports = {
    getGoal: getGoal,
    getGoalfromDB: getGoalfromDB
};