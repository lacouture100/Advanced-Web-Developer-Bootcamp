d3.select("h1").on("click", function(){
    console.log("event listeners are DA BOMB");
})

d3.select("#new-note"). on("submit", function{
    d3.event.preventDefault();

    var input = d3.select("input");
    d3.select("#notes")
      .append("p")
        .classed("note", true)
        .text(input.property("value"));
});