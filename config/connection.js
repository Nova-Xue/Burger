//import mysql package
var mysql = require("mysql");
//import dotenv to hide db info
require("dotenv").config();
//create mysql connection
var connection = mysql.createConnection({
    host : process.env.DB_HOST ||"l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port : 3306,
    user : process.env.DB_USER || "mgvjdqogkge527cg",
    password : process.env.DB_PWD || "b3odfgpvu6g4w27p",
    database : process.env.DB_DATABASE || "ooxwtpgzmiwufh96"
});
//connect to mysql db
connection.connect(function(){
    console.log("connected to database");
    
});
//export connection
module.exports = connection;