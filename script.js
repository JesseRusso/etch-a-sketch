let size = 16;
let isDown = false;
let gridArray = [];
let slider = document.getElementById("range");
let sliderCount = document.getElementById("slider-value");
const grid = document.getElementById("grid-container");

document.body.onmousedown = () => (isDown = true);
document.body.onmouseup = () => (isDown = false);

document.getElementById("reset-button").addEventListener("click",makeGrid);
slider.addEventListener("change", function(){
    size = slider.value;
    sliderCount.innerText = slider.value;
    makeGrid()
})
makeGrid()

function makeGrid(){
    gridArray.forEach(clearGrid)
    gridArray = [];

    for(let i = 0; i < size * size; i++){
        let div = document.createElement('div');
        div.className=`${i} uncoloured`;
        div.setAttribute("draggable", "false")
        div.addEventListener("mouseover", function(){
            if(isDown){
                div.classList.remove('uncoloured');
                div.classList.add("coloured");
            }
        });
        gridArray.push(div);
        grid.appendChild(div);
    }
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function clearGrid(element){
    grid.removeChild(element);
}