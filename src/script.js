function create_x_by_y_grid(x, y) {
  const div_container = document.querySelector("#container");

  for (let row = 0; row < x; row++) {
    for (let col = 0; col < y; col++) {
      const div = document.createElement("div");
      div.setAttribute("id", "square");
      div.setAttribute("class", "square");

      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "#000000";
      });

      div.addEventListener("mouseout", () => {
        div.style.backgroundColor = "#f1f5f9";
      })

      div_container.appendChild(div);
    }
  }
}


function add_hover_to_x_by_y_grid() {

}

create_x_by_y_grid(16, 16);
