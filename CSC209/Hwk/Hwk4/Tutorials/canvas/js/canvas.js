const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");


const grad1 = ctx.createLinearGradient(0, 0, 280, 0);
grad1.addColorStop(0, "lightblue");
grad1.addColorStop(1, "darkblue"); 


const grad2 = ctx.createRadialGradient(250, 150, 5, 300, 200, 150);
grad2.addColorStop(0, "pink");
grad2.addColorStop(1, "red");


ctx.beginPath();
ctx.arc(250, 150, 100, 0, 2 * Math.PI);
ctx.fillStyle = grad2;
ctx.fill();
ctx.lineWidth = 10;
ctx.strokeStyle = grad1;
ctx.stroke();


ctx.lineWidth = 10;
ctx.strokeStyle = grad1;
ctx.strokeRect(5, 5, 490, 290);


ctx.beginPath();
ctx.arc(250, 170, 50, 0, Math.PI, false); 
ctx.fillStyle = grad1; 
ctx.fill();
ctx.strokeStyle = grad1;
ctx.lineWidth = 5;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(210, 110);
ctx.lineTo(190, 140);
ctx.lineTo(230, 140);
ctx.closePath();
ctx.fillStyle = grad1;
ctx.fill();

ctx.beginPath();
ctx.moveTo(290, 110);
ctx.lineTo(270, 140);
ctx.lineTo(310, 140);
ctx.closePath();
ctx.fillStyle = grad1;
ctx.fill();