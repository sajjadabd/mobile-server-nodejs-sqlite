var express = require('express');
let fs = require('fs');
var router = express.Router();

const { Standards , createStandard } = 
require('../models/Standards');

const { Questions , createQuestion } = 
require('../models/Questions');

const { Seasons , createSeason } = 
require('../models/Seasons');

/* GET home page. */
router.get('/', async (req, res) => {
  res.json({ path : req.originalUrl });
});


router.get('/standards', async (req, res) => {
  let result = [];
  try {
    result = await Standards.findAll();
    return result;
  } catch (e) {
    console.log(e);
  }
  res.json({ 
    path : req.originalUrl,
    result : result.dataValues
  } );
});



router.get('/seasons/:standard_id', async (req, res) => {
  const { standard_id } = req.params;

  let result = [];

  try {
    result = await Seasons.findAll({
      where : {
        standard_id 
      }
    });
    return result;
  } catch (e) {
    console.log(e);
  }

  res.json({ 
    path : req.originalUrl ,
    standard_id,
    result : result.dataValues
  });
});



/* router.get('/seasons/:standard_id/seasons/', async (req, res) => {
  const { standard_id } = req.params;

  let result = [];

  try {
    result = await Seasons.findAll({
      where : {
        standard_id 
      }
    });
    return result;
  } catch (e) {
    console.log(e);
  }

  res.json({ 
    path : req.originalUrl ,
    standard_id ,
    "result" : result
   });
}); */



router.get('/questions/:standard_id', async (req, res) => {
  const { standard_id } = req.params;

  let result = [];

  try {
    result = await Questions.findAll({
      where : {
        standard_id 
      }
    });
    return result;
  } catch (e) {
    console.log(e);
  }

  res.json({ 
    path : req.originalUrl ,
    standard_id ,
    result : result.dataValues,
    questions : true
   });
});



router.get('/questions/:standard_id/:season_id', async (req, res) => {
  const { standard_id , season_id } = req.params;

  let result = [];

  try {
    result = await Questions.findAll({
      where : {
        standard_id ,
        season_id
      }
    });
    return result;
  } catch (e) {
    console.log(e);
  }

  res.json({ 
    path : req.originalUrl ,
    standard_id ,
    season_id ,
    result : result.dataValues
   });
});



/* router.get('/standards/:standard_id/seasons/:season_id/questions', async (req, res) => {
  const { standard_id , season_id } = req.params;
  res.json({ 
    path : req.originalUrl ,
    standard_id ,
    season_id , 
    questions : true
   });
}); */


module.exports = router;

