const routineModels = require('../models/routineModels');

function getRoutine(req, res) {
    const routineId = req.query.routineID;
}


function getRoutines(req, res) {
    routineModels.getRoutinefromDB(function(err, results) {
        res.json(results);
    });
}

function addRoutine() {
    routineModel.insertNewRoutine(routine_name, routine_instruction, function(err, results) {
        res.json(results);
    });
}

module.exports = {
    getRoutine: getRoutine,
    getRoutines: getRoutines,
    addRoutine: addRoutine
};