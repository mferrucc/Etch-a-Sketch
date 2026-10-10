function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function drawGrid() {
    
    const div = document.querySelector(".container");

    div.innerHTML = ""; // Clear the container before drawing a new grid

    const gridSize = document.querySelector("#grid-size").value;
    
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${960 / gridSize}px`;
        cell.style.height = `${960 / gridSize}px`;
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = getRandomRgbColor();
        });
        cell.addEventListener("mouseleave", () => {
            cell.hideTimeout = setTimeout(() => {
                cell.style.backgroundColor = "white";
            }, 1000);
        });

        div.appendChild(cell);
    }
}

drawGrid(); // Draw the initial grid when the page loads