const grid = document.querySelector('#grid');
const gridSizeSlider = document.getElementById("grid-size-slider");
const gridSizeDisplay = document.getElementById("grid-size-display");

gridSizeSlider.addEventListener("input", () => {
  const gridSize = gridSizeSlider.value;
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  gridSizeDisplay.textContent = `${gridSize}x${gridSize}`;
});

