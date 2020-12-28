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

const createWork = async () => {
  try {
    let newUser = await Works.create({ 
      user_id : '1' , 
      province : 'مازندران',
      city : 'نکا',
      gender : 'male',
      work_title : 'جوشکاری',
      skills : [1,2,3]
    });
    // newUser.save();
    // console.log(newUser);
  } catch (e) {
    console.log(e);
  }
}


module.exports = {
  Works , 
  createWork
}