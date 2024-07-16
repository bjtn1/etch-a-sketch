function create_16_by_16_grid_of_divs() {
  const div_container = document.querySelector("#container");

  for (let row = 0; row < 16; row++) {
    for (let col = 0; col < 16; col++) {
      const div = document.createElement("div");
      div.className += "square"
      div_container.appendChild(div);
    }
  }
}

create_16_by_16_grid_of_divs();
