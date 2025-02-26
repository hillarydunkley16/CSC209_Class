function moveSquare(squares)
{
    for (let i = 0; i < NUM_SQUARES; i++){
        let square = document.getElementById(squares[i]); 
        let computedStyle = window.getComputedStyle(square);
        
        console.log(`${squares[i]}: ${computedStyle.left}, ${computedStyle.top}`);
        let PosX = parseInt(computedStyle.left) || 0;
        let PosY = parseInt(computedStyle.top) || 0;
        console.log(`Starting position for ${squares[i]}: X=${PosX}, Y=${PosY}`);
        let targetX, targetY; 
        targetX = Math.abs(350-PosX); 
        targetY = Math.abs(350-PosY);
        console.log(`Target position for ${squares[i]}: X=${targetX}, Y=${targetY}`);
        let stepSquareId = setInterval(stepSquare, 20);
        function stepSquare() {
            console.log(`Moving ${squares[i]}: X=${PosX}, Y=${PosY}`);
            if (PosX === targetX && PosY === targetY) {
                clearInterval(stepSquareId);
            } else {
                if (PosX < targetX) {
                    PosX++;
                } else if (PosX > targetX) {
                    PosX--;
                }
                if (PosY < targetY) {
                    PosY++;
                } else if (PosY > targetY) {
                    PosY--;
                }
                square.style.left = PosX + 'px';
                square.style.top = PosY + 'px';
            }
        }
    }
}



function createSquare(squares){
    var squareContainer = document.getElementById("myContainer");
    console.log(squares);
    for (var i = 0; i < NUM_SQUARES; i++){
        var square = document.createElement("div");
        square.setAttribute("id", squares[i]);
        console.log(squares[i]);
        squareContainer.appendChild(square);
    } 
}


