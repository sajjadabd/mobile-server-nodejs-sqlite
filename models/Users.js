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


const createUser = async () => {
  try {
    let newUser = await User.create({ 
      username : 'sajjad' , 
      phone_number : '09381308994',
      sms : '987657',
      province : 'مازندران',
      city : 'نکا',
      gender : 'male',
      verified : true,
      blue_tick : true,
      image_url : 'url',
    });
    // newUser.save();
    // console.log(newUser);
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