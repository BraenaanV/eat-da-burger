var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger");

//get route to display all burgers

router.get("/", function (req, res) {
  burger.selectAll(function(data) {
      let hbsObject = {
          burgers: data
      };
      res.render("index", hbsObject);
  });
});

//post route to add a new burger

router.post("/burgers", function(req, res) {
  burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], function () {
    res.redirect("/");
  });
});

//put route to update burger "devoured" status

router.put("/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;
  burger.updateOne({
    devoured: true
  }, condition, function (data) {
    res.redirect("/");
  })
});

// Export routes for server.js to use.
module.exports = router;
