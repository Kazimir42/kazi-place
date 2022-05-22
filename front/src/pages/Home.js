import {useEffect, useState} from "react";
import socketIOClient, {io} from "socket.io-client";

function Home() {
    const [error, setError] = useState('');

    const [canvas, setCanvas] = useState()
    const [ctx, setCtx] = useState()
    const [loading, setLoading] = useState(true);
    const [pixels, setPixels] = useState([]);
    const [colors, setColors] = useState(['#000', '#ff0000', '#00ffff'])
    const [currentColor, setCurrentColor] = useState('#000');

    let kBoardWidth = 80;
    let kBoardHeight= 40;
    let kPieceWidth = 10;
    let kPieceHeight= 10;
    let kPixelWidth = 1 + (kBoardWidth * kPieceWidth);
    let kPixelHeight= 1 + (kBoardHeight * kPieceHeight);
    //let canvas = document.getElementById('canvas');
    //let ctx = canvas.getContext("2d");


    useEffect(() => {
        if (!loading) {
            drawBoard();
            drawPixels();
        }
        getCurrentPixels()
        let canvas = document.getElementById('canvas')
        setCanvas(canvas);
        setCtx(canvas.getContext("2d"));

        const socket = io('http://127.0.0.1:4000', { transports : ['websocket'] });

        // écoute du socket news
        socket.on('newPixel', function(msg){
            console.log(msg)
            //draw les nouveaux pixel en temps reel
            let position = {x: msg.x, y: msg.y}
            drawInFront(position, msg.color, msg.userId)

        });

        setLoading(false)

    }, [loading, pixels.length > 0])

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

    function drawPixels() {
        pixels.forEach(
            pixel =>
            {
                ctx.fillStyle = pixel.color
                ctx.fillRect( pixel.x , pixel.y, kPieceWidth, kPieceHeight)
            }
        );

    }

    function getCurrentPixels() {
        fetch('http://127.0.0.1:4000/api/pixels')
            .then(response => response.text())
            .then(data => setPixels(JSON.parse(data)));

    }

    function drawInDatabase(position, color, user) {
        //post data
        fetch("http://127.0.0.1:4000/api/pixels",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    x: position.x,
                    y: position.y,
                    color: color,
                    userId: user,
                    created_at: Date.now(),
                })
            })
            .then(async rawResponse =>{
                let content = await rawResponse.json()
                if (content.error)
                {
                    setError(content.error)
                }else {
                    setError('');
                }
            })
            .catch(function(res){
                console.log(res)
            })

        drawInFront(position, color, user)
    }

    function drawInFront(position, color, user) {
        //draw in front
        ctx.fillStyle = color
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
        drawInDatabase(position, currentColor, 1)

    }

    return (
        <div>
            <h1 className="text-4xl font-bold">kazi/place</h1>
            <div className="mt-4">
                <canvas id="canvas" onClick={maybeDraw} width="800" height="400"  className="border border-black">
                </canvas>
                <div className="flex flex-row gap-1 mt-2">
                    Colors : {colors.map((color, index)=> {
                        return (
                            <div className="h-6 w-6 cursor-pointer inline-block" key={index} onClick={() => setCurrentColor(color)} style={{backgroundColor: color}} />
                        )
                    })}
                </div>
                <div className="flex flex-row gap-1 mt-2">
                Current color :
                    <div className="h-6 w-6 inline-block" style={{backgroundColor: currentColor}} />
                </div>
                {

                }
            </div>
        </div>
    );
}export default Home;