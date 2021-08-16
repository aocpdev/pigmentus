const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const history = require('connect-history-api-fallback');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}

// Midlewares
app.use(cookieParser())
app.use(morgan('tiny'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Express Session
app.use(session({
    secret: process.env.JWT_KEY,
    resave: false,
    saveUninitialized: false
}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if ('OPTIONS' == req.method) {
        res.header('Access-Control-Allow-Methods', 'DELETE, PUT, POST, GET, PATCH' );
        res.status(200).json({});
    }
    next();
    });



// Routes
app.use('/api/v1.0', require('./api/routes/index'));
app.use('/api/v1.0/auth', require('./auth/routes/auth'));
app.use('/api/v1.0/collections', require('./api/routes/collections'));
app.use('/api/v1.0/categories', require('./api/routes/categories'));
app.use('/api/v1.0/courses', require('./api/routes/courses'));
app.use('/api/v1.0/products', require('./api/routes/products'));
app.use('/api/v1.0/users', require('./auth/routes/users'));
app.use('/api/v1.0/cart', require('./api/routes/cart'));
app.use('/api/v1.0/fees', require('./api/routes/fees'));
// app.use('/api/v1.0/paypal', require('./api/routes/paypal'));
// app.use('/profile', require('./api/routes/profile'));


 // Middleware for Vue.js router mode history
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), function(){
    console.log('Listening... Port 3000');
});