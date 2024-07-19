const div_container = document.getElementById("container");


function create_grid(size) {
  let container_width       = size * 32;
  let container_height      = size * 32;
  let container_bg_color    = "#f1f5f9";
  let container_box_shadow  = "0 25px 50px -12px rgb(0 0 0 / 0.25)";

  div_container.style.width            = `${container_width}px`;
  div_container.style.height           = `${container_height}px`;
  div_container.style.backgroundColor  = `${container_bg_color}`;
  div_container.style.boxShadow        = `${container_box_shadow}`;
  div_container.style.display          = "flex";
  div_container.style.flexWrap         = "wrap";

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

create_grid(16);
