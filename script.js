const container = document.querySelector('.grid-container')
const gridCell = document.createElement('div');
gridCell.classList.add('grid-cell');

function addGrid(number){
    let mult = number*number
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`
    for(let i = 0; i <mult; i++){
        container.appendChild(gridCell.cloneNode())
        
    }
}

addGrid(6)

const cell = document.querySelectorAll('.grid-cell')

cell.forEach(cell =>{ 
    cell.addEventListener( 'mouseover' , () => { 
        cell.classList.add('active')
    })
})


