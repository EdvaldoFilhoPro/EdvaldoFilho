const Sequelize = require('sequelize');
const connection = require('../../config/database/dbConnection');

const ContactMessage = connection.define('message', {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    fone: {
        type: Sequelize.STRING(15),
        allowNull: false
    },
    subject: {
        type: Sequelize.STRING(30),
        allowNull: false
    }, 
    message: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});
 ContactMessage.sync({force:false}).then( () => {
     console.log("Tabela Criada");
 });

module.exports = ContactMessage;