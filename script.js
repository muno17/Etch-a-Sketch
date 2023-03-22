let gridContainer = document.getElementById('gridContainer');

// call gridCreator() when the page loads
window.addEventListener('load', () => gridCreator())
















// create a 32x32 grid
function gridCreator() {
    for (let i = 0; i < 64; i++) {
        // create a div for each row
        let gridRow = document.createElement('div')
        gridRow.setAttribute('id', 'gridRow')
        gridContainer.appendChild(gridRow)

        // create 32 divs per row
        for (let j = 0; j < 64; j++) {
            let gridDiv = document.createElement('div')
            gridDiv.setAttribute('id', 'gridDiv')
            gridRow.appendChild(gridDiv);
            gridDiv.addEventListener('mouseover', (gridDiv) => {
                gridDiv.target.style.backgroundColor = 'white';
            })
        }
}}
