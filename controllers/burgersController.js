var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.findAll({raw:true}).then(function(data){
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create({
    name: req.body.name,
    devoured: req.body.devoured
  }).then( function(result) {
    res.json(result.toJSON()); 
  });
});

router.put("/api/burgers/:id", function(req, res) {
  burger.update(
    {
      devoured: req.body.devoured
    },
    {
      where :{
        id: req.params.id
      }
    }
    ).then(function(result){
      res.status(200).end();
    }).catch(function(err){
      res.status(404).end()
    });
});

router.delete("/api/burgers/:id", function(req, res) {
  
  burger.destroy({
    where:{
      id: Number(req.params.id)
    }
  }).then(function(result){
    res.status(200).end();
  }).catch(function(err){
    res.status(404).end()
  })
});

// Export routes for server.js to use.
module.exports = router;
