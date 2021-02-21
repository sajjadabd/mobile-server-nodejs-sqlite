var express = require('express');
var router = express.Router();

const { User , createUser  } = require('../models/Users');


/* GET home page. */
router.get('/', async (req, res) => {
  res.json({ path : req.originalUrl } );
});



router.get('/getUser/:user_id', async (req, res) => {
  console.log(req.body);
  const { user_id } = req.params

  let result = await User.findOne({ 
    id : user_id
  });
  
  return res.json({ 
    path : req.originalUrl,
    result : result
  });
});




router.post('/check', async (req, res) => {
  console.log(req.body);
  let result = await User.findOne({ 
    ...req.body
  });
  res.json({ 
    path : req.originalUrl,
    result : result.dataValues
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
  let result;
  //let result = await createUser(req.body);
  try {
    result = await User.create({
      username : null, 
      phone_number : data.phone_number,
      sms : null,
      province : null,
      city : null,
      gender : null,
      verified : false,
      blue_tick : false,
      image_url : null,
    });
    // newUser.save();
    // console.log(newUser);
  } catch (e) {
    console.log(e);
  }

  res.json({ 
    path : req.originalUrl,
    result : result.dataValues
  });
});



router.post('/update' , async (req, res) => {

  console.log('Request To Update User ...');
  console.log(req.body);

  const { phone , sms , updatedValues } = req.body; 

  let result = [];

  try {
    result = await User.update(
      updatedValues , {
      where: {
        phone_number : phone,
        sms : sms
      }
    });
  } catch (e) {
    
  }

  res.json({ 
    path : req.originalUrl,
    result : result.dataValues
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
