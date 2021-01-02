var express = require('express');
var router = express.Router();

const { Works , createWork } = require('../models/Works');


/* GET home page. */
router.get('/', async (req, res) => {
  res.json({ 
    path : req.originalUrl 
  });
});


router.get('/deleteAll', async (req, res) => {
  // console.log(req.body);
  let result = await Works.destroy({
    truncate: true
  });
  res.json({ 
    path : req.originalUrl,
    ...result
  });
});


router.post('/create', async (req, res) => {
  console.log(req.body);

  let result = [];

  try {
    result = await Works.create({ 
      ...req.body
      // user_id : data.user_id , 
      // province : data.province,
      // city : data.city,
      // gender : data.gender,
      // work_title : data.work_title,
      // skills : data.skills
    });
    // newUser.save();
    // console.log(newUser);
  } catch (e) {
    console.log(e);
  }

  res.json({ 
    path : req.originalUrl,
    result : result
  });
});
  

module.exports = router;
