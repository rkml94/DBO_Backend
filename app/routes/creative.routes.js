module.exports = app => {
    const creatives = require("../controllers/creative.controller.js");
  
    var router = require("express").Router();
  
    // Create a new 
    router.post("/", creatives.create);
  
    // Retrieve all 
    router.get("/", creatives.findAll);
  
  
    // Retrieve a single with id
    router.get("/:id", creatives.findOne);
  
    // Update a  with id
    router.put("/:id", creatives.update);
  
    // Delete a  with id
    router.delete("/:id", creatives.delete);
  
    // Delete all 
    router.delete("/", creatives.deleteAll);
  
    app.use('/api/creatives', router);
  };