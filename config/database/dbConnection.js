require('dotenv').config();
const Sequelize = require('sequelize');

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/EdvaldoDeveloper/EdvaldoFilho.git
// git push -u origin main;

const connection = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION
});


module.exports = connection;


