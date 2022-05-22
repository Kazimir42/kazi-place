import {useEffect, useState} from "react";

function Home() {
    const [canvas, setCanvas] = useState()
    const [ctx, setCtx] = useState()
    const [loading, setLoading] = useState(false);

    let kBoardWidth = 80;
    let kBoardHeight= 40;
    let kPieceWidth = 10;
    let kPieceHeight= 10;
    let kPixelWidth = 1 + (kBoardWidth * kPieceWidth);
    let kPixelHeight= 1 + (kBoardHeight * kPieceHeight);
    //let canvas = document.getElementById('canvas');
    //let ctx = canvas.getContext("2d");


    useEffect(() => {
        if (loading) {
            drawBoard();
        }
        let canvas = document.getElementById('canvas')
        setCanvas(canvas);
        setCtx(canvas.getContext("2d"));
        setLoading(true)

    }, [loading])

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

    function draw(position) {
        ctx.fillRect( position.x , position.y, kPieceWidth, kPieceHeight);
    }


    function getCursorPos(event) {

        //to get the nice pos of mouse click
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;

        console.log("clientX: " + x +" - clientY: " + y);

        let posX = Math.floor(x / 10) * 10
        let posY = Math.floor(y / 10) * 10

        return {
            x: posX,
            y: posY,
        }

    }

    function maybeDraw(event) {
        let position = getCursorPos(event);
        draw(position)

    }

    return (
        <div>
            <h1 className="text-4xl font-bold">Game</h1>
            <div className="mt-4">
                <canvas id="canvas" onClick={maybeDraw} width="800" height="400"  className="border border-black">
                </canvas>
            </div>
        </div>
    );
}export default Home;