const grid = document.querySelector(".grid");

const grid_size = 640;

// TODO
// 1. find a sensible size for the grid
// 2. find  sensible size for the square in thr grid
// the grid's area is 640 by 640 = 409,600

function create_grid(square_size) {
  for (let row = 0; row < square_size; row++) {
    for (let col = 0; col < square_size; col++) {
      const square = document.createElement("div");

      square.classList.add("square");

      let width    = grid_size / square_size;
      let height   = grid_size / square_size;

      square.style.width   = `${width}px`;
      square.style.height  = `${height}px`;

      // if (row % 2 === 0 && col % 2 === 0) {
      //   square.style.outlineStyle = "solid";
      // }

      // TODO handel mousedown and mouseover event simultaneously

      square.onmouseover = () => {
        square.style.backgroundColor = "#000000";
      }

      grid.appendChild(square);
    }
  }
}


create_grid(16);
