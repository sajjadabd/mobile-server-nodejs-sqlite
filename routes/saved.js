var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/questions', (req, res) => {
  res.json({ path : req.originalUrl } );
});


router.get('/standards', (req, res) => {
  res.json({ path : req.originalUrl } );
});

module.exports = router;
