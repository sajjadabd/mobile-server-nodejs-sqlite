var express = require('express');
var router = express.Router();

const { User , createUser } = require('../../models/Users');
const { Chapters , createChapter  } = require('../../models/Chapters');
const { Questions , createQuestion } = require('../../models/Questions');
const { SavedQuestions , createSavedQuestion } = require('../../models/SavedQuestions');
const { SavedStandards , createSavedStandards } = require('../../models/SavedStandards');
const { Seasons , createSeason } = require('../../models/Seasons');
const { Skills , createSkill } = require('../../models/Skills');
const { Standards , createStandard } = require('../../models/Standards');
const { Works , createWork } = require('../../models/Works');


router.post('/standards/add', async (req, res) => {
  
  const { standard_name } = req.body;

  try {
    await Standards.create({
      standard_name ,
      number_of_seasons : 0
    });
    // console.log(result);
    return res.json({
      "success" : true
    })
  } catch (e) {
    console.log("Error Happens")
  }

  return res.json({
    "success" : false
  })
});




module.exports = router;

