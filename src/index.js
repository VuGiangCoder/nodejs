const express = require('express');
const morgan = require('morgan');
const handlebars = require('express3-handlebars'); //handlebar chạy thì phải dùng cái này
const db = require('./config/db')
const routes = require('./routes')
const path = require('path')

const app = express();

const port = 3000

// connect to DB
db.connect();
//log of HTTP
//app.use(morgan('combined'));

app.engine('handlebars',handlebars());
app.set('view engine','handlebars');
app.set('views',path.join(__dirname,'resources/views'));

//routes init
routes(app);

app.listen(3000);
