

function login() {

    var passport = require('passport')
        , LocalStrategy = require('passport-local').Strategy;
    var db = require("./models");
    const express = require("express");
    const app = express();
    var session = require("express-session"),
        bodyParser = require("body-parser");

    app.use(express.static("public"));
    app.use(session({ secret: "cats" }));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new LocalStrategy(
        function (username, password, done) {
            console.log(username + ' ' + password)
            db.User.findOne({ user_name: username }, function (err, user) {
                console.log(user);
                console.log(user.password);
                if (err) { return done(err); }
                if (!user) {
                    console.log("incorrect user")
                    return done(null, false, { message: 'Incorrect username.' });
                }
                if (user.password !== password) {
                    console.log("wrong")
                    return done(null, false, { message: 'Incorrect password.' });
                }
                console.log("success")
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
}
module.exports = login;