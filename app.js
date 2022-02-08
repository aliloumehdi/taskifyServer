
//  DB SETUP
const CONNECTION_URL = "mongodb://localhost:27017/Taskify?readPreference=primary&appname=Taskify%20Compass&directConnection=true&ssl=false";
const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB_URI || CONNECTION_URL;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  
var createError = require('http-errors');
var express = require('express');
var cors=require('cors')



// mongoose.connect('mongodb://localhost:27017', { useUnifiedTopology: true }).then(connection => {
//     connected = true;
//     console.log(connection);
//     db = connection.db('Market');
//     console.log("DB Conection successful");
// }).catch(error => {
//   console.error(error);
//     console.log("Error in connecting to DB");
// });
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');



var tasksRouter = require('./routes/Tasks')
var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/tasks', tasksRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404)); 
});
// app.use(cors({
//   origin: 'http://localhost:3000'
// }));

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
