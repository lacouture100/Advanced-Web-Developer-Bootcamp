var width = 500;
var height = 500;
var graphPadding = 30;

// THE HIGHER THE BIRTHRATE, THE LOWER THE LIFE EXPECTANCY

/*
var yMin = d3.min(birthData2011, d => d.lifeExpectancy);
var yMax = d3.max(birthData2011, d => d.lifeExpectancy);
*/

// We define our yScale as the life expectancy

var yScale = d3.scaleLinear()
            //.domain([yMin, yMax])
            .domain(d3.extent(birthData2011, d => d.lifeExpectancy))
            .range([height - graphPadding, graphPadding]);

// We define our xScale as the birth rate (births / population)

var xScale = d3.scaleLinear()
            //.domain([yMin, yMax])
            .domain(d3.extent(birthData2011, d => d.births / d.population))
            .range([graphPadding, width - graphPadding]);

// We define our axis
/*Each of the ticklines becomes a <g> with a .tick class */
var xAxis = d3.axisBottom(xScale)
            // Make the tick lines go through the whole graph
            .tickSize( -height + 2 * graphPadding)
            // remove the outerborder of the graph
            .tickSizeOuter(0);



var yAxis = d3.axisLeft(yScale)
            // Make the tick lines go through the whole graph
            .tickSize( -width + 2 * graphPadding)
            // remove the outerborder of the graph
            .tickSizeOuter(0);



/* We define our colorScale as the population density, we will map numbers to colors
Low densities are green, high densities are black */

var colorScale = d3.scaleLinear()
                .domain(d3.extent(birthData2011, d => d.population / d.area))
                .range(['lightgreen', 'black'])
            

// colorScale(d3.min(birthData2011, d => d.population / d.area)); // rgb(144,238,144)                
// colorScale(d3.max(birthData2011, d => d.population / d.area)); // rgb(0,0,0) 


// We define our radiusScale as the amount of births

var radiusScale = d3.scaleLinear()
                .domain(d3.extent(birthData2011, d => d.births))
                .range([2, 40])


// Define our tooltip

var tooltip = d3.select("body")
                .append("div")
                    //Set the div class
                    .classed("tooltip", true)
                
//Define our X axis Nomenclature

d3.select("svg")
        .append("g")
            .attr("transform", `translate(0,${height - graphPadding})`)
            .call(xAxis)

//Define our Y axis Nomenclature

d3.select("svg")
            .append("g")
                .attr("transform", `translate(${graphPadding},0)`)
                .call(yAxis)

// Visualize each of the circles

d3.select("svg")
            .attr("width", width)
            .attr("height", height)
        .selectAll("circle")
        .data(birthData2011)
        .enter()
        .append("circle")
            .attr("cx", d => xScale(d.births / d.population))
            .attr("cy", d => yScale(d.lifeExpectancy))
            .attr("fill", d => colorScale(d.population / d.area))
            .attr("r", d => radiusScale(d.births))
            //Make the tooltip appear
            .on("mousemove", d =>{
                tooltip
                    // Make tooltip visible when mouse is on top
                    .style("opacity", 1)
                    // Set the x position to the mouse's current position + half the width of the tooltip div
                    .style("left", d3.event.x - (tooltip.node().offsetWidth/2) + "px")
                    // Set the x position to the mouse's current position
                    .style("top", d3.event.y + 25 + "px")
                    .html(`
                    <p> Region: ${d.region} </p> 
                    <p> Births: ${d.births} </p> 
                    <p> Population: ${d.population} </p> 
                    <p> Area: ${d.area} </p>  
                    <p> Life Expectancy: ${d.lifeExpectancy} </p> 
                    `)
            })
            .on("mouseout", d =>{
                tooltip
                    //dissapear tooltip when mouse is no longer over
                    .style("opacity", 0)
                    // Set the x position to the mouse's current position
                    .style("left", d3.event.x + "px")
                    // Set the x position to the mouse's current position
                    .style("top", d3.event.y + "px")
            })
            

//Create the Title for each axis

//Lower Title

d3.select("svg")
        .append("text")
            .attr("x", width/2)
            .attr("y", height - graphPadding)
            .attr("dy", "1.5em")
            .style("text-anchor", "middle")
            .text("Births per capita");

// Top title

d3.select("svg")
        .append("text") 
            .attr("x", width / 2)
            .attr("y", -graphPadding/2)
            .attr("dy", "1.5em")
            .style("text-anchor", "middle")
            .style("font-size", "1.5em")
            .text("Births by country in 2011");

//Left Title
d3.select("svg")
            .append("text")
                .attr("transform", "rotate(-90)" )
                .attr("x", - height / 2)
                .attr("y", graphPadding)
                .attr("dy", "-1.1em")
                .style("text-anchor", "middle")
                .text("Life Expectancy");