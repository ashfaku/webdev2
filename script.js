// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 
let selectedCellRow, selectedCellColumn;

function getGrid() {
    return document.getElementById("grid");
}
function createCell(row, col) {
    let cell = document.createElement('td');
    cell.setAttribute("data-row", row);
    cell.setAttribute("data-col", col);
    cell.onclick = () => {
        selectedCellRow = row;
        selectedCellColumn = col;
    };
    return cell;
}
// Add a row
function addRow() {
    let row = document.createElement('tr')
    for (let i = 0; i < numCols; i++) {
        row.appendChild(createCell(numRows, i));
    }
    getGrid().appendChild(row);
    numRows += 1;
}

// Add a column
function addColumn() {
    let rows = getGrid().children;
    for (let i = 0; i < numRows; i++) {
        rows[i].appendChild(createCell(i, numCols));
    }
    numCols += 1;

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