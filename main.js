var mouseEvent = "e";
var color = "";
var radius = 0;
var width = 0;

canvas = document.getElementById("painting-canvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mouseDown)
function my_mouseDown(e) {
  color = document.getElementById("color-input").value;
  width = document.getElementById("width-input").value;
  radius = document.getElementById("radius-input").value;
  mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup", painting_mouseup);
function painting_mouseup(e) {
  mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", painting_mouseleave);
function painting_mouseleave(e) {
  mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", painting_mousemove);
function painting_mousemove(e) {
  current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
  console.log(current_position_of_mouse_x);
  current_position_of_mouse_y = e.clientY - canvas.offsetTop;
  console.log(current_position_of_mouse_y);

  if (mouseEvent == "mouseDown") {
    console.log("Current position of x and y coordinates");
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
    console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    ctx.stroke();
  }
}