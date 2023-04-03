const grid = document.querySelector("#grid");
const drawButton = document.querySelector("#draw");
const rainbowButton = document.querySelector("#rainbow");
const clearButton = document.querySelector("#clear");
const gridSizeSlider = document.querySelector("#grid-size-slider");
const sizeValue = document.querySelector("#size-value");

let currentColor = "#000000"; 

drawButton.addEventListener("click", () => {
  drawButton.classList.add("active"); 
  rainbowButton.classList.remove("active"); 
  clearButton.classList.remove("active");
});

rainbowButton.addEventListener("click", () => {
  rainbowButton.classList.add("active");
  drawButton.classList.remove("active");
  clearButton.classList.remove("active");
});

clearButton.addEventListener("click", () => {
  clearButton.classList.add("active");
  drawButton.classList.remove("active");
  rainbowButton.classList.remove("active");
});

function createGrid(size) {
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
  }
  sizeValue.textContent = `${size} x ${size}`;
}

function clearGrid() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "#ffffff"; 
  });
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

function setColor(cell) {
  if (drawButton.classList.contains("active")) {
    cell.style.backgroundColor = currentColor;
  } else if (rainbowButton.classList.contains("active")) {
    cell.style.backgroundColor = getRandomColor();
  }
}

clearButton.addEventListener("click", clearGrid);

gridSizeSlider.addEventListener("input", () => {
  const size = gridSizeSlider.value;
  createGrid(size);
  clearGrid();
});

createGrid(16);

grid.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("cell")) {
    setColor(event.target);
  }
});
