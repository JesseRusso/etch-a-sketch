let size = 32;
let isDown = false;
let gridArray = [];
let drawMode = 0;
let slider = document.getElementById("range");
let sliderCount = document.getElementById("slider-value");
const grid = document.getElementById("grid-container");

document.body.onmouseup = () => (isDown = false);
document.body.onmousedown = () => (isDown = true);
document.body.addEventListener("dragstart", (e) => {
    e.preventDefault();
});

document.getElementById("reset-button").addEventListener("click", makeGrid);
document.getElementById("erase-button").addEventListener("click", (e) => {drawMode = 2});
document.getElementById("rainbow-button").addEventListener("click", (e) => {drawMode = 1});
document.getElementById("black-button").addEventListener("click", (e) => {drawMode = 0});
slider.addEventListener("change", function () {
    size = slider.value;
    //sliderCount.innerText = slider.value;
    makeGrid()
})
makeGrid()

function makeGrid() {
    gridArray.forEach(clearGrid)
    gridArray = [];
    drawMode = 0;

    for (let i = 0; i < size * size; i++) {
        let div = document.createElement('div');
        div.style.backgroundColor = 'lightgray';
        div.addEventListener("mouseover", function () {
            if (isDown) {
                switch (drawMode) {
                    case 0:
                        div.style.backgroundColor = 'black';
                        break;
                    case 1:
                        div.style.backgroundColor = `rgb(${randomColour()}, ${randomColour()}, ${randomColour()})`;
                        break;
                    case 2:
                        div.style.backgroundColor = 'lightgray';
                        break;
                    default:
                        div.style.backgroundColor = 'black';
                        break;
                }
            }
        });
        div.addEventListener("mousedown", (e) => {
            if (isDown) {
                switch (drawMode) {
                    case 0:
                        div.classList.remove('uncoloured');
                        div.classList.add('coloured');
                        break;
                    case 1:
                        div.style.backgroundColor = `rgb(${randomColour()}, ${randomColour()}, ${randomColour()})`;
                        break;
                    case 2:
                        div.style.backgroundColor = 'lightgray';
                        break;
                    default:
                        div.classList.remove('uncoloured');
                        div.classList.add('coloured');
                        break;
                }
            }
        })
        gridArray.push(div);
        grid.appendChild(div);
    }
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function clearGrid(element) {
    grid.removeChild(element);
}
function randomColour() {
    let randomRGB = Math.floor(Math.random() * 255) + 1;
    return randomRGB;
}
function draw(div) {

    switch (drawMode) {
        case 0:
            div.classList.remove('uncoloured');
            div.classList.add('coloured');
            break;
        case 1:
        default:
            div.classList.remove('uncoloured');
            div.classList.add('coloured');
            break;
    }
}