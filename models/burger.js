var orm = require("../config/orm.js");
var burger = {
    burgerAll : function(cb){
        orm.burgerAll("burgerlist",function(err,data){
            cb(err,data);
        });
    },
    burgerCreate : function(burgeName,cb){
        orm.burgerCreate("burgerlist","burger_name",burgeName,function(err,data){
            cb(err,data);
        });
    },
    burgerUpdateState :  function(id,cb){
        orm.burgerUpdateState("burgerlist", "eaten_state", "id",id,function(err,data){
            cb(err,data);
        });

    },
    burgerDelete : function(id,cb){
        orm.burgerDelete("burgerlist", "id", id,function(err,data){
            cb(err,data);
        });
    }
}
module.exports = burger;
