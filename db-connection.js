var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'dbrds1.cbf3v71m0eer.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'password',
    database: 'movie_info'
});

connection.connect(err => {  // test out connetion and console.log error if there is one
    if (err) throw err;
    console.log('Connected To AWS DB');
}); 
module.exports = connection;

