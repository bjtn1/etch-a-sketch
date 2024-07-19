const div_container = document.querySelector("#container");


function create_grid(size) {
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const div = document.createElement("div");

      div.setAttribute("id", "square");
      div.classList.add("square");

      let width   = size * 2;
      let height  = size * 2;

      div.style.width   = `${width}px`;
      div.style.height  = `${height}px`;


      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "#000000";
      });

      // div.addEventListener("mouseout", () => {
      //   div.style.backgroundColor = "#f1f5f9";
      // })

      div_container.appendChild(div);
    }
  }
}


function add_hover_to_x_by_y_grid() {

}

create_grid(16);
