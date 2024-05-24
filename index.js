const gridContainerEl = document.querySelector('.grid-container');
const dimensionsEl = document.querySelector('.dimensions');
const sliderEL = document.querySelector('.slider');

const initialSliderValue = sliderEL.value;

function initialGrid() {
	dimensionsEl.innerHTML = initialSliderValue + 'x16'; // Display the default slider value
	gridSetup(initialSliderValue);
}

// Update the current slider value (each time you drag the slider handle)
// sliderEL.oninput = (e) => updateDimensions(e.target.value) second option for getting value

sliderEL.oninput = function () {
	updateDimensions(this.value);
};

function updateDimensions(gridVal) {
	updateDimensionsVal(gridVal);
	clearGrid();
	gridSetup(gridVal);
}

function updateDimensionsVal(value) {
	dimensionsEl.innerHTML = value + 'x' + value;
}

function clearGrid() {
	gridContainerEl.innerHTML = '';
}

let mouseDown = false;
document.body.onmousedown = () => {
  mouseDown = true;
  console.log('mousedown is true');
};
document.body.onmouseup = () => {
  mouseDown = false;
  console.log('mousedown is false');
};

function gridSetup(value) {
	for (let i = 0; i <= value * value - 1; i++) {
		const gridItem = document.createElement('div');
		gridItem.style.width = 500 / value + 'px';
		gridItem.style.height = 500 / value + 'px';
		gridItem.addEventListener('mousedown', (e) => addColor(gridItem, e));
		gridItem.addEventListener('mouseover', (e) => addColor(gridItem, e));
		gridContainerEl.appendChild(gridItem);
	}
}

function addColor(gridItem, e) {
	if (e.type = 'mouseover' && !mouseDown) return;
	else {
		gridItem.classList.add('grid-shading');
	}
}

initialGrid();
