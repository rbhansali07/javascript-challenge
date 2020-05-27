// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);

// use Arrow Functions to load data
data.forEach((ufoData) => {
  var row = tbody.append("tr");
  Object.entries(ufoData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});


// Select the button
var button = d3.select("#filter-btn");

// Select the filter
var form = d3.select("#filters");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {

	 // Prevent the page from refreshing
  //d3.event.preventDefault();

	// Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

   // Get the value property of the input element
  var inputValue = inputElement.property("value");

  if (inputValue !== null) {

  	//log input values in console
  	console.log(inputValue);
	console.log(tableData);

  	var filteredData = tableData.filter(tableufodata => tableufodata.datetime === inputValue);

  	console.log(filteredData);
  	tbody.html("")

  	//create table with filtered data
  	filteredData.forEach((ufoFilteredData) => {

  		console.log(ufoFilteredData);
  		
  		var row = tbody.append("tr");
  		Object.entries(ufoFilteredData).forEach(([key, value]) => {
    	var cell = row.append("td");
    	cell.text(value);
  		});
	});

 }
}