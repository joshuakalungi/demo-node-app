// importing both the express module and our routes file exports into the application
// The require() function were using to do this is a built-in Node function which imports an object from another file or module
const express = require('express');
const routes = require('./routes/index');

// we're creating a new express app using the express function and assigning it to an app variable
const app  = express();

// we then tell the app that whenever it receives a request fromforward slash anything, it should use the routes file
app.use('/',routes);

// we export our app variable so that it can be imported and used in other files
module.exports = app;