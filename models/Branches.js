const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const Branches = sequelize.define("branches", {
    branch_name: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  }
);

const createBranch = async (data) => {
  try {
    let result = await Branches.create({ 
      branch_name : data.branch_name
    });
    // newUser.save();
    // console.log(newUser);
  } catch (e) {
    console.log(e);
  }
}

const updateOne = async (id , data) => {
  try {
    let result = await Branches.update(
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
    let result = await Branches.findOne({ 
      where: { 
        id 
      } 
    });
  } catch (e) {
    console.log(e);
  }
}




module.exports = {
  Branches ,
  createBranch
}


