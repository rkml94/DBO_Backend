module.exports = (sequelize, Sequelize) => {
    const OrderTest = sequelize.define("orderTest", {
      orderId: {
        type: Sequelize.STRING
      },
      orderName: {
        type: Sequelize.STRING
      },
      jumlahOrder: {
        type: Sequelize.STRING
      },
      note: {
        type: Sequelize.STRING
      },
      customerName: {
        type: Sequelize.STRING
      },
    supplierName: {
        type: Sequelize.STRING
      },
    });
  
    return OrderTest;
  };