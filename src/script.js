const div_container = document.querySelector("#container");


function create_grid(size) {
  let container_width       = size * 32;
  let container_height      = size * 32;
  let container_bg_color    = "#f1f5f9";
  let container_box_shadow  = "0 25px 50px -12px rgb(0 0 0 / 0.25)";

  document.getElementById("container").style.width            = `${container_width}px`;
  document.getElementById("container").style.height           = `${container_height}px`;
  document.getElementById("container").style.backgroundColor  = `${container_bg_color}`;
  document.getElementById("container").style.boxShadow        = `${container_box_shadow}`;
  document.getElementById("container").style.display          = "flex";
  document.getElementById("container").style.flexWrap         = "wrap";

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
