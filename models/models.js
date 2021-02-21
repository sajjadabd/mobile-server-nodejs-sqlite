// const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../database');

const { User , createUser } = require('./Users');
const { Chapters , createChapter  } = require('./Chapters');
const { Questions , createQuestion } = require('./Questions');
const { SavedQuestions , createSavedQuestion } = require('./SavedQuestions');
const { SavedStandards , createSavedStandards } = require('./SavedStandards');
const { Seasons , createSeason } = require('./Seasons');
const { Skills , createSkill } = require('./Skills');
const { Standards , createStandard } = require('./Standards');
const { Branches , createBranch } = require('./Branches');
const { Works , createWork } = require('./Works');



const checkTables = async () => {

  // const check = undefined;

  /* try {
    check = await User.findAll({
      where : {
        id : {
          [Op.gte]: 1,
        }
      }
    });
    console.log( '---------------' , check , '----------------');
  } catch (e) {
    console.log( '---------------Error Checking User Table----------------');
  } */

  /* 
  await User.sync({ force: false })
  await Chapters.sync({ force: false })
  await Questions.sync({ force: false })
  await SavedQuestions.sync({ force: false })
  await SavedStandards.sync({ force: false })
  await Seasons.sync({ force: false })
  await Skills.sync({ force: false })
  await Standards.sync({ force: false })
  await User.sync({ force: false })
  await Works.sync({ force: false }) 
  */
  

  await sequelize.sync({ force: false });

  await SavedQuestions.sync({ force: true })
  await SavedStandards.sync({ force: true })
  
  // if( check == undefined ) {
  //   await sequelize.sync({ force: false });
  // } else {
  //   await sequelize.sync({ force: false });
  // }
  // Code here

};

const pushSomeFakeInfo = async () => {
  // await createUser({
  //   username : 'سجاد' , 
  //   phone_number : '09381308994',
  //   sms : '586924',
  //   province : 'مازندران',
  //   city : 'نکا',
  //   gender : 'male',
  //   verified : true,
  //   blue_tick : false,
  //   image_url : 'url',
  // });
  // await createChapter();
  // await createQuestion();
  // await createSavedQuestion();
  // await createSavedStandards();
  // await createSeason();
  // await createSkill();
  // await createStandard({
  //   standard_name : 'جوشکاری',
  //   number_of_seasons : 10
  // });
  // await createWork();
}

module.exports = {
  User , createUser ,
  Chapters , createChapter ,
  Questions , createQuestion ,
  SavedQuestions , createSavedQuestion ,
  SavedStandards , createSavedStandards ,
  Seasons , createSeason ,
  Skills , createSkill ,
  Standards , createStandard ,
  Branches , createBranch ,
  Works , createWork ,
  checkTables , pushSomeFakeInfo
}

