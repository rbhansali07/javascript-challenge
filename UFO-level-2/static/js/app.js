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

	// Select all the input elements and get the raw HTML node
  var inputElement1 = d3.select("#datetime");
  var inputElement2 = d3.select("#city");
  var inputElement3 = d3.select("#state");
  var inputElement4 = d3.select("#country");
  var inputElement5 = d3.select("#shape");

   // Get the value property of the input element
  var inputValue = inputElement1.property("value") || inputElement2.property("value") ||inputElement3.property("value") ||inputElement4.property("value") ||inputElement5.property("value");

  if (inputValue !== null) {

  	//log input values in console
  	console.log(inputValue);
	  //console.log(tableData);

  	var filteredData = tableData.filter(tableufodata => tableufodata.datetime === inputValue || tableufodata.city === inputValue || tableufodata.state === inputValue || tableufodata.country === inputValue || tableufodata.shape === inputValue );

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