// import table data from data.js
let tableData = data;

// upload table data to the html page
data.forEach((sighting) =>{
    let row = d3.select('#ufo-table>tbody').append('tr')
    Object.entries(sighting).forEach(([key,value]) =>{
        let cell = row.append('td');
        cell.text(value);
    });
});


//filter data based on user date
let filter = d3.select('#filter-btn');
filter.on("click", function() {
    d3.selectAll('#ufo-table>tbody>tr').remove();
  
    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property("value");

    console.log(inputValue);
    let filtedData = data.filter(data => data.datetime === inputValue)
    
    filtedData.forEach((sighting) =>{
        let row = d3.select('#ufo-table>tbody').append('tr')
        Object.entries(sighting).forEach(([key,value]) =>{
            let cell = row.append('td');
            cell.text(value);
        });
    });
});
