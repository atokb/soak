const connectionString = process.env.DATABASE_URL || 'postgres://zmyiytwypsdsbm:1c5424f812507643f32450b96ab448e7e33db6ce1fd8ce3e004e12239f267829@ec2-107-22-239-155.compute-1.amazonaws.com:5432/dfufvia4as54bp?ssl=true';
const { Pool } = require('pg');
const pool = new Pool({ connectionString: connectionString });

function getRoutineFromDB(callback) {
    let sql = "SELECT * FROM routine";
    let params = [routine];

    pool.query(sql, params, function(err, db_results) {
        if (err) {
            throw err;
        } else {
            let results = {
                success: true,
                list: db_results.rows
            };

            callback(null, results);
        }
    });
}

function getRoutineByID(req, res) {
    let sql = "SELECT * FROM routine WHERE id = $1";
    let id = parseInt(req.params.id);

    pool.query(sql, [id], (err, db_results) => {
        if (err) {
            throw err
        } else {
            let results = {
                success: true,
                list: db_results.rows
            };

            callback(null, results);
        }
    });
}

function insertNewRoutine(routine_name, routine_instruction) {
    let results = {
        success: true,
        routine: { id: id, routine_name: routine_name, routine_instruction: routine_instruction }
    };

    callback(null, results);
}

function createRoutine(req, res) {
    let { routine_name, routine_instruction } = request.body;

    pool.query('INSERT INTO routine (routine_name, routine_instruction) VALUES ($1, $2)', [routine_name, routine_instruction], (err, results) => {
        if (err) {
            throw err;
        }
        response.status(201).send(` routine added with ID: ${result.insertId}`);
    });
}

function updateUser(req, res) {
    const id = parseInt(request.params.id)
    const { routine_name, routine_instruction } = request.body;

    pool.query(
        'UPDATE routine SET routine_name = $1, routine_instruction = $2 WHERE id = $3', [routine_name, routine_instruction, id],
        (err, results) => {
            if (err) {
                throw err;
            }
            response.status(200).send(`routine modified with ID: ${id}`);
        });
}

function deleteUser(req, res) {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM routine WHERE id = $1', [id], (err, results) => {
        if (err) {
            throw err
        }
        response.status(200).send(`routine deleted with ID: ${id}`);
    });
}

module.exports = {
    getRoutineFromDB: getRoutineFromDB,
    getRoutineByID: getRoutineByID,
    insertNewRoutine: insertNewRoutine,
    createRoutine: createRoutine,
    updateUser: updateUser
};