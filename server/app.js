const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const history = require('connect-history-api-fallback');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();


// const { JWT_KEY } = require('../server/config/keys');

// console.log(process.env);
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
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))


// Routes
app.use('/api', require('./api/routes/index'));
app.use('/api/auth', require('./auth/routes/auth'));
app.use('/api/collections', require('./api/routes/collections'));
app.use('/api/categories', require('./api/routes/categories'));
app.use('/api/courses', require('./api/routes/courses'));
app.use('/api/products', require('./api/routes/products'));
app.use('/api/users', require('./auth/routes/users'));
app.use('/api/cart', require('./api/routes/cart'));
app.use('/api/fees', require('./api/routes/fees'));
app.use('/api/orders', require('./api/routes/orders'));
// app.use('/api/v1.0/paypal', require('./api/routes/paypal'));
// app.use('/profile', require('./api/routes/profile'));


console.log(process.env);

 // Middleware for Vue.js router mode history
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT)

app.listen(app.get('port'), function(){
    // if (process.env.PORT === undefined) {
    //     console.log('App running at:');
    //     console.log('- Port:    3000');
    //     console.log('- Local:   http://localhost:3000')
    // } else {
    //     console.log('App running at:');
    //     console.log(`- Port:        ${process.env.PORT}`);
    //     console.log('- Production:  https://pigmentus.herokuapp.com')
    // }


});