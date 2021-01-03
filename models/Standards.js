const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const Standards = sequelize.define("standards", {
    standard_name: {
      type: DataTypes.STRING
    },
    number_of_seasons: {
      type: DataTypes.INTEGER
    },
  }, {
    timestamps: false
  }
);

const createStandard = async (data) => {
  try {
    let result = await Standards.create({ 
      standard_name : data.standard_name,
      number_of_seasons : data.number_of_seasons,
    });
    // newUser.save();
    // console.log(newUser);
  } catch (e) {
    console.log(e);
  }
}

const updateOne = async (id , data) => {
  try {
    let result = await Standards.update(
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
    let result = await Standards.findOne({ 
      where: { 
        id 
      } 
    });
  } catch (e) {
    console.log(e);
  }
}




module.exports = {
  Standards , 
  createStandard
}


