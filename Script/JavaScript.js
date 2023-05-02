
const DEFAULT_SIZE = 64;
const DEFAULT_COLOR = "black";

let grid_container = document.querySelector('.grid-container');
grid_container.style.gridTemplateColumns = "repeat(64 , 1fr)";
grid_container.style.gridTemplateRows = "repeat(64, 1fr)";

let colorStyle = DEFAULT_COLOR;
let rainbowMode = document.querySelector('#rainbow');
rainbowMode.addEventListener('click', () => {
    colorStyle = "rainbows";
})

let resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', () => {
    grid_container.innerHTML = '';
    colorStyle = DEFAULT_COLOR;
    setUpGrid();
});

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


function setUpGrid() {
    for (i = 0; i < DEFAULT_SIZE * DEFAULT_SIZE; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('grid-Div');
        grid_container.appendChild(gridDiv);

        gridDiv.addEventListener("mouseover", changeColor);
        gridDiv.addEventListener("mousedown", changeColor);
    }
}

function changeColor(e) {
    if (e.type === "mouseover" && !mouseDown) return
    if (colorStyle == "rainbows") {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else {
        e.target.style.backgroundColor = DEFAULT_COLOR;
    }
}
window.onload(setUpGrid());