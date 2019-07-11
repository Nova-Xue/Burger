//import mysql package
var mysql = require("mysql");
//import dotenv to hide db info
require("dotenv").config();
//create mysql connection
var connection = mysql.createConnection({
    host : process.env.DB_HOST,
    port : 3306,
    user : process.env.DB_USER,
    password : process.env.DB_PWD,
    database : process.env.DB_DATABASE
});
//connect to mysql db
connection.connect(function(){
    console.log("connected to database");
    
});
//export connection
module.exports = connection;