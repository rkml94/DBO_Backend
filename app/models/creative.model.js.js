module.exports = (sequelize, Sequelize) => {
    const Creative = sequelize.define("creative", {
      theaterCode: {
        type: Sequelize.STRING
      },
      orderId: {
        type: Sequelize.STRING
      },
      orderName: {
        type: Sequelize.STRING
      },
      remark: {
        type: Sequelize.STRING
      },
      screens: {
        type: Sequelize.STRING
      },
      bActive:{
        type: Sequelize.STRING
      },
      bDownloadedToDS: {
        type: Sequelize.STRING
      },
      bUploadedAtDSCentral: {
        type: Sequelize.STRING
      },
      bUploadedAtDSMedia:{
        type: Sequelize.STRING
      },
      bUploadedAtMagicInfo: {
        type: Sequelize.STRING
      },
      bUploadedToTV: {
        type: Sequelize.STRING
      },
      creativeCaption: {
        type: Sequelize.STRING
      },
      creativeId: {
        type: Sequelize.STRING
      },
      startDate:{
        type: Sequelize.STRING
      },
      endDate: {
        type: Sequelize.STRING
      },
    });
  
    return Creative;
  };