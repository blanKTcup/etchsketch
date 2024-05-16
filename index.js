const gridContainerEl = document.querySelector('.grid-container');


for (let i = 0; i <= sizeInputEl.value; i++) {
  const gridItem = document.createElement('div');
  gridContainerEl.appendChild(gridItem);
}