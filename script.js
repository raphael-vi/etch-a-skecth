const DEFAULT_GRID = 16;
const DEFAULT_COLOR = 'black';
const container = document.querySelector('.grid-container');

const clear = document.querySelector('.clear');
const gridSize = document.querySelector('.gridsize')
const gridColor = document.querySelector('.color')
const randomize = document.querySelector('.randomize')
const eraser = document.querySelector('.eraser')
const shadow = document.querySelector('.shadow')


let size = DEFAULT_GRID;
let color = DEFAULT_COLOR;




/* ---------- COLOR CHANGE -------------- */

/* Lembrete =  Adcionar uma forma de reset */

gridColor.addEventListener('change',(e)=>{

   color = e.target.value
})

let random = false;
let eraserTog = false;
let shadowTog = false;




randomize.onclick = (e) => {
    shadow.classList.remove('toggle')
    eraser.classList.remove('toggle')
    random == false? random = true : random = false;
    random == true? randomize.classList.add('toggle'): randomize.classList.remove('toggle');
    shadowTog = false;
    eraserTog = false;
}

shadow.onclick = (e) => {
    eraser.classList.remove('toggle');
    randomize.classList.remove('toggle');
    shadowTog == false? shadowTog = true : shadowTog = false;
    shadowTog == true? shadow.classList.add('toggle'): shadow.classList.remove('toggle');
    eraserTog = false;
    random = false;
}

eraser.onclick = (e) => {
    randomize.classList.remove('toggle')
    shadow.classList.remove('toggle')
    eraserTog == false ? eraserTog = true : eraserTog = false;
    eraserTog == true? eraser.classList.add('toggle'): eraser.classList.remove('toggle');
    random = false;
    shadowTog = false;
}

clear.onclick = () => reload()


function colorChange(e){
    
    if(random == true){
        e.addEventListener('mouseenter', (e) => {
            R = Math.floor(Math.random()* 256) 
            G = Math.floor(Math.random()* 256)  
            B = Math.floor(Math.random()* 256)
            
            
            e.target.style.backgroundColor= `rgb(${R},${G}, ${B})`    
            
    })
    }else if(eraserTog == true){
        
        e.addEventListener('mouseenter',(e) =>{
        e.target.style.backgroundColor= `hsl(0, 0% , 100%)`;
    })    
    }else if(shadowTog == true){
        e.addEventListener('mouseenter', (e) =>{
        
            let RGB =  e.target.style.backgroundColor
        
            let R = parseInt(RGB.slice(4,7));
            let G = parseInt(RGB.slice(8, 12));
            let B = parseInt(RGB.slice(13, 17));
            R = G;
            B = R;

            let newColor =  `rgb(${R - 50}, ${G - 50}, ${B - 50})`
            
            e.target.style.backgroundColor = newColor;

    })
    }else{
        e.addEventListener('mouseenter',(e) =>{
        e.target.style.backgroundColor= `${color}`;

    }) 
    }
    
    

}



/* ---GRID SIZE -------- */
gridSize.addEventListener('change', (e) => sizeGrid(e.target.value));
gridSize.max='100';
gridSize.min='1';


function addGrid(number){
    let mult = number*number
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`
    
    
    
    for(let i = 0; i < mult; i++){
        let gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        gridCell.style.backgroundColor = `hsl(0, 0% , 100%)`
        gridCell.onmouseover = () => colorChange(gridCell)
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

sizeGrid(size);
