var express = require('express');
var router = express.Router();

const { SavedQuestions , createSavedQuestion } = 
require('../models/SavedQuestions');

const { SavedStandards , createSavedStandards } = 
require('../models/SavedStandards');


/* GET home page. */
router.get('/questions', async (req, res) => {
  const { user_id } = req.body;

  let result = [];

  try {
    result = await SavedQuestions.findAll({
      where : {
        user_id 
      }
    });
    return result;
  } catch (e) {
    console.log(e);
  }
  
  res.json({ 
    path : req.originalUrl ,
    result : result.dataValues
   } );
});


router.get('/standards', async (req, res) => {
  const { user_id } = req.body;

  let result = [];

  try {
    result = await SavedStandards.findAll({
      where : {
        user_id 
      }
    });
    return result;
  } catch (e) {
    console.log(e);
  }
  
  res.json({ 
    path : req.originalUrl ,
    result : result.dataValues
   } );
});


module.exports = router;
