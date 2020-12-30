var express = require('express');
let fs = require('fs');
var router = express.Router();


/* GET home page. */
router.get('/', async (req, res) => {
  res.json({ path : req.originalUrl } );
});



router.get('/standards', async (req, res) => {
  res.json({ path : req.originalUrl } );
});



router.get('/standards/:standard_id', async (req, res) => {
  const { standard_id } = req.params;
  res.json({ 
    path : req.originalUrl ,
    standard_id
  });
});



router.get('/standards/:standard_id/seasons/', async (req, res) => {
  const { standard_id } = req.params;
  res.json({ 
    path : req.originalUrl ,
    standard_id 
   });
});



router.get('/standards/:standard_id/seasons/questions', async (req, res) => {
  const { standard_id } = req.params;
  res.json({ 
    path : req.originalUrl ,
    standard_id ,
    questions : true
   });
});



router.get('/standards/:standard_id/seasons/:season_id', async (req, res) => {
  const { standard_id , season_id } = req.params;
  res.json({ 
    path : req.originalUrl ,
    standard_id ,
    season_id
   });
});



router.get('/standards/:standard_id/seasons/:season_id/questions', async (req, res) => {
  const { standard_id , season_id } = req.params;
  res.json({ 
    path : req.originalUrl ,
    standard_id ,
    season_id , 
    questions : true
   });
});


module.exports = router;

