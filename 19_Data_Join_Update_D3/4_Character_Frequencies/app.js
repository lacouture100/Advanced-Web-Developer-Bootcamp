
//Select the reset button
d3.select("#reset")
    .on("click", function() {
      d3.selectAll(".letter")
        .remove();
      //black out the phrase
      d3.select("#phrase")
          .text("");
      //black out the phrase
      d3.select("#count")
          .text("");
    });

//Select the inputform
d3.select("form")
    // listen for the submit button click
    .on("submit", function() {
      //prevent the page from reloading
      d3.event.preventDefault();
      //grab the input text
      var input = d3.select("input");
      var text = input.property("value");

      //fill the letters according to their frequency
      var letters = d3.select("#letters")
                      .selectAll(".letter")
                      .data(getFrequencies(text), function(d) {
                        return d.character;
                      });

      letters
      // Set the class of existing letters to false, and remove them
          .classed("new", false)
        .exit()
        .remove();

      // Set the class of new letters to true, and merge them to the update
      letters
        .enter()
        .append("div")
          .classed("letter", true)
          .classed("new", true)
        .merge(letters)
          .style("width", "20px")
          .style("line-height", "20px")
          .style("margin-right", "5px")
          .style("height", function(d) {
            // the height of the div depends on the letter count
            return d.count * 20 + "px";
          })
          //set the inner text to the character
          .text(function(d) {
            return d.character;
          });

      
      // Display the input text
      d3.select("#phrase")
          .text("Analysis of: " + text);

      // Display how many new characters there are
      d3.select("#count")
          .text("(New characters: " + letters.enter().nodes().length + ")");
      
      // Reset the input field
      input.property("value", "");
    });

function getFrequencies(str) {
  //sort the letters in the string alphabetically
  var sorted = str.split("").sort();
  //create a new data array
  var data = [];
  // loop through each letter to make a key-value pair
  for (var i = 0; i < sorted.length; i++) {
    
    var last = data[data.length - 1];
    // IF there is a last element, and this last element is equal to the current
    // character, add to the count of the character 
    if (last && last.character === sorted[i]) last.count++;
    // if the character is not the last element to sort, make a new key-value pair for it
    else data.push({ character: sorted[i], count: 1 });
  }
  return data;
}
