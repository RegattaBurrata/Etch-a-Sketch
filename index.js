
let boxSize = '16'
const gridContainer = document.querySelector('.gridContainer');
const chooseGridSize = document.querySelector('.gridSizeButton')
const clear = document.querySelector('.clearButton');

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

const boxOn = (e) => {
    console.log(e);
    e.srcElement.classList.add('boxOn');
}

const mouseOver = () => {
    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach((box) => { box.addEventListener('mouseover', boxOn) })
}

mouseOver();

const clearGridSize = () => {
    gridContainer.innerHTML = ('');
}

chooseGridSize.addEventListener('click', function () {
    boxSize = prompt('Enter the number of rows');
    clearGridSize();
    if (boxSize < 100) {
        createGrid(boxSize);
        mouseOver();
    }
    else {
        alert('Must be a number below 100!');
    }
});

clear.addEventListener('click', function () {
    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach((box) => { box.classList.remove('boxOn') })
})
