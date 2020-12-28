// const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../database');

const { User , createUser , syncTables , checkUsersTable } = require('./Users');
const { Chapters , createChapter  } = require('./Chapters');
const { Questions , createQuestion } = require('./Questions');
const { SavedQuestions , createSavedQuestion } = require('./SavedQuestions');
const { SavedSubChapters , createSavedSubChapter } = require('./SavedSubChapters');
const { Seasons , createSeason } = require('./Seasons');
const { Skills , createSkill } = require('./Skills');
const { SubChapters , createSubChapter } = require('./SubChapters');
const { Works , createWork } = require('./Works');

const pushSomeFakeInfo = async () => {
  // if( checkUsersTable() ) {
  //   await syncTables();
  // } else {
    await createUser();
    await createChapter();
    await createQuestion();
    await createSavedQuestion();
    await createSavedSubChapter();
    await createSeason();
    await createSkill();
    await createSubChapter();
    await createWork();
  // }
}

module.exports = {
  User , createUser ,
  Chapters , createChapter ,
  Questions , createQuestion ,
  SavedQuestions , createSavedQuestion ,
  SavedSubChapters , createSavedSubChapter ,
  Seasons , createSeason ,
  Skills , createSkill ,
  SubChapters , createSubChapter ,
  Works , createWork ,
  pushSomeFakeInfo,
}