// dependencies
var express = require("express");
var router = express.Router();

//import model

var burger = require("../models/burger");

// routes

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([])
})