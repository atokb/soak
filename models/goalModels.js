const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://zmyiytwypsdsbm:1c5424f812507643f32450b96ab448e7e33db6ce1fd8ce3e004e12239f267829@ec2-107-22-239-155.compute-1.amazonaws.com:5432/dfufvia4as54bp?ssl=true';
const pool = new Pool({ connectionString: connectionString });


function getGoals(callback) {

    var sql = "SELECT * FROM goal";

    pool.query(sql, function(err, db_results) {
        // If an error occurred...
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



module.exports = {
    getGoals: getGoals,
};