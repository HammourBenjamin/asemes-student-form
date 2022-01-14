const path = require('path');
const express = require('express');
require("./config/database/database.config");
const route = require('./routes');
const app = express();
module.exports = {
    app,
}

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(route);

app.use((err, req, res, next) => {
    res.status(500).redirect('/');
});