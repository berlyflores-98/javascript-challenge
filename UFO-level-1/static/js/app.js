// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// YOUR CODE HERE!
tableData.forEach(items => {
    var row = tbody.append("tr");
    Object.entries(items).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);

    });


});


