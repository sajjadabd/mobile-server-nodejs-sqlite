let addSeason = document.getElementById('add');

addSeason.addEventListener('submit' , (e) => {
  e.preventDefault();
  new FormData(addSeason)
})

addSeason.addEventListener('formdata' , (e) => {

  let data = e.formData;
  // let arr = Array.from(data.values());
  // console.log(arr);
  let formValues = {}

  data.forEach((value,key) => {
    formValues[key] = value;
    // formValues.push({ [key] : value})
  });

  console.log(formValues);

  /* for (let value of data.values()) {
    console.log(value);
  } */
  
});