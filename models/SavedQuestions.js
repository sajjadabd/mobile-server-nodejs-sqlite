const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const SavedQuestions = sequelize.define("savedquestions", {
    save_question_id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    } ,
    question_id : {
      type: DataTypes.INTEGER
    },
    user_id : {
      type: DataTypes.INTEGER
    },
    saved : {
      type: DataTypes.BOOLEAN
    }
  }, {
    timestamps: false
  }
);



const createSavedQuestion = async (data) => {
  try {
    let result = await SavedQuestions.create({ 
      question_id : data.question_id,
      user_id : data.user_id,
    });
    // newUser.save();
    // console.log(newUser);
  } catch (e) {
    console.log(e);
  }
}

const deleteSavedQuestion = async (id) => {
  try {
    await SavedQuestions.destroy({
      where: {
        id
      }
    });
  } catch (e) {
    
  }
}








module.exports = {
  SavedQuestions , 
  createSavedQuestion
}