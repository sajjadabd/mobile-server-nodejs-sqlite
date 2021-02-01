const localhost = 'http://localhost:3000';
const herokuUrl = 'https://fanniherfei.herokuapp.com/'

const url = localhost + '/admin/rest/standards/add';

let addStandard = document.getElementById('add');
addStandard.addEventListener('submit' , (e) => {
  e.preventDefault();
  new FormData(addStandard);
})

addStandard.addEventListener('formdata' , async (e) => {

  let data = e.formData;
  // let arr = Array.from(data.values());
  // console.log(arr);
  let formValues = {};

  data.forEach((value,key) => {
    formValues[key] = value;
    // formValues.push({ [key] : value})
  });

  console.log(formValues);

  await fetch( url , {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formValues),
  })


  location.reload(); 

  /* for (let value of data.values()) {
    console.log(value);
  } */

});