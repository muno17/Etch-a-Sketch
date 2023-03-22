let gridContainer = document.getElementById('gridContainer');

// call gridCreator() when the page loads
window.addEventListener('load', () => gridCreator());

// change grid size based on slider position
let sliderValue = document.getElementById('sliderValue');
let sliderText = document.getElementById('sliderText');

// update grid size when slider is moved
sliderValue.addEventListener('mouseup', () => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    gridCreator();
})

// create a grid based on sliderValue (16x16 default)
function gridCreator() {
    for (let i = 0; i < updateValue(); i++) {
        // create a div for each row
        let gridRow = document.createElement('div')
        gridRow.setAttribute('id', 'gridRow')
        gridContainer.appendChild(gridRow)

        // create 32 divs per row
        for (let j = 0; j < updateValue(); j++) {
            let gridDiv = document.createElement('div')
            gridDiv.setAttribute('id', 'gridDiv')
            gridRow.appendChild(gridDiv);

            // add draw functionality
            gridDiv.addEventListener('mousedown', (gridDiv) => {
                gridDiv.target.style.backgroundColor = 'white';
            })
            gridDiv.addEventListener('mousemove', (gridDiv) => {
                    gridDiv.target.style.backgroundColor = 'white'
            })
        }
}}

// update slider value
function updateValue () {
    sliderValue.addEventListener('input', () => {
        sliderText.innerHTML = sliderValue.value + " x " + sliderValue.value;
    })
    return sliderValue.value;
}


// add functionality to reset button

let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    gridCreator();
})