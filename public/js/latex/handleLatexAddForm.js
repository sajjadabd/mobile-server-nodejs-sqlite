const localhost = 'http://localhost:3000';
const herokuUrl = 'https://fanniherfei.herokuapp.com';

const url = localhost + '/admin/rest/latex/add';

let addQuestions = document.getElementById('add');
let file = document.getElementById('file');
let reset = document.getElementById('reset');


let link = document.getElementById('link');

let formData = new FormData();

let printForm = () => {
  formData.forEach((value,key) => {
    // console.log(key);
    console.log(value);
  });
}


let upload = function (files) {
  // console.log(files);
  formData = new FormData();

  for (i = 0; i < files.length; i++) {
      // let name = files[i].name;
      formData.append('questions', files[i]);
  }
};


file.ondrop = function (e) {
    e.preventDefault();
    upload(e.dataTransfer.files);
    //console.log(e.dataTransfer.files);
    return false;
};

file.ondragover = function () {
  file.classList.add('green');
  return false;
};

file.ondragleave = function () {
  file.classList.remove('green');
  return false;
};

addQuestions.addEventListener('submit' , async (e) => {
  e.preventDefault();
  printForm();

  let result = await fetch(url, {
    method: 'POST',
    body: formData
  })

  result = await result.json();

  link.innerHTML = `<a target="_blank" href='${localhost + '/' + result.link}' download>download ${result.link}</a>`


  console.log(result);
})


reset.addEventListener('click' , () => {

  formData = new FormData();
  file.classList.remove('green');
  console.log('Reset Form ...');

})