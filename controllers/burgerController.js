//import express to use router
var express = require("express");
var router = express.Router();
//import model
var burger = require("../models/burger.js");
//route to display burgers
router.get("/", function (req, res) {
    //orm burger state
    burger.burgerAll(function (err, data) {
        if (err) {
            console.log(err + "from state");
            res.status(500).end();
        }
        if (data.length == 0) {
            res.status(404).end();
        } else {
            let eaten = [];
            let rest = [];
            for (let index = 0; index < data.length; index++) {
                if (data[index].eaten_state) {
                    eaten.push(data[index]);
                } else {
                    rest.push(data[index]);
                }
            }
            res.render("index", {
                eaten: eaten,
                rest: rest
            })
        }
    });
});
//route to insert new burger into table
router.post("/", function (req, res) {
    //orm burger insert
    burger.burgerCreate(req.body.burgerName, function (err, data) {
        if (err) {
            console.log(err + "from insert");
            res.status(500).end();
        }
        if (data.affectedRows == 1) {
            res.redirect("/");
        }
    });
});
//route to update burger state
router.put("/:id", function (req, res) {//route for the eat button and re-eat button
    //orm burger update
    burger.burgerUpdateState(req.params.id, function (err, data) {
        if (err) {
            console.log(err + "from put");
            res.status(500).end();
        }
        if (data.affectedRows == 0) {
            res.status(404).end();
        }
        if (data.affectedRows == 1) {
            res.status(200).end();
        }
    });
});
//route to delete burger from table
router.delete("/:id", function (req, res) {
    //orm burger delete
    burger.burgerDelete(req.params.id, function (err, data) {
        if (err) {
            console.log(err + "from delete");
            res.status(500).end();
        }
        if (data.affectedRows == 0) {
            res.status(404).end();
        }
        if (data.affectedRows == 1) {
            res.status(200).end();
        }
    });
});
//export routes
module.exports = router;