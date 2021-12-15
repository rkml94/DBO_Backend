module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
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
    });
  
    return Order;
  };