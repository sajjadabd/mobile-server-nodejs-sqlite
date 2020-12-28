const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const Questions = sequelize.define("questions", {
    chapter: {
      type: DataTypes.STRING
    },
    subchapter: {
      type: DataTypes.STRING
    },
    season: {
      type: DataTypes.STRING
    },
    level: {
      type: DataTypes.INTEGER
    },
    question: {
      type: DataTypes.STRING
    },
    first: {
      type: DataTypes.STRING
    },
    second: {
      type: DataTypes.STRING
    },
    third: {
      type: DataTypes.STRING
    },
    fourth: {
      type: DataTypes.STRING
    },
  }, {
    timestamps: false
  }
);


const createQuestion = async () => {
  try {
    let newUser = await Questions.create({ 
      chapter : 'فناوری اطلاعات',
      subchapter : 'ّبرنامه نویسی',
      season : 1,
      level : 2,
      question : 'متن سوال',
      first : 'گزینه ی 1',
      second : 'گزینه ی 2',
      third : 'گزینه ی 3',
      fourth : 'گزینه ی 4'
    });
    // newUser.save();
    // console.log(newUser);
  } catch (e) {
    console.log(e);
  }
}


module.exports = {
  Questions , 
  createQuestion
}