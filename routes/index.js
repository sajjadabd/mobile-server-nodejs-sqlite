var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.json({ path : req.originalUrl } );
});

module.exports = router;
