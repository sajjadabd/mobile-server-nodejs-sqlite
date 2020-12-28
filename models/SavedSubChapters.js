const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const SavedSubChapters = sequelize.define("savedsubchapters", {
    subchapter_id: {
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER
    },
  }, {
    timestamps: false
  }
);

const createSavedSubChapter = async () => {
  try {
    let newUser = await SavedSubChapters.create({ 
      subchapter_id : 10,
      user_id : 1,
    });
    // newUser.save();
    // console.log(newUser);
  } catch (e) {
    console.log(e);
  }
}


module.exports = {
  SavedSubChapters , 
  createSavedSubChapter
}