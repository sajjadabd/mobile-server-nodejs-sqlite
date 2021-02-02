var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

const convertLatexToJson = require('./convert');

const { User , createUser } = require('../../models/Users');
const { Chapters , createChapter  } = require('../../models/Chapters');
const { Questions , createQuestion } = require('../../models/Questions');
const { SavedQuestions , createSavedQuestion } = require('../../models/SavedQuestions');
const { SavedStandards , createSavedStandards } = require('../../models/SavedStandards');
const { Seasons , createSeason } = require('../../models/Seasons');
const { Skills , createSkill } = require('../../models/Skills');
const { Standards , createStandard } = require('../../models/Standards');
const { Branches , createBranch } = require('../../models/Branches');
const { Works , createWork } = require('../../models/Works');




router.post('/branches/add', async (req, res) => {
  
  const { branch_name } = req.body;

  try {
    await Branches.create({
      branch_name ,
    });

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






router.post('/standards/add', async (req, res) => {
  
  const { standard_name } = req.body;

  try {
    await Standards.create({
      standard_name ,
      number_of_seasons : 0
    });

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





router.post('/latex/add' , upload.single('questions') , async (req, res) => {
  
  console.log('-----------------File Recieved---------------------');
  console.log(req.file);

  console.log('----------------Processing Files-------------------');
  const file = req.file;
  let pathURL = path.join( req.file.destination , req.file.filename );
  console.log(pathURL);
  
  let jsonFile = await convertLatexToJson(pathURL);

  res.setHeader(
    'Content-Security-Policy',
    "script-src 'unsafe-inline' 'self'"
  );

  res.json({
    "success" : true,
    "link" : jsonFile
  })

});





router.post('/questions/add' , upload.single('questions') , async (req, res) => {
  
  console.log('-----------------File Recieved---------------------');
  console.log(req.file);

  console.log('----------------Processing Files-------------------');
  const file = req.file;
  let pathURL = path.join( req.file.destination , req.file.filename );

  let jsonFile = [];
  
  fs.readFile( pathURL , 'utf8' , async (err, data) => {
    if (err) {
      console.error(err)
      return;
    }

    try {
      jsonFile = JSON.parse(data);

      res.setHeader(
        'Content-Security-Policy',
        "script-src 'unsafe-inline' 'self'"
      );
    
      res.json({
        "success" : true,
        "link" : jsonFile
      })

    } catch (e) {
      res.json({
        "success" : false
      })
    }
    
  })

});




module.exports = router;
