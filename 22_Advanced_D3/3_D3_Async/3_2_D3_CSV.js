d3.csv(".simplemaps-worldcities-basic.csv", function (row, i, headers){
   // row - current CSV row as an object
   // i - row index
   // headers - array of CSV headers, the keys of the row object

   //First callback used to filter data
   if(+row.pop < 10000) return;
   return {
       cityName: row.city,
       countryCode : row.iso2,
       population : +row.pop
   }

}, function(error,data){
    //second callback
    if(error) throw error;

    console.log(data);
})

