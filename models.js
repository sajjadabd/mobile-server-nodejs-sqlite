const { Sequelize, DataTypes, Model } = require('sequelize');

const { sequelize } = require('./database');

const User = sequelize.define("users", {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
      allowNull: false
    },
    username: {
      type: DataTypes.STRING
    },
    phone_number : {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  }
);



const syncTables = async () => {
  await sequelize.sync({ force: true });
  // Code here
};


module.exports = {
  User , 
  syncTables
}