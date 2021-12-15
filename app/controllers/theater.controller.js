const db = require("../models");
const Theater = db.theater;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  // Validate request
  if (!req.body.code) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const theater = {
    code: req.body.code,
    name: req.body.name,
    published: req.body.published ? req.body.published : false
  };

  
  Theater.create(theater)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the theater."
      });
    });
};

exports.findAll = (req, res) => {
    const code = req.query.code;
    var condition = code ? { code: { [Op.like]: `%${code}%` } } : null;
  
    Theater.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving theaters."
        });
      });
};


exports.findOne = (req, res) => {
    const id = req.params.id;

    Theater.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Theater with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Theater with id=" + id
        });
      });
  
};

exports.update = (req, res) => {
    const id = req.params.id;

    Theater.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Theater was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Theater with id=${id}. Maybe Theater was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Theaters with id=" + id
        });
      });
};


exports.delete = (req, res) => {
    const id = req.params.id;

    Theater.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Theater was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Theater with id=${id}. Maybe Theater was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Theater with id=" + id
        });
      });
};


exports.deleteAll = (req, res) => {
    Theater.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Theaters were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Theaters."
          });
        });
};


exports.findAllPublished = (req, res) => {
    Theater.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Theaters."
      });
    });
};