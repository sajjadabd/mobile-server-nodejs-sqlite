const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');


const Works = sequelize.define("works", {
    user_id: {
      type: DataTypes.STRING
    },
    province: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.STRING
    },
    work_title: {
      type: DataTypes.STRING
    },
    skills: {
      type: DataTypes.JSON
    }
  }, {
    timestamps: false
  }
);


const createWork = async (data) => {
  try {
    let result = await Works.create({ 
      user_id : data.user_id , 
      province : data.province,
      city : data.city,
      gender : data.gender,
      work_title : data.work_title,
      skills : data.skills
    });
    // newUser.save();
    // console.log(newUser);
  } catch (e) {
    console.log(e);
  }
}



const updateOne = async (id , data) => {
  try {
    let result = await Works.update(
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
    let result = await Works.findOne({ 
      where: { 
        id 
      } 
    });
  } catch (e) {
    console.log(e);
  }
}




module.exports = {
  Works , 
  createWork
}
