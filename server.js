process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const express = require('express');
const connectionString = process.env.DATABASE_URL || 'postgres://zmyiytwypsdsbm:1c5424f812507643f32450b96ab448e7e33db6ce1fd8ce3e004e12239f267829@ec2-107-22-239-155.compute-1.amazonaws.com:5432/dfufvia4as54bp?ssl=true';
const { Pool } = require('pg');
const pool = new Pool({ connectionString: connectionString });
const goalController = require('./controllers/goalController');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname + '/public')));

app.get('/getGoal', goalController.getGoal);
// app.get('/getWeight', getWeight);

// app.post();


app.listen(PORT, function() {
    console.log('Node app is running on port', PORT);
});





// var sql = "SELECT * FROM goal";

// pool.query(sql, function(err, result) {
//     // If an error occurred...
//     if (err) {
//         console.log("Error in query: ")
//         console.log(err);
//     }

//     // Log this to the console for debugging purposes.
//     console.log("Back from DB with result:");
//     console.log(result.rows);


// });