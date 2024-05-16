const gridContainerEl = document.querySelector('.grid-container');
const dimensionsEl = document.querySelector('.dimensions');
const sliderEL = document.querySelector('.slider');

dimensionsEl.innerHTML = sliderEL.value + "x16"; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
sliderEL.oninput = function() {
  dimensionsEl.innerHTML = this.value + "x" + this.value;
}



for (let i = 0; i <= sizeInputEl.value; i++) {
  const gridItem = document.createElement('div');
  gridContainerEl.appendChild(gridItem);
}