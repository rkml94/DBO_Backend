const db = require("../models");
const Order = db.order;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  // Validate request
  if (!req.body.theaterCode) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const order = {
    orderId: req.body.orderId,
    orderName: req.body.orderName,
    remark: req.body.remark,
    screens: req.body.screens,
    theaterCode: req.body.theaterCode
  };

  
  Order.create(order)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the order."
      });
    });
};

exports.findAll = (req, res) => {
    const theaterCode = req.query.theaterCode;
    var condition = theaterCode ? { theaterCode: { [Op.like]: `%${theaterCode}%` } } : null;
  
    Order.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving order."
        });
      });
};


exports.findOne = (req, res) => {
    const id = req.params.id;

    Order.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Order with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Order with id=" + id
        });
      });
  
};

exports.update = (req, res) => {
    const id = req.params.id;

    Order.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Order was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Order with id=${id}. Maybe Order was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Orders with id=" + id
        });
      });
};


exports.delete = (req, res) => {
    const id = req.params.id;

    Order.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Order was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Order with id=${id}. Maybe Order was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Order with id=" + id
        });
      });
};


exports.deleteAll = (req, res) => {
    Order.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Orders were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Orders."
          });
        });
};