let kBoardWidth = 50;
let kBoardHeight= 50;
let kPieceWidth = 10;
let kPieceHeight= 10;
let kPixelWidth = 1 + (kBoardWidth * kPieceWidth);
let kPixelHeight= 1 + (kBoardHeight * kPieceHeight);

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

drawBoard();

function drawBoard() {

    /* vertical lines */
    for (let x = 0; x <= kPixelWidth; x += kPieceWidth) {
        ctx.moveTo(0.5 + x, 0);
        ctx.lineTo(0.5 + x, kPixelHeight);
    }
    
    /* horizontal lines */
    for (let y = 0; y <= kPixelHeight; y += kPieceHeight) {
        ctx.moveTo(0, 0.5 + y);
        ctx.lineTo(kPixelWidth, 0.5 +  y);
    }
    
    /* draw it! */
    ctx.strokeStyle = "#ccc";
    ctx.stroke();
    
}

    
canvas.addEventListener('click', function(event) { 
    let position = getCursorPos(event);
    draw(position)

}, false);

function draw(position) {
    ctx.fillRect( position.x , position.y, kPieceWidth, kPieceHeight);
}


function getCursorPos(event) {

    //to get the nice pos of mouse click
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    console.log("clientX: " + x +" - clientY: " + y);

    posX = Math.floor(x / 10) * 10
    posY = Math.floor(y / 10) * 10

    return {
        x: posX,
        y: posY,
    }

}

