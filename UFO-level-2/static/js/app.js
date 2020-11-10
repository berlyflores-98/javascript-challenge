// from data.js
var tableData = data;
//starting the table
var tbody = d3.select("tbody");

// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#filter-btn");

button.on("click", handleClick);

// YOUR CODE HERE!
function handleClick(){

    function RemoveTable(){
    // Remove all table rows from tbody (update table)
    var table = d3.select("tbody").selectAll("tr").remove()
    };
    
      // Select the input element and get the raw HTML node
    var dateElement = d3.select("#datetime");
    var cityElement = d3.select("#city");
    var stateElement = d3.select("#state");
    var countryElement = d3.select("#country");
    var shapeElement = d3.select("#shape");

    dateElement.on("change", RemoveTable);
    cityElement.on("change", RemoveTable);
    stateElement.on("change", RemoveTable);
    countryElement.on("change", RemoveTable);
    shapeElement.on("change", RemoveTable);

    // Get the value property of the input element
    var dateValue = dateElement.property("value");
    var cityItem = cityElement.property("value");
    var stateItem = stateElement.property("value");
    var countryItem = countryElement.property("value");
    var shapeItem = shapeElement.property("value");

    //making sure all values are lowercased
    var cityValue = cityItem.toLowerCase();
    var stateValue = stateItem.toLowerCase();
    var countryValue = countryItem.toLowerCase();
    var shapeValue = shapeItem.toLowerCase();


    //looping through the table to filter on the selected date
    tableData.forEach(items => {
        //creating rows
        var row = tbody.append("tr");
    //looping through each entry
    Object.entries(items).forEach(([key, value]) => {
        //selecting only the ones that have the date selected by user
        if ((dateValue === items.datetime||dateValue=== "")&&
            (cityValue===""||cityValue=== items.city)&&
            (stateValue===""||stateValue ===items.state)&&
            (countryValue===""||countryValue===items.country)&&
            (shapeValue===""||shapeValue===items.shape)) {
        //putting in the information based on selection
        var cell = row.append("td");
        cell.text(value);
        }

    });


});

};