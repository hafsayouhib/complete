const { hashSync } = require('bcrypt');
const express = require('express');
const app = express();
const UserModel = require('./config/database');
const session = require('express-session')
const MongoStore = require('connect-mongo');
const passport = require('passport');

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/passport', collectionName: "sessions" }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

require('./config/passport');

app.use(passport.initialize())
app.use(passport.session())

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/login', passport.authenticate('local', { successRedirect: 'protected' }))

app.post('/register', (req, res) => {
    // Check if the user is already authenticated
    if (req.isAuthenticated()) {
        // Redirect to the login page if the user is already logged in
        return res.redirect('/login');
    }

    // If the user is not authenticated, proceed with registration
    let user = new UserModel({
        username: req.body.username,
        password: hashSync(req.body.password, 10)
    });

    user.save()
        .then(user => {
            console.log(user); // Log the saved user details
            res.send({ success: true }); // Send success response
        })
        .catch(err => {
            console.error(err); // Log any errors that occur during user registration
            res.status(500).send({ success: false, message: 'An error occurred during registration' });
        });
});


app.get('/logout', (req, res) => {
    req.logout(function(err) {
        if (err) {
            console.error(err);
            return next(err);
        }
        res.redirect('/login');
    });
});


app.get('/protected', (req, res) => {
    if (req.isAuthenticated()) {
        res.send("Protected")
    } else {
        res.status(401).send({ msg: "Unauthorized" })
    }
    console.log(req.session)
    console.log(req.user)
})


app.listen(1000, (req, res) => {
    console.log("Listening to port 5000");
})