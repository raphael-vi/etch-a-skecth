const DEFAULT_GRID = 16;
let size = DEFAULT_GRID;
const container = document.querySelector('.grid-container');

const clear = document.querySelector('.clear');
const gridSize = document.querySelector('.gridsize')
const submit = document.querySelector('.submit')

gridSize.addEventListener('change', (e) => sizeGrid(e.target.value));

gridSize.min='1';
gridSize.max='100';




function addGrid(number){
    let mult = number*number
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`



    for(let i = 0; i <mult; i++){
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        container.appendChild(gridCell)
        
    }
}

function sizeGrid(number){
    newSize(number)
    reload()
}

function reload(){
    container.textContent = ''
    addGrid(size)
}


function newSize(current){
    size = current
}



sizeGrid(size)


/*------EVENTOS --- */
let cell = document.querySelectorAll('.grid-cell')



cell.forEach(cell =>{ 
    cell.addEventListener( "mouseover" , () => { 
        cell.classList.add('active')
    })
})



clear.addEventListener('click', ()=>{ 
    cell.forEach(cell =>{ 
       cell.classList.remove('active')
    })
})

