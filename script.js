let size = 16;
let gridArray = [];
document.getElementById("reset-button").addEventListener("click",resetGrid);
const grid = document.getElementById("grid-container");
makeGrid()
function makeGrid(){
    for(let i = 0; i < size * size; i++){
        let div = document.createElement('div');
        div.className=`"${i}"`;
        div.addEventListener("mouseover", function(){
            div.setAttribute("style", "background-color:black");
        });
        gridArray.push(div);
        document.getElementById('grid-container').appendChild(div);
    }
}
let isDown = false;
    document.body.onmousedown = () => (isDown = true);
    document.body.onmouseup = () => (isDown = false);
    
function resetGrid(){
    gridArray.forEach(reset);
}
function reset(element){
    element.setAttribute("style", "background-color: white");
    grid.
}