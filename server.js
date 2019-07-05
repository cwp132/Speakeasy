const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3002;
var db = require('./models');
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// // Add routes, both API and view
// // app.use(routes);

var session = require("express-session"),
    bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname + '/test/index.html'));
// });

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/CocktailDB", { useNewUrlParser: true });

passport.use(new LocalStrategy(
    function (username, password, done) {
        console.log(username + " " + password)
        db.User.findOne({ user_name: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                console.log("incorrect");
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (user.password !== password) {
                console.log("wrong");
                return done(null, false, { message: 'Incorrect password.' });
            }
            console.log("success");
            return done(null, user);
        });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(function (id, done) {
    db.User.findById(id, function (err, user) {
        done(err, user);
    });
});



app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
        console.log("====================")
        console.log(req.user);
        console.log("==================== \n")
        res.redirect('/');
    });

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;