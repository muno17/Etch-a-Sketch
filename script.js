let gridContainer = document.getElementById('gridContainer');
window.addEventListener('load', () => {
    console.log('loaded')
    for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        let gridDiv = document.createElement('div')
        gridContainer.appendChild(gridDiv);
        console.log('all the way in')
    }
}})



// // create a 16x16 grid of divs
// function gridCreator() {
//     for (let i = 0; i < 4; i++) {
//         for (let j = 0; j < 4; j++) {
//             let gridDiv = document.createElement('div')
//             gridContainer.appendChild(gridDiv)
//         }
//     }
// }