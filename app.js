const express = require('express');
// require('dotenv').config();
var http = require("http");

// const bodyParser = require('body-parser').json({limit: '50mb'});
const { render } = require('ejs');
const pfCotroller = require('./controllers/portfolioController');

const app = express();
const port = 8080;
app.listen(port, (err) => {
    console.log('Omar listening')
})

app.set('trust proxy', 1);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ limit: "50mb", extended: false }));
// app.use(bodyParser);

app.get('/', (req, res) => {
    res.render('opening', { title: 'Hello', nav: 'hello', slug:'' });
})

app.get('/portfolio', pfCotroller.portfolio_get);
app.get('/portfolio/:ptid', pfCotroller.pfitem_get);
app.get('/about', pfCotroller.about_get);
