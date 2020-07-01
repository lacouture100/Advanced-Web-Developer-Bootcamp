d3.max([1,2,3,4,5])//5
d3.min([1,2,3,4,5])//1

var people = [
    {name: "Himi", age: 40},
    {name: "Lala", age: 10}
]

d3.max(people, function(d) { return d.age; })
//40


//////SCALE

var scale = d3.scaleLinear()
            .domain([1, 17])
            .range([-4, 52]);

        

scale(5)//10


////////////EXTENT
// Gets the min and max

d3.extent(people, d => d.age);
// [10,40]