let gridContainer = document.getElementById('gridContainer');

// call gridCreator() when the page loads
window.addEventListener('load', () => gridCreator())





// create a 16x16 grid
function gridCreator() {
    console.log('loaded')
    for (let i = 0; i < 16; i++) {
        // create a div for each row
        let gridRow = document.createElement('div')
        gridContainer.appendChild(gridRow)

        // create 16 divs per row
        for (let j = 0; j < 16; j++) {
            let gridDiv = document.createElement('div')
            gridRow.appendChild(gridDiv);
            console.log('all the way in')
        }
}}
