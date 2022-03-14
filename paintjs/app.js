const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');
const saveBtn = document.getElementById('jsSave');

const defaultColor = "#2c2c2c"
ctx.strokeStyle = defaultColor;
ctx.lineWidth = 2.5;
ctx.fillStyle = defaultColor;

function startPainting(){
    painting = true;
}

let painting = false;

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else {
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}


function handleColorCLick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleLineWidth(event){
    ctx.lineWidth = event.target.value;
}

let isFilling = false;

function handleModeClick(){
    if(isFilling){
        isFilling = false;
        mode.innerText = 'fill';
    } else {
        isFilling = true;
        mode.innerText = 'paint';
    }
}

function handleCanvasClick(){
    if(isFilling){
        ctx.fillRect(0,0,700,700);
    }
}

function handleSaveCanvas(){
    const image = canvas.toDataURL();
    let link = document.createElement('a');
    link.href = image;
    link.download = "imageFromPaintJS";
    link.click();
}


if(canvas){
    canvas.addEventListener('mousemove',onMouseMove);
    canvas.addEventListener('mousedown',startPainting);
    canvas.addEventListener('mouseup',stopPainting);
    canvas.addEventListener('mouseleave',stopPainting);
    canvas.addEventListener('click',handleCanvasClick);
    canvas.addEventListener('contextmenu', event => event.preventDefault());
}


Array.from(colors).forEach(color => color.addEventListener('click',handleColorCLick));

if(range){
    range.addEventListener('input',handleLineWidth);
}

if(mode){
    mode.addEventListener('click',handleModeClick);
}

if(saveBtn){
    saveBtn.addEventListener('click',handleSaveCanvas);
}