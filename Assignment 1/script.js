function myFunction_top() {
    var table = document.getElementById("button");
    var row = table.insertRow(1);
    var column1 = row.insertCell(0);
    var column2 = row.insertCell(1);
    var column3 = row.insertCell(2);
    var column4 = row.insertCell(3);
    var column5 = row.insertCell(4);
    column1.innerHTML = "";
    column2.innerHTML = "Raj";
    column3.innerHTML = "Singh";
    column4.innerHTML = "Delhi";
    column5.innerHTML = "India";
}
function myFunction_bottom() {
var table = document.getElementById("button");
var row = table.insertRow(-1);
var column1 = row.insertCell(0);
var column2 = row.insertCell(1);
var column3 = row.insertCell(2);
var column4 = row.insertCell(3);
var column5 = row.insertCell(4);
column1.innerHTML = "";
column2.innerHTML = "Mohan";
column3.innerHTML = "Chouchan";
column4.innerHTML = "Noida";
column5.innerHTML = "India";
}