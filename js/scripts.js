var liters = function(gals) {
  return gals * 3.78541 ;

};

var gal = parseFloat(prompt("Enter gallons:"));
var result = liters(gal);
 alert(result);
 
