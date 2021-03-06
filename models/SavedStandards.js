const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const SavedStandards = sequelize.define("savedstandards", {
    save_standard_id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    } ,
    branch_id : {
      type: DataTypes.INTEGER
    },
    standard_id : {
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



const createSavedStandards = async (data) => {
  try {
    let result = await SavedSubChapters.create({ 
      standard_id : data.standard_id,
      user_id : data.user_id,
    });
    // newUser.save();
    // console.log(newUser);
  } catch (e) {
    console.log(e);
  }
}



const deleteSavedStandards = async (id) => {
  try {
    await SavedSubChapters.destroy({
      where: {
        id
      }
    });
  } catch (e) {
    
  }
}




module.exports = {
  SavedStandards , 
  createSavedStandards ,
  deleteSavedStandards
}