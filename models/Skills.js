const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');


const Skills = sequelize.define("skills", {
    skill_title: {
      type: DataTypes.STRING
    },
  }, {
    timestamps: false
  }
);


const createSkill = async (data) => {
  try {
    let result = await Skills.create({ 
      skill_title : data.skill_title,
    });
    // newUser.save();
    // console.log(newUser);
  } catch (e) {
    console.log(e);
  }
}


const updateOne = async (id , data) => {
  try {
    let result = await Skills.update(
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
    let result = await Skills.findOne({ 
      where: { 
        id 
      } 
    });
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}



module.exports = {
  Skills , 
  createSkill
}