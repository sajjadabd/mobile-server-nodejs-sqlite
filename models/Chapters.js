const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const Chapters = sequelize.define("chapters", {
    chapter_name: {
      type: DataTypes.STRING
    },
    number_of_standards: {
      type: DataTypes.INTEGER
    },
  }, {
    timestamps: false
  }
);

const createChapter = async (data) => {
  try {
    let result = await Chapters.create({ 
      chapter_name : data.chapter_name,
      number_of_standards : data.number_of_standards,
    });
    // newUser.save();
    // console.log(newUser);
  } catch (e) {
    console.log(e);
  }
}


const updateOne = async (id , data) => {
  try {
    let result = await Chapters.update(
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
    let result = await Chapters.findOne({ 
      where: { 
        id 
      } 
    });
  } catch (e) {
    console.log(e);
  }
}





module.exports = {
  Chapters , 
  createChapter
}