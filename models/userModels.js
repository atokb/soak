const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://zmyiytwypsdsbm:1c5424f812507643f32450b96ab448e7e33db6ce1fd8ce3e004e12239f267829@ec2-107-22-239-155.compute-1.amazonaws.com:5432/dfufvia4as54bp?ssl=true';
const pool = new Pool({ connectionString: connectionString });


function getUser(email, callback) {
    var sql = "SELECT userID, first_name, last_name, email, password, goal_routineID FROM users WHERE email=$1::text";
    var params = [email];

    pool.query(sql, params, function(err, db_results) {

        if (err) {
            throw err;
        } else {
            var results = {
                success: true,
                list: db_results.rows
            };

            callback(null, results);
        }

    });

}

function registerUser(email, callback) {
    var sql = "INSERT INTO users VALUES (first_name: first_name, last_name: last_name, email: email, password: password)";
    var params = [id];

    pool.query(sql, params, function(err, db_results) {

        if (err) {
            throw err;
        } else {
            var results = {
                success: true,
                list: db_results.rows
            };

            callback(null, results);
        }

    });
}

module.export = {
    getUser: getUser,
    registerUser: registerUser
}