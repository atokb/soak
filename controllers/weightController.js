function getWeight(req, res) {
    const weightId = req.query.weightId;
    getWeightfromDB(weightId, function(error, result) {
        if (error || result == null || result.length != 1) {
            res.status(500).json({ success: false, data: error });
        } else {
            const goal = result[0];
            res.status(200).json(weight);
        }
    });
}

function getWeightfromDB(weightId, callback) {
    console.log("Getting goal: " + weightId);
    const sql = "SELECT weightId, category FROM weight_category";
    const params = [weightId];
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