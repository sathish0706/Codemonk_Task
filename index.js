// create a canvas to work with
var canvas = document.createElement("canvas");
document.body.appendChild(canvas);

// style canvas
canvas.id = "canvas";
canvas.width = 500;
canvas.height = 500;
canvas.setAttribute("style", "border: 1px solid black;");

// get 2D context
var context = canvas.getContext("2d");

var circleA = { x: 10, y: 30, width: 30, height: 30 };
var circleB = { x: 10, y: 30, width: 30, height: 30 };
var circleC = { x: 10, y: 30, width: 30, height: 30 };
var circleD = { x: 10, y: 30, width: 30, height: 30 };

// place holders for mouse x,y position
var mouseX = 0;
var mouseY = 0;

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

// Loop
setInterval(onTimerTick, 33);

function onTimerTick() {
  // update mouse
  circleA.x = mouseX - circleB.width * 0.5;
  circleA.y = mouseY - circleB.height * 0.5;

  circleB.x = mouseX - circleA.width * 0.5;
  circleB.y = mouseY - circleA.height * 0.5;

  circleC.x = mouseX - circleD.width * 0.5;
  circleC.y = mouseY - circleD.height * 0.5;

  circleD.x = mouseX - circleC.width * 0.5;
  circleD.y = mouseY - circleC.height * 0.5;

  // update circle's

  circleB.x = canvas.width - circleA.x;
  circleB.y = canvas.height - circleA.y;

  circleC.x = canvas.width - circleB.x;
  circleC.y = canvas.height - circleB.y;

  circleD.x = canvas.width - circleC.x;
  circleD.y = canvas.height - circleC.y;

  circleA.x = canvas.width - circleD.x;
  circleA.y = canvas.height - circleD.y;

  // clear the canvas
  canvas.width = canvas.width;

  // draw first circle
  context.beginPath();
  context.arc(circleA.x, circleA.y, 30, 0, 2 * Math.PI);
  context.stroke();

  // draw second circle
  context.beginPath();
  context.arc(circleB.x, circleB.y, 30, 0, 2 * Math.PI);
  context.stroke();

  // draw third circle
  context.beginPath();
  context.arc(circleC.x, circleB.y, 30, 0, 2 * Math.PI);
  context.stroke();

  // draw fourth circle
  context.beginPath();
  context.arc(circleD.x, circleA.y, 30, 0, 2 * Math.PI);
  context.stroke();
}

// update mouse position
canvas.onmousemove = function (e) {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
};
