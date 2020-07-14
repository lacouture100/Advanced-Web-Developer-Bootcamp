d3.json("./countries.json", function (error, data){
    if (error) throw error;

    d3.select('body')
        .selectAll('h3')
        .data(data.geonames)
        .enter()
        .append('h3')
        .text(d=> d.countryName);
})

