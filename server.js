process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const express = require("express");
const goalController = require("./controllers/goalContoller.js");
const routineController = require("./controllers/routineController.js");
const userController = require("./controllers/userController.js");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
const session = require("express-session");

app.use(express.static(path.join(__dirname + '/public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'it-is-a-secret', saveUninitialized: true, resave: true }));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/soak.html'));
});
app.get('/loggedIn', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/soak-start.html'));
});
app.get('/routines', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/soak_routine.html'));
});
app.get('/signUp', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/soak_signup.html'));
});
app.get('/editRoutine', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/soak_edit.html'));
});

app.get('/getGoals', goalController.getGoals);
app.get('/getRoutine', routineController.getRoutine);

app.post('/login', userController.findUser);
app.post('/register', userController.registerUser);


app.listen(PORT, function() {
    console.log('Node app is running on port:', PORT);
});