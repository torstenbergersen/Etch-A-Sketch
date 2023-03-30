const divGridContainer = document.querySelector('#container')

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

divGridContainer.style.display = 'flex'
divGridContainer.style.justifyContent = 'center'
divGridContainer.style.backgroundColor = 'grey'
divGridContainer.style.alignItems = 'center'

const squares = document.querySelectorAll('.square')
squares.forEach(square => {
  square.style.backgroundColor = 'white';
  square.style.display = 'flex';
  square.style.width = '50px';
  square.style.height = '50px';
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'black';
  });
});
