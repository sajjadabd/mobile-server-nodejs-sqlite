var express = require('express');
var router = express.Router();

// 'https://fanniherfei.herokuapp.com/'

const { User , createUser } = require('../../models/Users');
const { Chapters , createChapter  } = require('../../models/Chapters');
const { Questions , createQuestion } = require('../../models/Questions');
const { SavedQuestions , createSavedQuestion } = require('../../models/SavedQuestions');
const { SavedStandards , createSavedStandards } = require('../../models/SavedStandards');
const { Seasons , createSeason } = require('../../models/Seasons');
const { Skills , createSkill } = require('../../models/Skills');
const { Branches , createBranch } = require('../../models/Branches');
const { Standards , createStandard } = require('../../models/Standards');
const { Works , createWork } = require('../../models/Works');


router.get('/', (req, res) => {
  let url = req.originalUrl.replace(/\/+$/g, '');

  let mainURL = '';

  if ( req.hostname == 'localhost' )  {
    mainURL = `${req.protocol}://${req.hostname}:${req.socket.localPort}${url}/show/db/users`
  } else {
    mainURL = `${req.protocol}://${req.hostname}${url}/show/db/users`
  }
  // res.json({ path : mainURL })
  res.redirect( mainURL );
});


router.get('/db/users', async (req, res) => {
  let result = [];
  try {
    result = await User.findAll();
    // console.log(result);
  } catch (e) {
    console.log("Error Happens");
  }

  res.setHeader(
    'Content-Security-Policy',
    "script-src 'unsafe-inline' 'self'"
  );

  return res.render('show', { result : JSON.stringify(result) });

});



router.get('/db/branches', async (req, res) => {
  let result = [];
  try {
    result = await Branches.findAll();
    // console.log(result);
  } catch (e) {
    console.log("Error Happens")
  }

  res.setHeader(
    'Content-Security-Policy',
    "script-src 'unsafe-inline' 'self'"
  );

  return res.render( 'branches' , { result : JSON.stringify(result) } );

});




router.get('/db/standards', async (req, res) => {
  let result = [];
  try {
    result = await Standards.findAll();
    // console.log(result);
  } catch (e) {
    console.log("Error Happens")
  }
  res.setHeader(
    'Content-Security-Policy',
    "script-src 'unsafe-inline' 'self'"
  );

  return res.render('standards', { result : JSON.stringify(result) });

});




router.get('/db/seasons', async (req, res) => {
  let result = [];
  try {
    result = await Seasons.findAll();
    // console.log(result);
  } catch (e) {
    console.log("Error Happens")
  }
  res.setHeader(
    'Content-Security-Policy',
    "script-src 'unsafe-inline' 'self'"
  );

  return res.render('seasons', { result : JSON.stringify(result) });

});



router.get('/db/questions', async (req, res) => {
  let result = [];
  try {
    result = await Questions.findAll();
    // console.log(result);
  } catch (e) {
    console.log("Error Happens")
  }
  res.setHeader(
    'Content-Security-Policy',
    "script-src 'unsafe-inline' 'self'"
  );

  return res.render('questions', { result : JSON.stringify(result) });

});





router.get('/db/latex', async (req, res) => {
  let result = [];
  
  res.setHeader(
    'Content-Security-Policy',
    "script-src 'unsafe-inline' 'self'"
  );

  return res.render('latex', { result : JSON.stringify(result) });

});




router.get('/db/skills', async (req, res) => {
  let result = [];
  try {
    result = await Skills.findAll();
    // console.log(result);
  } catch (e) {
    console.log("Error Happens")
  }
  res.setHeader(
    'Content-Security-Policy',
    "script-src 'unsafe-inline' 'self'"
  );

  return res.render('show', { result : JSON.stringify(result) });

});



router.get('/db/works', async (req, res) => {
  let result = [];
  try {
    result = await Works.findAll();
    // console.log(result);
  } catch (e) {
    console.log("Error Happens")
  }
  res.setHeader(
    'Content-Security-Policy',
    "script-src 'unsafe-inline' 'self'"
  );
  
  return res.render('show', { result : JSON.stringify(result) });

});





router.get( '/db/saved/questions' , async (req, res) => {
  let result = [];
  try {
    result = await SavedQuestions.findAll();
    // console.log(result);
  } catch (e) {
    console.log("Error Happens")
  }
  
  res.setHeader(
    'Content-Security-Policy',
    "script-src 'unsafe-inline' 'self'"
  );
  
  return res.render('savedQuestions', { result : JSON.stringify(result) });

});





router.get( '/db/saved/standards' , async (req, res) => {
  let result = [];
  try {
    result = await SavedStandards.findAll();
    // console.log(result);
  } catch (e) {
    console.log("Error Happens")
  }

  res.setHeader(
    'Content-Security-Policy',
    "script-src 'unsafe-inline' 'self'"
  );
  
  return res.render('savedStandards', { result : JSON.stringify(result) });
});




module.exports = router;