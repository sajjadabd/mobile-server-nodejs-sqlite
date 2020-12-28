const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const Seasons = sequelize.define("seasons", {
    subchapter_id: {
      type: DataTypes.INTEGER
    },
    season_title : {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  }
);

const createSeason = async () => {
  try {
    let newUser = await Seasons.create({ 
      subchapter_id : 10,
      season_title : 'جوشکاری',
    });
    // newUser.save();
    // console.log(newUser);
  } catch (e) {
    console.log(e);
  }
}



module.exports = {
  Seasons , 
  createSeason
}