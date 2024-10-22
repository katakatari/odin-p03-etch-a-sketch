console.log("Running Script...")

const canvas = document.querySelector(".canvas");

const cols = document.getElementsByName("cols");
const rows = document.getElementsByName("rows");

const button = document.querySelector("button");

const grid = { cols: 16, rows: 16 }

const validValue = (value) => {
  value = parseInt(value);

  return (value > 0 && value < 100) ? value : 16;
}

button.addEventListener("click", () => {
  grid.cols = validValue(cols[0].value);
  grid.rows = validValue(rows[0].value);

  drawBoxes(grid.cols, grid.rows)
})

const drawBoxes = (cols, rows) => {
  // Remove all child nodes
  while (canvas.hasChildNodes()) canvas.removeChild(canvas.firstChild);

  // Loop to create boxes according to the value given
  Array(cols * rows).fill(null).forEach((n, i) => {
    const box = document.createElement("div");
    box.classList = "box"
    box.id = i + 1;
    box.textContent = i + 1;

    canvas.appendChild(box);
  });

  // Adjust the canvas max-width based on the grid columns
  canvas.setAttribute("style", `max-width: calc(${grid.cols + 1} * 16px)`);
}

// Draw the canvas on first render
drawBoxes(grid.cols, grid.rows)