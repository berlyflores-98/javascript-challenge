// from data.js
var tableData = data;
//starting the table
var tbody = d3.select("tbody");

// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#filter-btn");
d3.select(window).on("load", updateTable);

button.on("click", RemoveTable);
// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");
// Get the value property of the input element

//inputElement.on("change", RemoveTable);
function RemoveTable(){
    //preventing from not reloading
    d3.event.preventDefault();
    // Remove all table rows from tbody (update table)
    var table = d3.select("tbody").selectAll("tr").remove()
    updateTable();
};


// YOUR CODE HERE!
function updateTable(){
   
    var dateElement = d3.select("#datetime");
    //var dateValue = dateElement.property("value");
    var dateValue = dateElement.node().value;
    
    //looping through the table to filter on the selected date
    tableData.forEach(items => {
        //creating rows
        var row = tbody.append("tr");
    //looping through each entry
    Object.entries(items).forEach(([key, value]) => {
        //selecting only the ones that have the date selected by user
        if (dateValue === items.datetime||dateValue==="") {
        //putting in the information based on selection
        var cell = row.append("td");
        cell.text(value);
        }

    });


});
d3.select("#datetime").node().value = "";


};


