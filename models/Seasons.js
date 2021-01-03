const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const Seasons = sequelize.define("seasons", {
    standard_id: {
      type: DataTypes.INTEGER
    },
    season_title : {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  }
);


const createSeason = async (data) => {
  try {
    let result = await Seasons.create({ 
      standard_id : data.standard_id,
      season_title : data.season_title,
    });
    // newUser.save();
    // console.log(newUser);
  } catch (e) {
    console.log(e);
  }
}

const updateOne = async (id , data) => {
  try {
    let result = await Seasons.update(
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
    let result = await Seasons.findOne({ 
      where: { 
        id 
      } 
    });
  } catch (e) {
    console.log(e);
  }
}






module.exports = {
  Seasons , 
  createSeason
}