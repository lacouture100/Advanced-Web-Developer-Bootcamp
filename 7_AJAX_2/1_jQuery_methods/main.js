
$("#getBtn").click(function(){
  $.get('https://api.github.com/users/colt')
  .done(function(data){
    console.log(data);
  })
  .fail(function(){
    console.log("ERROR!");
  })
});

$("#postBtn").click(function(){
 var data = {name: "Charlie", city: "Florence"};
 $.post("www.catsarecoolandsoaredogs.com", data)
  .done(function(data){
   console.log("HI!");
 })
  .fail(function(){
   console.log("ERROR!");
 })
});

$("#getJSONBtn").click(function(){
  $.getJSON("https://api.github.com/users/colt")
  .done(function(data){
    console.log(data);
  })
  .fail(function(){
    console.log("PROBLEM!");
  })
});
