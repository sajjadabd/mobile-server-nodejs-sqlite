var express = require('express');
const { sequelize } = require('../database');
const { QueryTypes } = require('sequelize');


var router = express.Router();

const { SavedQuestions , createSavedQuestion } = 
require('../models/SavedQuestions');

const { SavedStandards , createSavedStandards } = 
require('../models/SavedStandards');

const { Standards , createStandard } = 
require('../models/Standards');


/* GET home page. */
router.get('/questions/:user_id', async (req, res) => {
  const { user_id } = req.params;

  let result = [];

  try {
    /* result = await SavedQuestions.findAll({
      where : {
        user_id 
      }
    }); */
    result = await sequelize.query(
      `SELECT * FROM savedquestions
      LEFT JOIN questions
      ON savedquestions.question_id = questions.id
      WHERE savedquestions.user_id = :user_id` , 
      { 
        replacements: { user_id : user_id } ,
        type: QueryTypes.SELECT 
      }
    );
  } catch (e) {
    console.log(e);
  }
  
  res.json({ 
    path : req.originalUrl ,
    result : result
  });
  
});


router.get('/standards/:user_id', async (req, res) => {
  const { user_id } = req.params;

  let result = [];

  try {
    /* result = await SavedStandards.findAll({
      where : {
        user_id : user_id
      }
    }); */
    result = await sequelize.query(
      `SELECT * FROM savedstandards
      LEFT JOIN standards
      ON savedstandards.standard_id = standards.id
      WHERE savedstandards.user_id = :user_id` , 
      { 
        replacements: { user_id : user_id } ,
        type: QueryTypes.SELECT 
      }
    );
    /* result = await SavedStandards.findAll({
      where : {
        user_id : user_id
      }, 
      include : [
        { 
          model : Standards , 
          as : 'standards', 
          where: { 
            id : standard_id
          },   
          required : false
        }
      ]
    }); */
  } catch (e) {
    console.log(e);
  }
  
  res.json({ 
    path : req.originalUrl ,
    result : result
   } );
});




router.get('/add/standards/:branch_id/:standard_id/:user_id', async (req, res) => {
  const { branch_id , standard_id , user_id } = req.params;

  let result = [];
  try {
    result = await SavedStandards.create({
      branch_id : branch_id ,
      standard_id : standard_id , 
      user_id : user_id , 
      saved : true,
    });
  } catch (e) {
    console.log(e);
  }

  console.log(result)

  return res.json({ 
    path : req.originalUrl,
    result : result , 
    success : true
  });
});


router.get('/remove/standards/:branch_id/:standard_id/:user_id', async (req, res) => {
  const { branch_id , standard_id , user_id } = req.params;

  console.log(req.params);

  let result = [];
  try {
    result = await SavedStandards.destroy({
      where: {
        branch_id : branch_id ,
        standard_id : standard_id , 
        user_id : user_id
      }
    });
  } catch (e) {
    console.log(e);
  }

  console.log(result)

  return res.json({ 
    path : req.originalUrl ,
    result : result , 
    success : true
  });
});






router.get('/add/questions/:question_id/:user_id', async (req, res) => {
  const { question_id , user_id } = req.params;

  let result = [];
  try {
    result = await SavedQuestions.create({
      question_id : question_id ,
      user_id : user_id ,
      saved : true ,
    });
  } catch (e) {
    console.log(e);
  }

  console.log(result)

  return res.json({ 
    path : req.originalUrl,
    result : result , 
    success : true
  });
});




router.get('/remove/questions/:question_id/:user_id', async (req, res) => {
  const { question_id , user_id } = req.params;

  let result = [];
  try {
    result = await SavedQuestions.destroy({
      where: {
        question_id : question_id ,
        user_id : user_id
      }
    });
  } catch (e) {
    console.log(e);
  }

  console.log(result)

  return res.json({ 
    path : req.originalUrl ,
    result : result , 
    success : true
  });
});







module.exports = router;
