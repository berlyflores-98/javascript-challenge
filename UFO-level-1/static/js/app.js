// from data.js
var tableData = data;
//starting the table
var tbody = d3.select("tbody");

// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#filter-btn");

button.on("click", handleClick);

// YOUR CODE HERE!
function handleClick(){
      // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    console.log(inputElement);
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    //looping through the table to filter on the selected date
    tableData.forEach(items => {
        //creating rows
        var row = tbody.append("tr");
    //looping through each entry
    Object.entries(items).forEach(([key, value]) => {
        //selecting only the ones that have the date selected by user
        if (inputValue === items.datetime) {
        //putting in the information based on selection
        var cell = row.append("td");
        cell.text(value);
        }

    });


});

};


