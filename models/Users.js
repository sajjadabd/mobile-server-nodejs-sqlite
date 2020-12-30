const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const User = sequelize.define("users", {
    // user_id: {
    //   type: DataTypes.UUID,
    //   defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
    //   allowNull: false
    // },
    username: {
      type: DataTypes.STRING
    },
    phone_number : {
      type: DataTypes.STRING
    },
    sms : {
      type: DataTypes.STRING
    },
    province : {
      type: DataTypes.STRING
    },
    city : {
      type: DataTypes.STRING
    },
    gender : {
      type: DataTypes.STRING
    },
    verified : {
      type: DataTypes.BOOLEAN
    },
    blue_tick : {
      type: DataTypes.BOOLEAN
    },
    image_url : {
      type: DataTypes.STRING
    },
  }, {
    timestamps: false
  }
);


const checkUsersTable = async () => {
  let result = false;
  try {
    result = await sequelize.query("SELECT * FROM users");
  } catch (e) {
    console.log(result);
  }
  if ( result == false ) {
    return false;
  } else {
    return true;
  }
}


const createUsersTable = async () => {
  await User.sync({ force: true });
}

const syncTables = async () => {
  await sequelize.sync({ force: true });
  // Code here
};


const createUser = async (data) => {
  try {
    let result = await User.create({ 
      username : data.username , 
      phone_number : data.phone_number,
      sms : data.sms,
      province : data.province,
      city : data.city,
      gender : data.gender,
      verified : data.verified,
      blue_tick : data.blue_tick,
      image_url : data.image_url,
    });
    // newUser.save();
    // console.log(newUser);
  } catch (e) {
    console.log(e);
  }
}


const updateOne = async (id , data) => {
  try {
    let result = await User.update(
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
    let result = await User.findOne({ 
      where: { 
        id 
      } 
    });
  } catch (e) {
    console.log(e);
  }
}




module.exports = {
  User , 
  createUser,
  checkUsersTable ,
  syncTables
}