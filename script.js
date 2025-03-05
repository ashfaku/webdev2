// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

function getGrid() {
    return document.getElementById("grid");
}

// Add a row
function addRow() {
    numRows += 1;
    let grid = getGrid();
    let row = document.createElement('tr')
    for (let i = 0; i < numCols; i++) {
        row.appendChild(document.createElement('td'));
    }
    grid.appendChild(row);
    console.log(123);
}

// Add a column
function addColumn() {
    numCols += 1;
    let rows = getGrid().children;
    for (let i = 0; i < numRows; i++) {
        console.log(rows[i]);
        console.log(i);
    }
}

// Remove a row
function removeRow() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeColumn() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillUncoloredCells(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAllCells(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAllCells(){
    alert("Clicked Clear All"); // Replace this line with your code.
}