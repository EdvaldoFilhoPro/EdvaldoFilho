const express = require('express');
const bodyParser = require('body-parser');
const routes = require("../start/routes")
const connection = require('./database/dbConnection');
const session = require('express-session');
const flash = require('express-flash');
const cookieParser = require('cookie-parser');

class App {
    constructor() {
        this.server = express();
        this.data();
        this.viewEngine();
        this.middlewares();
        this.routes(); 
    }
    data() {
        connection.authenticate()
            .then(() => {
                console.log('Conexão feita com banco de dados!');
            })
            .catch((msgErro) => {
                console.log(msgErro);
            })
    }
    viewEngine() {
        this.server.set('view engine', 'ejs');
        this.server.set('views', './app/views');
        this.server.use(express.static('./app/public'));
    }
    middlewares() {
        this.server.use(bodyParser.urlencoded({ extended: true }))
        this.server.use(bodyParser.json())
        this.server.use(cookieParser("fhuerhif"))
        this.server.use(session({
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: true,
            cookie: { maxAge: 60000 }
        }));
        this.server.use(flash());
    }
    routes(){
        this.server.use(routes)
    }

}

module.exports = new App().server;