var c, ctx; // Canvas and context
var sprites = [];
colors = ["red", "blue", "green", "purple", "orange", "black"];
let stepCount = 0;
let interval; 
function random(min, max){
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    // console.log(random);
    return random;
};
function move() {
    updateStepCount(); // Ensure NRSTEPS is set correctly
    console.log("move function called");
    console.log(`NRSTEPS = ${NRSTEPS}`);

    interval = setInterval(animate, 1000 / initSpeed());
}

function initCanvas(){
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
}
function draw(){
    if (!c || !ctx){
        initCanvas();
    }
    initSprites(); 
    drawAllSprites();
    initSpeed(); 
    
};
function updateNumPoints(){
    let numPoints = document.getElementById('numPoints');
    NRPTS = parseInt(numPoints.value) || NRPTS;
    console.log(`NRPTS = ${NRPTS}`);
    reDraw();
}
function initSpeed(){
    let speed = document.getElementById('speed');
    let divisor; 
    console.log(`speed = ${speed}`);
    if (speed.value == "slow"){
        divisor = 20; 
    }else if (speed.value == "medium"){
        divisor = 40;
    }else if (speed.value == "fast"){
        divisor = 80;
    }
    console.log(`divisor = ${divisor}`);
    
    return divisor;
}
function initSprites() {
    sprites = [];
    
    for (let i = 0; i < NRPTS; i++) {
        let speedX = random(0, 200) - 100;
        let speedY = random(0, 200) - 100;
        let velocity = Math.sqrt(speedX ** 2 + speedY ** 2);
        let x = random(0, c.width);
        let y = random(0, c.height);

        let sprite = {
            id: i,
            x: x,
            y: y,
            originalX: x,
            originalY: y,
            speedX: speedX,
            speedY: speedY,
            velocity: velocity,
            radius: 15,
            color: colors[random(0, colors.length - 1)],
            lineLength: velocity * 0.75,
            history: [] // Store previous positions
        };
        sprites.push(sprite);
    }
}

function drawSprite(sprite, ctx) {
    // let frog = document.getElementById('frogMode').checked;
    // console.log(frog)
    // if (frog){
    //     console.log("frog mode enabled");
    //     var img = new Image();
    //     img.src = 'images/freepik__background__27926.png';
    //     img.onload = function() {
    //     ctx.drawImage(img, sprite.x, sprite.y, 50, 50);
    // }
    // Draw the circle (sprite)
    ctx.beginPath();
    ctx.arc(sprite.x, sprite.y, sprite.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = sprite.color;
    ctx.lineWidth = 4;
    ctx.stroke();

    // Calculate line endpoint using unit vector * line length
    let normX = sprite.speedX / sprite.velocity;
    let normY = sprite.speedY / sprite.velocity;
    let lineEndX = sprite.x + (normX * sprite.lineLength);
    let lineEndY = sprite.y + (normY * sprite.lineLength);

    // Draw the direction line
    ctx.beginPath();
    ctx.moveTo(sprite.x, sprite.y);
    ctx.lineTo(lineEndX, lineEndY);
    ctx.stroke();
    console.log("drawSprite function called");
};
function drawAllSprites(keepTrace) {
    if (!keepTrace) {
        ctx.clearRect(0, 0, c.width, c.height);
    }

    for (let sprite of sprites) {
        // Draw past positions (the trace)
        if (keepTrace) {
            ctx.beginPath();
            ctx.strokeStyle = sprite.color;
            for (let pos of sprite.history) {
                ctx.lineTo(pos.x, pos.y);
            }
            ctx.stroke();
        }

       
        drawSprite(sprite, ctx);
    }
}


function reDraw(){
    console.log("update position");
    stepCount = 0;
    initSprites();
    drawAllSprites();
};
function updateStepCount() {
    let durationInput = document.getElementById('duration');
    let duration = parseInt(durationInput.value) || 10; // Default to 10s if empty
    let fps = 1000 / initSpeed(); // Frames per second

    NRSTEPS = Math.floor(duration * fps);
    console.log(`NRSTEPS calculated as: ${NRSTEPS} for duration: ${duration} seconds`);
}

function animate() {
    console.log("animate function!");

    if (stepCount >= NRSTEPS) {
        console.log("animation done");
        clearInterval(interval);
        return;
    }

    let keepTrace = document.getElementById('trace').checked;

    if (!keepTrace) {
        ctx.clearRect(0, 0, c.width, c.height);
        for (let sprite of sprites) {
            sprite.history = []; // Clear history when trace is disabled
        }
    }

    for (let sprite of sprites) {
        // Save past positions for the trace effect
        if (keepTrace) {
            sprite.history.push({ x: sprite.x, y: sprite.y });
        }

        // Move sprite
        sprite.x += sprite.speedX;
        sprite.y += sprite.speedY;

        // Handle bouncing
        if (sprite.x < 0 || sprite.x > c.width) {
            sprite.speedX = -sprite.speedX;
        }
        if (sprite.y < 0 || sprite.y > c.height) {
            sprite.speedY = -sprite.speedY;
        }
    }

    stepCount++;
    drawAllSprites(keepTrace);
}


function reset(){
    console.log("reset function called");
    clearInterval(interval);
    ctx.clearRect(0, 0, c.width, c.height);
    stepCount = 0;
    for (let sprite of sprites){
        sprite.x = sprite.originalX;
        sprite.y = sprite.originalY;
    }
    drawAllSprites();
}