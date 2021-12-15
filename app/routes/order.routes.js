module.exports = app => {
    const orders = require("../controllers/order.controller.js");
  
    var router = require("express").Router();
  
    // Create a new 
    router.post("/", orders.create);
  
    // Retrieve all 
    router.get("/", orders.findAll);
  
  
    // Retrieve a single with id
    router.get("/:id", orders.findOne);
  
    // Update a  with id
    router.put("/:id", orders.update);
  
    // Delete a  with id
    router.delete("/:id", orders.delete);
  
    // Delete all 
    router.delete("/", orders.deleteAll);
  
    app.use('/api/orders', router);
  };