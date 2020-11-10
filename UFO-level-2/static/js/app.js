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
    var dateElement = d3.select("#datetime");
    var cityElement = d3.select("#city");
    var stateElement = d3.select("#state");
    var countryElement = d3.select("#country");
    var shapeElement = d3.select("#shape");


    // Get the value property of the input element
    var dateValue = dateElement.property("value");
    var cityValue = cityElement.property("value").toLowercase();
    var stateValue = stateElement.property("value").toLowercase();
    var countryValue = countryElement.property("value").toLowercase();
    var shapeValue = shapeElement.property("value").toLowercase();


    //looping through the table to filter on the selected date
    tableData.forEach(items => {
        //creating rows
        var row = tbody.append("tr");
    //looping through each entry
    Object.entries(items).forEach(([key, value]) => {
        //selecting only the ones that have the date selected by user
        if (dateValue === items.datetime||dateValue= "") {
        //putting in the information based on selection
        var cell = row.append("td");
        cell.text(value);
        }

    });


});

};