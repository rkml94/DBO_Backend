module.exports = app => {
    const theaters = require("../controllers/theater.controller.js");
  
    var router = require("express").Router();
  
    // Create a new theater
    router.post("/", theaters.create);
  
    // Retrieve all theaters
    router.get("/", theaters.findAll);
  
    // Retrieve all published theaters
    router.get("/published", theaters.findAllPublished);
  
    // Retrieve a single theater with id
    router.get("/:id", theaters.findOne);
  
    // Update a theater with id
    router.put("/:id", theaters.update);
  
    // Delete a theater with id
    router.delete("/:id", theaters.delete);
  
    // Delete all theaters
    router.delete("/", theaters.deleteAll);
  
    app.use('/api/theaters', router);
  };