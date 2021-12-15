const db = require("../models");
const Creative = db.creative;
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
  const creative = {
    orderId: req.body.orderId,
    orderName: req.body.orderName,
    remark: req.body.remark,
    screens: req.body.screens,
    theaterCode: req.body.theaterCode,
    bActive: req.body.bActive,
    bDownloadedToDS: req.body.bDownloadedToDS,
    bUploadedAtDSCentral: req.body.bUploadedAtDSCentral,
    bUploadedAtDSMedia: req.body.bUploadedAtDSMedia,
    bUploadedAtMagicInfo: req.body.bUploadedAtMagicInfo,
    bUploadedToTV: req.body.bUploadedToTV,
    creativeCaption: req.body.creativeCaption,
    creativeId: req.body.creativeId,
    startDate: req.body.startDate,
    endDate: req.body.endDate
  };

  
  Creative.create(creative)
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
  
    Creative.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Creative."
        });
      });
};


exports.findOne = (req, res) => {
    const id = req.params.id;

    Creative.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Creative with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Creative with id=" + id
        });
      });
  
};

exports.update = (req, res) => {
    const id = req.params.id;

    Creative.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Creative was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Creative with id=${id}. Maybe Creative was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Creatives with id=" + id
        });
      });
};


exports.delete = (req, res) => {
    const id = req.params.id;

    Creative.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Creative was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Creative with id=${id}. Maybe Creative was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Creative with id=" + id
        });
      });
};


exports.deleteAll = (req, res) => {
    Creative.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Creatives were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Creatives."
          });
        });
};