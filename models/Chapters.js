const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const Chapters = sequelize.define("chapters", {
    chapter_name: {
      type: DataTypes.STRING
    },
    number_of_subchapters: {
      type: DataTypes.INTEGER
    },
  }, {
    timestamps: false
  }
);

const createChapter = async () => {
  try {
    let newUser = await Chapters.create({ 
      chapter_name : 'جوشکاری',
      number_of_subchapters : 20,
    });
    // newUser.save();
    // console.log(newUser);
  } catch (e) {
    console.log(e);
  }
}


module.exports = {
  Chapters , 
  createChapter
}