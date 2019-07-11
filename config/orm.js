//import db connection
var connection = require("../config/connection.js");
var orm = {
    //insert orm
    burgerCreate : function(table,col,burgerName,cb){
        connection.query("insert into ?? (??) value (?)",[table,col,burgerName],function(err,data){
            cb(err,data);
        });
    },
    //select orm
    burgerAll : function(table,cb){
        connection.query("select *from ?? ",[table],function(err,data){
            cb(err,data);
        });
    },
    //updaate orm
    burgerUpdateState : function(table,colToUpdate,conditionCol,conditionValue,cb){
        connection.query("update ?? set ?? = !?? where ?? = ?",[table,colToUpdate,colToUpdate,conditionCol,conditionValue],function(err,data){
            cb(err,data);
        });
    },
    //delete orm
    burgerDelete : function(table,col,colValue,cb){
        connection.query("delete from ?? where ?? = ?",[table,col,colValue],function(err,data){
            cb(err,data);
        });
    }
};
//exports orm
module.exports = orm;