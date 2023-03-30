const divGridContainer = document.querySelector('#gridContainer')

function createGrid() {
  for (i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 16; j++) {
      const square = document.createElement('div')
      square.classList.add('square');
      row.appendChild(square);
    }
    divGridContainer.appendChild(row);
  }
}

createGrid();


const squares = document.querySelectorAll('.square')
squares.forEach(square => {
  square.style.backgroundColor = 'white';
  square.style.display = 'flex';
  square.style.width = '20px';
  square.style.height = '20px';
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'black';
  });
});
