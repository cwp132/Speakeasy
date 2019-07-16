const express = require("express");
const mongoose = require("mongoose");
const app = express();
<<<<<<< HEAD
const db = require('./src/models');
const passport = require('passport') ;
const session = require("express-session")
// parse application/x-www-form-urlencoded
const bodyParser = require("body-parser");
const LocalStrategy = require('passport-local').Strategy

const PORT = process.env.PORT || 3002;

// Connect to the Mongo DB
mongoose.connect( "mongodb://localhost/CocktailDB", { useNewUrlParser: true });

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
=======
const PORT = process.env.PORT || 3002;
const crypto = require('crypto');
var session = require("express-session");
var bodyParser = require("body-parser");
var db = require('./models');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
require('dotenv').config();

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};
>>>>>>> master

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(session({ secret: process.env.SERVER_SECRET }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
<<<<<<< HEAD
=======
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:password1@ds125628.mlab.com:25628/heroku_r702533l", { useNewUrlParser: true });
>>>>>>> master

passport.use(new LocalStrategy(
    function (username, password, done) {
        console.log(username + " " + password);
        const encPass = crypto.createHmac('sha256', process.env.SHA_SECRET)
            .update(password)
            .digest('hex');
        console.log(password);
        db.User.findOne({ user_name: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                console.log("incorrect");
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (user.password !== encPass) {
                console.log("wrong");
                return done(null, false, { message: 'Incorrect password.' });
            }
            console.log("success");
            return done(null, user);
        });
    }
));

const hash = crypto.createHmac('sha256', process.env.SHA_SECRET)
    .update('blah')
    .digest('hex');
console.log(hash);

passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(function (id, done) {
    db.User.findById(id, function (err, user) {
        done(err, user);
    });
});

//favorite add/ remove route
//route runs when favorite button is clicked
app.post("/favorite",function(req,res){
    //holds drink id from current drink
    var drinkId = req.body.drink.id
    //queries database for user, needs to be changed to the current user
    db.User.findOne({user_name:"new"},function(err,res){
        //stores user's favorite array
        var newFav = res.favorites
        console.log("======================")
        console.log(newFav)
        console.log(newFav.indexOf(drinkId))
        // if drink id is in array holds index else returns -1
        var favInd = newFav.indexOf(drinkId)
        if(favInd === -1){
            // console.log(newFav.indexOf(drinkId))
            newFav.push(drinkId)
            console.log(newFav)
            db.User.update({user_name:"new"},{favorites:newFav},function(err,res){
                console.log(res)
            })
        }else{
            newFav.splice(newFav.indexOf(drinkId))
            console.log(newFav)
            db.User.update({user_name:"new"},{favorites:newFav},function(err,res){
                console.log(res)
            })
        }
        // var new_fav = res.favorites
        // new_fav.push(req.body.drink.id)
        // db.User.update({user_name:"new"},{favorites:new_fav},function(err,res){
        //     console.log(res)
        // })
    })   
})

app.post('/create', function (req, res) {
    console.log(req.body);
<<<<<<< HEAD
    db.User.create({ user_name: req.body.username, password: req.body.password })
        .then(function (res) {
            console.log(res);
        })
})

app.get("/test", function (req, res) {
    console.log(req.body);
    console.log(db);
    
    db.User.findOne({user_name:"new"})
    .then(function(res){
    console.log(res)
  })
})

app.get('/isLogged', (req, res) => {
    res.send(req.user);
    // console.log(req.user);
})
=======

    let password = req.body.password;
    const encPass = crypto.createHmac('sha256', process.env.SHA_SECRET)
        .update(password)
        .digest('hex');
    console.log(password);
    db.User.create({ user_name: req.body.username, password: encPass })
    res.redirect('/');
});

>>>>>>> master

app.post('/login',
    passport.authenticate('local', { failureRedirect: '/' }),
    function (req, res) {
        res.redirect('/');

    });

app.get('/logged', function (req, res) {
    res.send(req.user)
});

<<<<<<< HEAD
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
=======

app.get('/logout', function (req, res) {
    console.log('------------------');
    console.log("logging out......");
    console.log("------------------");
    req.logout();
    res.redirect('/');

>>>>>>> master
});

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
