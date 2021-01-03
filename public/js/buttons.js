const herokuHost = 'https://fanniherfei.herokuapp.com/admin/show/db/'
const localHost = 'http://localhost:3000/admin/show/db/'

const mainHost = herokuHost;

const buttons = [
  { title : 'Users' , url : mainHost + 'users'  },
  { title : 'Standards' , url : mainHost + 'standards' },
  { title : 'Seasons' , url : mainHost + 'seasons' },
  { title : 'Questions' , url : mainHost + 'questions' },
  { title : 'Skills' , url : mainHost + 'skills' },
  { title : 'Works' , url : mainHost + 'works' },
]


const fetchServer = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const result = await response.json();
    return result;
  } catch (e) {
    //return "failure";
  }
}


const makeTable = (result) => {
  let content = `
    <table>
    <thead>
    `;
    for ( let each in result[0] ) {
      content += `<th>${each}</th>`
    }
    content += `</thead>`
    content += `<tbody>`

    result.map((item , index) => {
      content += `<tr>`;
      for( let each in item ) {
        content += `<td>${item[each]}</td>`
      }
      content += `</tr>`;
    });
    
    content += `</tbody></table>`

    let tablePosition = document.getElementById('table');
    tablePosition.innerHTML = content;
}

const addButtonsToPage = () => {
  let place = document.getElementById('buttons');
  // console.log(place);
  let content = buttons.map((item ,index) => {
    return `
    <a 
    href="${item.url}"
    data-index="${index}" 
    data-url="${item.url}">
      ${item.title}
    </a>
    `
  }).join('');

  place.innerHTML = content;
}

addButtonsToPage();

let allButtons = document.querySelectorAll('button');

allButtons.forEach((item) => {
  // console.log(item);
  item.addEventListener('click', async () => {
    // console.log(item.dataset.index);
    // console.log(buttons[item.dataset.index]);
    // let url = item.dataset.url;
    // const response = await fetchServer(url);
    // const { result } = response ;
    // console.log(result);

    // makeTable(result);
  });
})


