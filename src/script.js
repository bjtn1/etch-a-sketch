const grid = document.querySelector(".grid");
const grid_size = 640;
const default_grid_color = "#f1f5f9";

let mousedown = false;
document.body.onmousedown = () => {mousedown = true}
document.body.onmouseup = () => {mousedown = false}

let color = "#808080"
let color_picker = document.querySelector(".color-picker");
color_picker.addEventListener("input", change_color, false);
color_picker.addEventListener("change", change_color, false);


function draw(e) {
  if (e.type === "mouseover" && !mousedown) {
    return;
  }

  e.target.style.backgroundColor = color;
}


function erase() {
  color = default_grid_color;
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

      square.style.outlineStyle = "solid";
      square.style.outlineWidth = "1px";

      square.addEventListener("mouseover", draw);
      square.addEventListener("mousedown", draw);

      grid.appendChild(square);
    }
  }
  // we call `clear_grid()` because it makes the outlines thinner and pretty.
  // (bjtn) I don't know why that happens
  clear_grid();

  // now we update the dimensions text
  let current_dimensions_div = document.querySelector(".current-dimensions-div");
  current_dimensions_div.innerHTML = `${grid_dimensions} x ${grid_dimensions}`;
}


function clear_grid() {
  let grid_squares = grid.querySelectorAll(".square");

  for (let i = 0; i < grid_squares.length; i++) {
    grid_squares[i].style.backgroundColor = default_grid_color;
  }
}


function change_color(event){
  color = event.target.value;
}


function remove_old_grid() {
  let old_grid_squares = grid.querySelectorAll(".square");

  for (let i = 0; i < old_grid_squares.length; i++) {
    old_grid_squares[i].remove();
  }
}


function change_dimensions() {
  let new_dimensions = Number(prompt("Enter an integer between 1 (inclusive) and 100 (inclusive)"));
  
  while (new_dimensions < 1 || new_dimensions > 100) {
    new_dimensions = Number(prompt("Invalid number. Please enter an integer between 1 (inclusive) and 100 (inclusive)"));
  }

  remove_old_grid();
  create_grid(new_dimensions);
}


create_grid(16);
