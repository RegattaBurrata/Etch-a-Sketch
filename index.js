
const boxSize = '16'
const gridContainer = document.querySelector('.gridContainer');

const createBoxDiv = () => {
    const box = document.createElement('div');
    box.className = 'box';
    gridContainer.appendChild(box);
}

const createGrid = (size) => {
    for (let i = 0; i < size*size; i++) {
        createBoxDiv();
        gridContainer.style.gridTemplateColumns = (`repeat(${size}, 1fr)`);
        gridContainer.style.gridTemplateRows = (`repeat(${size}, 1fr)`);
    }
}

createGrid(boxSize);