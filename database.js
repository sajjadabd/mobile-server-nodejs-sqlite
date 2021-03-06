const { Sequelize } = require('sequelize');

// Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
  // logging: (...msg) => console.log(msg),
  logging : false
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = {
  sequelize ,
  testConnection
}