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

const createSkill = async () => {
  try {
    let newUser = await Skills.create({ 
      skill_title : 'جوشکاری',
    });
    // newUser.save();
    // console.log(newUser);
  } catch (e) {
    console.log(e);
  }
}


module.exports = {
  Skills , 
  createSkill
}