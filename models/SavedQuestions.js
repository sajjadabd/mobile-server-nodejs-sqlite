const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const SavedQuestions = sequelize.define("savedquestions", {
    question_id : {
      type: DataTypes.INTEGER
    },
    user_id : {
      type: DataTypes.INTEGER
    },
  }, {
    timestamps: false
  }
);

const createSavedQuestion = async () => {
  try {
    let newUser = await SavedQuestions.create({ 
      question_id : 30,
      user_id : 1,
    });
    // newUser.save();
    // console.log(newUser);
  } catch (e) {
    console.log(e);
  }
}


module.exports = {
  SavedQuestions , 
  createSavedQuestion
}