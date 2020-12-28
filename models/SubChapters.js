const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const SubChapters = sequelize.define("subchapters", {
    subchapter_name: {
      type: DataTypes.STRING
    },
    number_of_seasons: {
      type: DataTypes.INTEGER
    },
  }, {
    timestamps: false
  }
);

const createSubChapter = async () => {
  try {
    let newUser = await SubChapters.create({ 
      subchapter_name : 'جوشکاری',
      number_of_seasons : 10,
    });
    // newUser.save();
    // console.log(newUser);
  } catch (e) {
    console.log(e);
  }
}


module.exports = {
  SubChapters , 
  createSubChapter
}