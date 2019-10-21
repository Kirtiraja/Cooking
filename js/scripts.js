var liters = function(gals) {
  return gals * 3.78541 ;

};

var gal = parseFloat(prompt("Enter gallons:"));
var result = liters(gal);
 alert(result);



 var liters = function(cups) {
   return cups / 4.227;
 };

 var cups = parseFloat(prompt("Enter cups:"));
 var result = liters(cups);
  alert(result);


  var tabletocup = function(tablespoon) {
    return tablespoon / 16;
  };

  var usertablespoon = parseFloat(prompt("Enter tablespoon:"));
  var result = tabletocup(usertablespoon);
   alert(result);
