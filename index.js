const mainForTitles = document.querySelector("main");
const fetchBooks = () => {
  fetch("https://anapioficeandfire.com/api/books").then(res => res.json()).then(data => renderBooks(data)).catch(err=>console.log(err));
}

function renderBooks(data) {
  console.log(data);
  for(let i = 0; i < data.length; i++){
    let h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${data[i].name}</h2>`;
    mainForTitles.appendChild(h2)
  }
}

  fetchBooks()
