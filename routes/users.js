var express = require('express');
var router = express.Router();

const { User , createUser  } = require('../models/Users');


/* GET home page. */
router.get('/', async (req, res) => {
  res.json({ path : req.originalUrl } );
});


router.post('/check', async (req, res) => {
  console.log(req.body);
  let result = await User.findOne({ 
    ...req.body
  });
  res.json({ 
    path : req.originalUrl,
    result 
  });
});



router.get('/deleteAll', async (req, res) => {
  // console.log(req.body);
  let result = await User.destroy({
    truncate: true
  });
  res.json({ 
    path : req.originalUrl,
    ...result
  });
});


router.post('/create', async (req, res) => {
  console.log(req.body);
  let result = await createUser(req.body);
  res.json({ 
    path : req.originalUrl,
    result : result.dataValues
  });
});



router.post('/update', async (req, res) => {
  console.log(req.body);
  res.json({ 
    path : req.originalUrl,
    ...req.body 
  });
});


router.post('/updateImage', async (req, res) => {
  console.log(req.body);
  res.json({ 
    path : req.originalUrl,
    ...req.body 
  });
});





module.exports = router;
