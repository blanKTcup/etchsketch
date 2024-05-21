const gridContainerEl = document.querySelector('.grid-container');
const dimensionsEl = document.querySelector('.dimensions');
const sliderEL = document.querySelector('.slider');

const initialSliderValue = sliderEL.value;

function initialGrid() {
  
  dimensionsEl.innerHTML = initialSliderValue + "x16"; // Display the default slider value
  gridSetup(initialSliderValue);
}



// Update the current slider value (each time you drag the slider handle)
// sliderEL.oninput = (e) => updateDimensions(e.target.value)

sliderEL.oninput = function() {
  updateDimensions(this.value);
}

function updateDimensions(gridVal) {
  updateDimensionsVal(gridVal);
  clearGrid();
  gridSetup(gridVal);
}

function updateDimensionsVal(value) {
  dimensionsEl.innerHTML = value + "x" + value;
}

function clearGrid() {
  gridContainerEl.innerHTML = '';
}

function gridSetup(value) {
  for (let i = 0; i <= (value * value) - 1; i++) {
    const gridItem = document.createElement('div');
    gridContainerEl.appendChild(gridItem);
    gridItem.style.width = (500/value) + 'px';
    gridItem.style.height = (500/value) + 'px';
    gridItem.addEventListener('mouseover');
    gridItem.addEventListener('mousedown', () => addColor(gridItem));
    if ('mousedown' === true) {
      addColor(gridItem);
    }
    // gridItem.addEventListener('mouseup', () => unDrag(gridItem));
  }
}

function addColor(gridItem) {
  gridItem.classList.add('grid-shading');
}

// function unDrag(gridItem) {
//   gridItem.removeEventListener('mouseover');
// }

initialGrid();

