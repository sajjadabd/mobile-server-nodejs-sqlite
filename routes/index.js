var express = require('express');
const axios = require('axios')

var router = express.Router();

const sms = {
  username : 'parsiyan' ,
  password : 'parsiyan' ,
  // to : '09381308994' ,
  // text : 'Hey There' ,
  from : '30005800621055' ,
  api : '5'
}

function getRandomInteger(min, max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}


const sendSmsAxios = async (url) => {
  try {
    await axios({
      method: 'get',
      url: url,
      headers: {
        'Content-Type': 'text/xml;charset=utf-8'
      }
    });
    return "success"
  } catch (e) {
    return "failure"
  }
}



const sendSmsFetch = async () => {
  try {
    const result = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'text/xml'
        // 'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    // return response.json(); // parses JSON response into native JavaScript objects  
    return "success";
  } catch (e) {
    return "failure";
  }
}


/* GET home page. */
router.post('/login', async (req, res) => {
  console.log(req.body);
  const { to } = req.body;
  const text = getRandomInteger(100000,999999);
  console.log(text);
  // const utf8Decoder = new TextDecoder('utf-8');
  // const toUTF = utf8Decoder.decode(to)
  // const textUTF = utf8Decoder.decode(text)

  const url = `http://my.mizbansms.ir/wssms.asmx/sendsms` + 
    `?username=${sms.username}&password=${sms.password}&to=${to}` + 
    `&text=${text}&from=${sms.from}&api=${sms.api}`
  
  let result = await sendSmsAxios(url); 
  // let result = sendSmsFetch(url); 
  console.log(`send sms to : ${to}`);
  res.json({ 
    path : req.originalUrl ,
    result
  });
});

module.exports = router;
