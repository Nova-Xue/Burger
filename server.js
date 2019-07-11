//import express package
var express = require("express");
//import handlebars
var exhbs = require("express-handlebars");
//create app
var app = express();
//assign port
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({extended : true}));
app.use(express.json());
//set default layout
app.engine("handlebars",exhbs({defaultLayout : "main"}));
//set engine
app.set("view engine","handlebars");
//hide except public
app.use(express.static("public"));
//import routes
var routes = require("./controllers/burgerController.js");
//use routes
app.use(routes);
//start to listen
app.listen(PORT,function(){
    console.log("listening");
});