const grid = document.querySelector(".grid");
const grid_size = 640;
const default_grid_color = "#f1f5f9";

let mousedown = false;
document.body.onmousedown = () => {mousedown = true}
document.body.onmouseup = () => {mousedown = false}


function draw(e) {
  if (e.type === "mouseover" && !mousedown) {
    return;
  }

  e.target.style.backgroundColor = "#000000";
}


function create_grid(grid_dimensions) {
  for (let row = 0; row < grid_dimensions; row++) {
    for (let col = 0; col < grid_dimensions; col++) {
      const square = document.createElement("div");

      square.classList.add("square");

      let width    = grid_size / grid_dimensions;
      let height   = grid_size / grid_dimensions;

      square.style.width   = `${width}px`;
      square.style.height  = `${height}px`;

      square.addEventListener("mouseover", draw);
      square.addEventListener("mousedown", draw);

      grid.appendChild(square);
    }
  }
}


function clear_grid() {
  let grid_squares = grid.querySelectorAll(".square");

  for (let i = 0; i < grid_squares.length; i++) {
    grid_squares[i].style.backgroundColor = default_grid_color;
  }
}


create_grid(16);
