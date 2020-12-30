var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.json({ path : req.originalUrl } );
});


router.post('/check', (req, res) => {
  console.log(req.body);
  res.json({ 
    path : req.originalUrl,
    ...req.body 
  });
});



router.post('/create', (req, res) => {
  console.log(req.body);
  res.json({ 
    path : req.originalUrl,
    ...req.body 
  });
});



router.post('/update', (req, res) => {
  console.log(req.body);
  res.json({ 
    path : req.originalUrl,
    ...req.body 
  });
});


module.exports = router;
