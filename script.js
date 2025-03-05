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
    if (getGrid().childElementCount > 0)
        getGrid().lastChild.remove();
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
function applyFunctionToAllCells(func) {
    let rows = [...getGrid().children];
    rows.forEach(row => {
        let columns = [...row.children];
        columns.forEach(cell => func(cell));
    });
}
// Fill all uncolored cells
function fillUncoloredCells(){
    applyFunctionToAllCells((cell) => {
        console.log(cell.style.backgroundColor);
        cell.style.backgroundColor = (cell.style.backgroundColor == "" || cell.style.backgroundColor == "white") 
        ? colorSelected
        : cell.style.backgroundColor;
    });
}
// Fill all cells
function fillAllCells(){
    applyFunctionToAllCells((cell) => {
        console.log(cell.style.backgroundColor);
        cell.style.backgroundColor = colorSelected;
    });
}

// Clear all cells
function clearAllCells(){
    applyFunctionToAllCells((cell) => {
        console.log(cell.style.backgroundColor);
        cell.style.backgroundColor = "white";
    });
}