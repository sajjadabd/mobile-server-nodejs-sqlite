const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const Questions = sequelize.define("questions", {
    branch: {
      type: DataTypes.STRING
    },
    standard: {
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


const createQuestion = async (data) => {
  try {
    let result = await Questions.create({ 
      branch : data.branch,
      standard : data.standard,
      season : data.season,
      level : data.level,
      question : data.question,
      first : data.first,
      second : data.second,
      third : data.third,
      fourth : data.fourth
    });
    // newUser.save();
    // console.log(newUser);
  } catch (e) {
    console.log(e);
  }
}

const updateOne = async (id , data) => {
  try {
    let result = await Questions.update(
      data , {
      where: {
        id
      }
    });
  } catch (e) {
    
  }
}



const findOne = async (id) => {
  try {
    let result = await Questions.findOne({ 
      where: { 
        id 
      } 
    });
  } catch (e) {
    console.log(e);
  }
}







module.exports = {
  Questions , 
  createQuestion
}