var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/questions', async (req, res) => {
  res.json({ path : req.originalUrl } );
});


router.get('/standards', async (req, res) => {
  res.json({ path : req.originalUrl } );
});


module.exports = router;
