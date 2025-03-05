// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 
/* 
<tr>
    <td onclick="alert('Clicked a table cell');"></td>
    <td onclick="alert('Clicked a table cell');"></td>
    <td onclick="alert('Clicked a table cell');"></td>
</tr> 
*/
function getGrid() {
    return document.getElementById("grid");
}

// Add a row
function addRow() {
    console.log(getGrid());
}

// Add a column
function addColumn() {
    alert("Clicked Add Col"); // Replace this line with your code.
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