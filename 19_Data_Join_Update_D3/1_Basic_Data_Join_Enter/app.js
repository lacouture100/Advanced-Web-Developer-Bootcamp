var quotes = [{
  quote: "I see dead people.",
  movie: "The Sixth Sense",
  year: 1999,
  rating: "PG-13"
}, {
  quote: "May the force be with you.",
  movie: "Star Wars: Episode IV - A New Hope",
  year: 1977,
  rating: "PG"
}, {
  quote: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
  movie: "Dirty Harry",
  year: 1971,
  rating: "R"
}, {
  quote: "You had me at 'hello.'",
  movie: "Jerry Maguire",
  year: 1996,
  rating: "R"
}, {
  quote: "Just keep swimming. Just keep swimming. Swimming, swimming, swiming.",
  movie: "Finding Nemo",
  year: 2003,
  rating: "G"
}];

var colors = {
  "G" : "3cff00",
  "PG" : "f9ff00",
  "PG-13" : "ff9000",
  "R" : "ff0000",
}

//grab the unorganized list(ul) #quotes
d3.select("#quotes")

  .style("list-style", "none")
  //grab each piece of data, and attach it to a <li>
  .selectAll("li")
  //grab our data from our quotes
  .data(quotes)
  //create placeholder nodes out of our data
  .enter()
  //append each of these nodes as a separate <li> element
  .append("li")
  //set the text of each list item
  /*.text(function(datanode){
    return `"${datanode.quote}" - ${datanode.movie} (${datanode.year})`
  })*/
  .text(d => `"${d.quote}" - ${d.movie} (${d.year})`)
  .style("margin", "20px")
  .style("padding", "20px")
  //double the quote size if the quote is fewer than 25 char
  /*.style("font-size", function (d) {
    //double the quote size if the quote is fewer than 25 char
    return d.quote.length < 25 ? "2em" : "1em";
  })*/
  .style("font-size", d => d.quote.length < 25 ? "2em" : "1em")
  .style("background-color", d => colors[d.rating])
  .style("border-radius","8px");