var minYear = birthData[0].year;
var maxYear = birthData[birthData.length - 1].year;
var width = 600;
var height = 600;
var barPadding = 10;
var numBars = 12;
var barWidth = width / numBars - barPadding;

d3.select("input")
    .property("min", minYear)
    .property("max", maxYear)
    .property("value", minYear);

d3.select("svg")
    .attr("width", width)
    .attr("height", height)
  .selectAll("rect")
  .data(birthData.filter(function(d) {
    return d.year === minYear;
  }))
  .enter()
  .append("rect")
    .attr("width", barWidth)
    .attr("height", function(d) {
      return d.births / 2.5e6 * height;
    })
    .attr("y", function(d) {
      return height - d.births / 2.5e6 * height;
    })
    .attr("x", function(d,i) {
      return (barWidth + barPadding) * i;
    })
    .attr("fill", "purple");


d3.select("svg")
    .append("text")
    .classed("title", true)
    .text(`Birth data from ${minYear}`)
    .attr("x", width / 2)
    .attr("y", 30)
    .style("text-anchor", "middle")
    .style("font-size", "2em")

d3.select("input")
    .on("input", function() {
      var year = +d3.event.target.value;
      d3.selectAll("rect")
        .data(birthData.filter(function(d) {
          return d.year === year;
        }))

        /* WE MAKE THE TRANSITION HERE*/

        .transition()
        .duration(2000)
        .ease(d3.easeLinear)
        /* delay each datapoint's transition*/
        .delay((d,i) => i * 250)
        // Change ttitle while data finishes the animation
        .on('start', updateData(year))
        // Change the title when the data and animation is finished
        .on('end', setData(year))
        //Console log when the slider is being interrupted
        .on("interrupt", interruptData(year))
          .attr("height", function(d) {
            return d.births / 2.5e6 * height;
          })
          .attr("y", function(d) {
            return height - d.births / 2.5e6 * height;
          });
    });


function updateData(year){
    d3.select('.title')
      .text(`Updating to year ${year}`)
}
function setData(year){
  d3.select('.title')
  .text(`Data from year ${year}`)
}
function interruptData(year){
  console.log(`Interrupted loading from year ${year}`)
}