// create a pragraph element and appends it
function createElement(data) {
  const paragraph = document.createElement('p');
  paragraph.textContent = data;
  document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
  const xhr = new XMLHttpRequest();

  const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

  xhr.open('GET', url, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const pages = data.query.pages;
      const page = pages[Object.keys(pages)[0]];
      const absorb = page.absorb;

      callback(absorb);
  }
};

xhr.send();
}

queryWikipedia(createElement);