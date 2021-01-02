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
const { Works , createWork } = require('./Works');

const syncTables = async () => {
  await sequelize.sync({ force: false });
  // Code here
};

/* const pushSomeFakeInfo = async () => {
  await createUser();
  await createChapter();
  await createQuestion();
  await createSavedQuestion();
  await createSavedStandards();
  await createSeason();
  await createSkill();
  await createStandard();
  await createWork();
} */

module.exports = {
  User , createUser ,
  Chapters , createChapter ,
  Questions , createQuestion ,
  SavedQuestions , createSavedQuestion ,
  SavedStandards , createSavedStandards ,
  Seasons , createSeason ,
  Skills , createSkill ,
  Standards , createStandard ,
  Works , createWork ,
  syncTables
}

