var express = require('express');
var router = express.Router();


let showRouter = require('./admin/show');
let restRouter = require('./admin/rest');


router.get('/', (req, res) => {
  // console.log(req.protocol,req.hostname,req.socket.localPort);  
  let url = req.originalUrl.replace(/\/+$/g, '');
  let mainURL = '';

  if ( req.hostname == 'localhost' )  {
    mainURL = `${req.protocol}://${req.hostname}:${req.socket.localPort}${url}/show/db/users`
  } else {
    mainURL = `${req.protocol}://${req.hostname}${url}/show/db/users`
  }
  

  // res.json({ path : mainURL })
  res.redirect( mainURL );
});

router.use('/show' , showRouter);
router.use('/rest' , restRouter);


module.exports = router;
