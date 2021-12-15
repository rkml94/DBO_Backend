module.exports = (sequelize, Sequelize) => {
    const Theater = sequelize.define("theater", {
      code: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Theater;
  };