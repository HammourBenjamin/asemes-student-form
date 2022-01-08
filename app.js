const path = require('path');
const express = require('express');
const index = require('./routes');
const app = express();
const cookieParser = require('cookie-parser');
require("./config/database/database.config");

exports.app = app;


app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(index);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).redirect('/');
})

app.listen(7000);