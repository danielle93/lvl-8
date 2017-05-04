const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.height = window.outerHeight;
canvas.width = window.outerWidth;

ctx.strokeStyle = '#BADASS';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;
ctx.globalCompositeOperation = 'luminosity';
ctx.CanvasPixelArray = 'blur';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if(!isDrawing) return; //stop function from running when they are not moused down
    console.log(e);
    ctx.strokeStyle = `hsla(${hue}, 100%, 70%, .05)`;
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    
    
    hue++;
    if(hue >= 360) {
        hue = 0;
    }
    
    if(ctx.lineWidth >= 50 || ctx.lineWidth <= 50){
        direction = !direction;
    }
    
    if(direction){
    ctx.lineWidth++;
 } else {
    ctx.lineWidth--;
 }
}

canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
    });


    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);
