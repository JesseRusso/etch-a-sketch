let size = 32;
let isDown = false;
let drawMode = 0;
let gridArray = [];
const slider = document.getElementById("range");
const grid = document.getElementById("grid-container");
const blackButton = document.getElementById("black-button");
const rainbowButton = document.getElementById("rainbow-button");
const eraserButton = document.getElementById("erase-button");

document.body.onmouseup = () => (isDown = false);
document.body.onmousedown = () => (isDown = true);
document.body.addEventListener("dragstart", (e) => {
    e.preventDefault();
});
//Event listeners for buttons and grid size slider
document.getElementById("reset-button").addEventListener("click", (e) => {
    makeGrid();
});
eraserButton.addEventListener("click", (e) => {
    resetButtons();
    eraserButton.classList.add("selected");
    drawMode = 2 });
rainbowButton.addEventListener("click", (e) => { 
    resetButtons();
    rainbowButton.classList.add("selected");
    drawMode = 1 });
blackButton.addEventListener("click", (e) => {
    resetButtons();
    blackButton.classList.add("selected"); 
    drawMode = 0 });

slider.addEventListener("change", function () {
    size = slider.value;
    makeGrid()
})
makeGrid()

function makeGrid() {
    gridArray.forEach(clearCell);
    gridArray = [];
    for (let i = 0; i < size * size; i++) {
        let div = document.createElement('div');
        div.style.backgroundColor = 'lightgray';
        div.classList.add('cell');
        div.addEventListener("mouseover", (e) => {
            if(isDown) {
                drawMap[drawMode](div);
            }
        });
        div.addEventListener("mousedown", (e) => {
            drawMap[drawMode](div);
        })
        gridArray.push(div);
        grid.appendChild(div);
    }
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}
//Draw style depending on drawMode selected
const drawMap = {
    0: (div) => {
        div.style.backgroundColor = "black";
    },
    1: (div) => {
        div.style.backgroundColor = randomColour();
    },
    2: (div) => {
        div.style.backgroundColor = "lightgrey";
    },
}
function clearCell(element) {
    grid.removeChild(element);
}
function randomColour() {
    let hue = Math.floor(Math.random() * 360) + 1;
    let light = Math.floor(Math.random() * 100) + 1;
    return `hsl(${hue}, 100%, ${light}%)`;
}
function resetButtons(){
    blackButton.classList.remove("selected");
    rainbowButton.classList.remove("selected");
    eraserButton.classList.remove("selected");
}
//Unused but might come back to this in order to add shading.
//Colours are stored as rgb so conversion between rgb and hsl needs to happen before something like this will work
function brighten(col){
    let hue = col.slice(4, 7);
    let sat = col.slice(9, 12);
    let light = col.slice(15, 17);
    if(Number(light) < 100){
        light = Number(light) * 1.1;
    }
    console.log(`rgba(${hue}, ${sat}%, ${light}%)`);
    return `rgba(${hue}, ${sat}%, ${light}%)`;
}

