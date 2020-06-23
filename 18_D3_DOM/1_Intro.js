d3.select('#page-title');//grab one element with the CSS tag
d3.selectAll('#page-paragraphs').nodes(); //grab every element with the CSS tag
d3.selectAll('#page-paragraphs').node();//grab one element with the CSS tag

d3.select('#page-title')
    .style("background-color", "#00feab")
    .style("color", "#ffffff")
    .attr("class", "new-class")
    .text("D3 is cool!")
    .classed("class", false)