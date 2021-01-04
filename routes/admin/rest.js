var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

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



router.post('/questions/add' , upload.single('questions') , async (req, res) => {
  
  console.log('-----------------File Recieved---------------------');
  console.log(req.file);

  console.log('----------------Processing Files-------------------');
  const file = req.file;
  let pathURL = path.join( req.file.destination , req.file.filename );
  console.log(pathURL);
  
  await fs.readFile( pathURL , 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data);

    fs.unlink( pathURL , () => {
      console.log('file deleted');
    });
  })

  try {
    // await Questions.create({
    //   standard_name ,
    //   number_of_seasons : 0
    // });
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

