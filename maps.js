const gridItems = document.querySelectorAll('.grid-item'); // Select all grid items
let targetPositions = [6, 8, 10, 14, 18]; // Positions where circles should be placed
let currentPosition = 0; // Array indices are 0-based, so we start at 0

// Function to add a circle to a specified position
const addCircle = (position) => {
  // Check if the grid item exists before trying to append the circle
  if (gridItems[position]) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    gridItems[position].appendChild(circle);
  } else {
    console.log(`Grid item at position ${position + 1} doesn't exist.`);
  }
};

// Add circles to predefined positions
targetPositions.forEach(position => {
  addCircle(position - 1); // Convert 1-based index to 0-based
});

// JavaScript
function add() {
    const container = document.querySelector('.grid-container');
  
    // Get the number of current grid items
    const gridItems = container.querySelectorAll('.grid-item');
    let grits = gridItems.length + 1; // Starting position for the new grid items
  
    // Create three new grid items and append them to the container
    for (let i = 0; i < 3; i++) {
      const newItem = document.createElement('div');
      newItem.classList.add('grid-item', `grid-${grits}`);
      
      // Append the new grid item to the container
      container.appendChild(newItem);
  
      // Increment `grits` for the next grid item
      grits++;
    }

  }
  
function jump(){
    window.location.href = "flash.html";
}
