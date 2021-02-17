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

      const header = jsonFile[0];
      const content = jsonFile.slice(1,jsonFile.length);

      let resultForBranch = undefined;
      let resultForStandard = undefined;
      let resultForSeason = undefined;

      try {

        

        let testIfBranchIsExists = await Branches.findOne({
          where : {
            branch_name : header.branch_name
          }
        });

        console.log('testIfBranchIsExists :' , testIfBranchIsExists);

        if( testIfBranchIsExists == null ) {
          resultForBranch = await Branches.create({
            branch_name : header.branch_name
          });
        } else {
          resultForBranch = testIfBranchIsExists;
        }
        


        let testIfStandardIsExists = await Standards.findOne({
          where : {
            standard_name : header.standard_name, 
          }
        });


        console.log(`testIfStandardIsExists :` ,  testIfStandardIsExists);

        if ( testIfStandardIsExists == undefined ) {
          resultForStandard = await Standards.create({
            branch : resultForBranch.dataValues.id,
            standard_name : header.standard_name, 
            number_of_seasons : 1,
          });
        } else {
          await Standards.increment(
            'number_of_seasons'
            , {
              by : 1 ,
              where : {
                id :  testIfStandardIsExists.dataValues.id
              }
            }
          );
          resultForStandard = testIfStandardIsExists;
        }
        

        resultForSeason = await Seasons.create({
          branch : resultForBranch.dataValues.id,
          standard : resultForStandard.dataValues.id,
          season_number : header.season_number.split(' ')[1],
          season_title : header.season_title,
        });

        

        content.map( async (item, index) => {
          await Questions.create({ 
            branch : resultForBranch.dataValues.id,
            standard : resultForStandard.dataValues.id,
            season : resultForSeason.dataValues.season_number,
            level : item.level,
            question : item.question,
            first : item.first,
            second : item.second,
            third : item.third,
            fourth : item.fourth
          });
        });

      } catch (e) {
        console.log(e);
      }

      



      res.setHeader(
        'Content-Security-Policy',
        "script-src 'unsafe-inline' 'self'"
      );
    
      res.json({
        "success" : true,
        "header" : jsonFile[0],
        "content" : jsonFile.slice(1,jsonFile.length)
      })

    } catch (e) {
      res.json({
        "success" : false
      })
    }
    
  })

});




module.exports = router;
