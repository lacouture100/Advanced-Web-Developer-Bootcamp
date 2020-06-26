// MAkes each title eleemtn have a random font size

d3.selectAll("li")
    .style("font-size", function () {
        return Math.random() * 40 + "px"
    })


//All of the even numbered list items have a light gray background

d3.selectAll("li")
    .style("font-size", function (_, idx) {
        return idx % 2 === 0 ? "lightgrey" : "white"
    })


