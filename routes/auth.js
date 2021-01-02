var express = require('express');
const axios = require('axios')
var router = express.Router();

const { User , createUser } = require('../models/Users');

const sms = {
  username : 'parsiyan' ,
  password : 'parsiyan' ,
  // to : '09381308994' ,
  // text : 'Hey There' ,
  from : '50002120222220' ,
  api : '41'
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
    //return "success"
  } catch (e) {
    //return "failure"
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
    //return "success";
  } catch (e) {
    //return "failure";
  }
}


/* GET home page. */
router.post('/signup', async (req, res) => {
  console.log(req.body);
  const { to } = req.body;
  const text = getRandomInteger(100000,999999);
  console.log(text);

  let resultFind;

  try {
    resultFind = await User.findOne({
      where : {
        phone_number : to
      }
    })

    console.log(resultFind);
  } catch (e) {
    console.log("Error On Finding Users")
  }

  try {
    
    if ( resultFind == undefined ) {
      await User.create({
        username : null , 
        phone_number : to,
        sms : `${text}`,
        province : null,
        city : null,
        gender : "male",
        verified : false,
        blue_tick : false,
        image_url : null,
      })
    }

  } catch (e) {
    console.log("Error On Creating Users")
  }

  try {
    const url = `http://my.mizbansms.ir/wssms.asmx/sendsms` + 
    `?username=${sms.username}&password=${sms.password}&to=${to}` + 
    `&text=${text}&from=${sms.from}&api=${sms.api}`

    await sendSmsAxios(url); 
    // let result = sendSmsFetch(url); 
    console.log(`send sms to : ${to}`);
  } catch (e) {
    console.log("Error On Sending Sms")
  }
  

  res.json({ 
    path : req.originalUrl ,
  });
});







/* GET home page. */
router.post('/login', async (req, res) => {
  console.log(req.body);
  const { phone , sms } = req.body;
  // const text = getRandomInteger(100000,999999);
  // console.log(text);

  let resultFind;

  try {
    resultFind = await User.findOne({
      where : {
        phone_number : phone,
        sms : sms
      }
    })

    console.log(resultFind);
  } catch (e) {
    console.log("Error On Finding Users")
  }

  try {
    
    if ( resultFind == undefined ) {
      return res.json({
        success : false
      })
    } else {
      return res.json({
        success : true
      })
    }

  } catch (e) {
    console.log("Error On Creating Users")
    return res.json({ 
      success : "false" ,
    });
  }
  
  
});






module.exports = router;
