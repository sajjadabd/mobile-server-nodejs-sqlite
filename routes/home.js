var express = require('express');
const { Op } = require("sequelize");

let fs = require('fs');
var router = express.Router();

const { Branches , createBranch} = 
require('../models/Branches');

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


router.get('/branches/getAll' , async (req, res) => {
  try {
    let result = await Branches.findAll();

    return res.json({
      "success" : true,
      result
    })
  } catch (e) {
    console.log("Error Happens")
  }

  return res.json({
    "success" : false
  })
});


router.get('/standards/:branch_id', async (req, res) => {
  const { branch_id } = req.params;

  let result = [];
  try {
    result = await Standards.findAll({
      where : {
        branch : branch_id
      }
    });
  } catch (e) {
    console.log(e);
  }

  console.log(branch_id);
  console.log(result)

  return res.json({ 
    path : req.originalUrl,
    result : result
  });
});




router.get('/standards', async (req, res) => {
  let result = [];
  try {
    result = await Standards.findAll();
  } catch (e) {
    console.log(e);
  }

  return res.json({ 
    path : req.originalUrl,
    result : result.dataValues
  } );
});



router.get('/seasons/:branch_id/:standard_id', async (req, res) => {
  const { branch_id , standard_id } = req.params;

  let result = [];

  try {
    result = await Seasons.findAll({
      where : {
        branch : branch_id ,
        standard : standard_id 
      }
    });
  } catch (e) {
    console.log(e);
  }

  return res.json({ 
    path : req.originalUrl ,
    branch : branch_id,
    standard : standard_id,
    result : result
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
  } catch (e) {
    console.log(e);
  }

  return res.json({ 
    path : req.originalUrl ,
    standard_id ,
    result : result.dataValues,
    questions : true
   });
});



router.get('/questions/:branch_id/:standard_id/:season_id' , async (req, res) => {
  
  const { 
    branch_id , 
    standard_id , 
    season_id 
  } = req.params;

  let result = [];

  try {
    result = await Questions.findAll({
      where : {
        branch : branch_id ,
        standard : standard_id ,
        season : season_id
      }
    });
  } catch (e) {
    console.log(e);
  }

  return res.json({ 
    path : req.originalUrl ,
    branch_id ,
    standard_id ,
    season_id ,
    result : result
   });
});



router.get('/exam/questions/:branch_id/:standard_id' , async (req, res) => {
  const { 
    branch_id , 
    standard_id , 
  } = req.params;

  let result = [];

  try {
    result = await Questions.findAll({
      where : {
        branch : branch_id ,
        standard : standard_id 
      }
    });
  } catch (e) {
    console.log(e);
  }

  return res.json({ 
    path : req.originalUrl ,
    branch_id ,
    standard_id ,
    result : result
   });
});






router.post('/exam/questions/:branch_id/:standard_id' , async (req, res) => {
  const { 
    branch_id , 
    standard_id , 
  } = req.params;

  console.log(req.body);

  const { seasons } = req.body;

  let selectedSeasons = seasons.map( (item,index) => {
    if( item == true ) {
      return index+1;
    } 
  });

  selectedSeasons = selectedSeasons.filter( (item, index) => {
    return item != undefined
  } );

  console.log(selectedSeasons);


  let result = [];

  try {
    result = await Questions.findAll({
      where : {
        branch : branch_id ,
        standard : standard_id ,
        season : {
          [Op.in] : selectedSeasons
        }
      }
    });
  } catch (e) {
    console.log(e);
  }

  return res.json({ 
    path : req.originalUrl ,
    branch_id ,
    standard_id ,
    result : result
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

