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
  let result = await createWork(req.body);
  res.json({ 
    path : req.originalUrl,
    result : result
  });
});
  

module.exports = router;
