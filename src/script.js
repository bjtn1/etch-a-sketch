const grid = document.querySelector(".grid");
const grid_size = 640;

let mousedown = false;
document.body.onmousedown = () => {mousedown = true}
document.body.onmouseup = () => {mousedown = false}


function draw(e) {
  if (e.type === "mouseover" && !mousedown) {
    return;
  }

  e.target.style.backgroundColor = "#000000";
}


function create_grid(square_size) {
  for (let row = 0; row < square_size; row++) {
    for (let col = 0; col < square_size; col++) {
      const square = document.createElement("div");

      square.classList.add("square");

      let width    = grid_size / square_size;
      let height   = grid_size / square_size;

      square.style.width   = `${width}px`;
      square.style.height  = `${height}px`;

      square.addEventListener("mouseover", draw);
      square.addEventListener("mousedown", draw);

      grid.appendChild(square);
    }
  }
}


create_grid(16);
